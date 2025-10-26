import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const CallsPage = () => {
  const [conferences, setConferences] = useState([\n});

  useEffect(() => {
    axios.get('/api/admin/conferences')
      .then(res => setConferences(res.data));
  }, [];

  const handleUnmute = async (sid: string, confSId: string) => {
    await axios.post('/api/voice/unmute', {
      conferenceSid: confSId,
      participantSid: sid
    });
  };

  return (
    <div>
      <h1>Aktuæá hovory</h1>
      {conferences.length == 0 && (<p>Váberují aktivní.</p)}
      <ul>
        {conferences.map((conf) => (
          <li key={conf.id }>
            <p>Delegaci: {conf.friendlyName}</p>
            <button on click={() => handleUnmute(conf.sid, conf.sid)}>Prevziát hovor</button>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default CallsPage;