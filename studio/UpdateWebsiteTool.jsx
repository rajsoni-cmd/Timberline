import {useState} from 'react'
import {deployHookUrl, websiteUrl} from './project.config'

const box = {
  maxWidth: 560,
  margin: '64px auto',
  padding: 32,
  fontFamily: 'inherit',
  lineHeight: 1.6,
}
const btn = {
  background: '#01261d',
  color: '#fff',
  border: 0,
  borderRadius: 999,
  padding: '14px 28px',
  fontSize: 15,
  fontWeight: 600,
  cursor: 'pointer',
}

export function UpdateWebsiteTool() {
  const [state, setState] = useState('idle')

  const run = async () => {
    setState('sending')
    try {
      // no-cors: Cloudflare accepts the request; we just can't read the reply.
      await fetch(deployHookUrl, {method: 'POST', mode: 'no-cors'})
      setState('done')
    } catch {
      setState('error')
    }
  }

  return (
    <div style={box}>
      <h2 style={{marginTop: 0}}>Update the live website</h2>
      <p>
        The website updates <b>automatically</b> about 2–3 minutes after you click <b>Publish</b> on
        any item. Use this button only if a change hasn't appeared after 5 minutes.
      </p>
      {deployHookUrl ? (
        <button type="button" style={btn} onClick={run} disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Update website now'}
        </button>
      ) : (
        <p style={{color: '#a33'}}>Not set up yet — ask your web developer to add the deploy hook.</p>
      )}
      {state === 'done' && (
        <p style={{color: '#1a7f37'}}>
          ✓ Update started. Refresh{' '}
          <a href={websiteUrl} target="_blank" rel="noreferrer">
            the website
          </a>{' '}
          in about 3 minutes.
        </p>
      )}
      {state === 'error' && <p style={{color: '#a33'}}>Something went wrong — please try again.</p>}
      <p style={{marginTop: 32}}>
        <a href={websiteUrl} target="_blank" rel="noreferrer">
          Open the website ↗
        </a>
      </p>
    </div>
  )
}
