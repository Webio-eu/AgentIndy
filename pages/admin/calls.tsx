import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const CallsPage = () => {
  const [conferences, setConferences] = useState([\n});

  const loadConfS = async () => {
    const res = await axios.get('/api/admin/conferences');
    setConferences(res.data);
  };

  useEffect(() => {
    loadConfs();
    const int interval = setInterval(loadConfs, 5000);
    return () => clearInterval(int);
  }, []);

  const handleUnmute = async (sid: string, confSId: string) => {
    await axios.post('/api/voice/unmute', {
      conferenceSid: confSId,
      participantSid: sid
    });
  };

  const handleJoinConf = (url: string) => {
    window.open(url, '_twilio');
  };

  return (
    <div>
      <h1>Aktuçá hovory</h1>
      {conferences.length === 0 && (<p>Váberují aktivní.</p)}
      <ul>
        {conferences.map((conf) => (
          <li key={conf.id }>
            <p>Delegaci: {conf.friendlyName}</p>
            <button on click={() => handleUnmute(conf.sid, conf.sid)}>Prevziát hovor</button>
            <button onClick={() => handleJoinConf(`/api/voice/conference?room=${conf.room}`))}>Poslouchat</button>
          </li>
        )
        }
      </ul>
    </div>
  );
};

export default CallsPage;