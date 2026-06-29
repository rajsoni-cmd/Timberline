"""Backend API tests for Timberline Custom Homes."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://timberline-studio.preview.emergentagent.com').rstrip('/')


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


VALID_PAYLOAD = {
    "first_name": "Test",
    "last_name": "User",
    "email": "rajsoni48879@gmail.com",
    "phone": "555-1234",
    "budget": "$1M-$2M",
    "contractors_contacted": "2",
    "hear_about": "Google",
    "hear_about_other": "",
    "project_location": "Kawartha Lakes",
    "project_type": "New Build",
    "project_type_other": "",
    "notes": "Looking forward to it",
}


# --- Health endpoints ---
class TestHealth:
    def test_root(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Timberline" in data["message"]

    def test_health(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/health")
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        assert data.get("resend_configured") is True


# --- Contact endpoint ---
class TestContact:
    def test_contact_valid_payload_returns_200(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/contact", json=VALID_PAYLOAD)
        assert r.status_code == 200, f"Expected 200, got {r.status_code}: {r.text}"
        data = r.json()
        assert data.get("status") == "success"
        assert data.get("email_id"), f"Expected non-empty email_id, got: {data}"
        assert isinstance(data.get("email_id"), str)

    def test_contact_missing_first_name(self, api_client):
        payload = {k: v for k, v in VALID_PAYLOAD.items() if k != "first_name"}
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 422

    def test_contact_missing_last_name(self, api_client):
        payload = {k: v for k, v in VALID_PAYLOAD.items() if k != "last_name"}
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 422

    def test_contact_missing_email(self, api_client):
        payload = {k: v for k, v in VALID_PAYLOAD.items() if k != "email"}
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 422

    def test_contact_missing_budget(self, api_client):
        payload = {k: v for k, v in VALID_PAYLOAD.items() if k != "budget"}
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 422

    def test_contact_missing_project_type(self, api_client):
        payload = {k: v for k, v in VALID_PAYLOAD.items() if k != "project_type"}
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 422

    def test_contact_invalid_email(self, api_client):
        payload = {**VALID_PAYLOAD, "email": "not-an-email"}
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 422
