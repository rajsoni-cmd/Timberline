# Timberline Custom Homes — Website

- `frontend/` — the website (React). Hosted on Cloudflare Pages.
- `frontend/functions/` — contact form email (Cloudflare Pages Function + Resend).
- `studio/` — the content editor for the client (Sanity Studio).
- `backend/` — old Emergent/FastAPI backend, **no longer used**.

📘 **Setup & deployment:** see [SETUP-GUIDE.md](SETUP-GUIDE.md)
🧑‍💼 **For the client:** see [CLIENT-GUIDE.md](CLIENT-GUIDE.md)

Local development:

```bash
cd frontend && yarn install && yarn start      # website on http://localhost:3000
cd studio && npm install && npm run dev        # editor on http://localhost:3333
```
