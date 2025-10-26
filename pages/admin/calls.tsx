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

  const getParticipants = async (confSId: string) => {
    const res = await axios.post('/api/voice/participants', { conferenceSid });
    return res.data;
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
            <ul>
            {conf.activeConferenceSid&& (
              getParticipants(conf.activeConferenceSid).then(participants => {
                participants.map((p) => (
                  <li key={p.callSid}>{p.callSid}: {p.muted ? "Muted" : "Active"}</li>
                ))
              })
            }
            }
            </ul>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default CallsPage;