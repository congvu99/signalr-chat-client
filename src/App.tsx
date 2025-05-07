import React, { useEffect, useState } from 'react';
import connection from './signalrConnection';

const App: React.FC = () => {
  const [connectionStatus, setConnectionStatus] = useState<string>('Đang kết nối...');

  useEffect( () => {
    (async ()=>{
      try {
        await connection.start();
        console.log("✅ SignalR Connected!");
    } catch (err) {
        console.error(err);
    }
    })()
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <p>Trạng thái kết nối: {connectionStatus}</p>
    </div>
  );
};

export default App;
