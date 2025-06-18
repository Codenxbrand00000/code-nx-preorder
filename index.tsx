
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://script.google.com/macros/s/YOUR_WEB_APP_URL/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ name, email }),
    });
    setStatus('Terkirim!');
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Pre-order CODE.NX</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Kirim</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
