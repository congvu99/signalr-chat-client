import React, { useEffect, useState } from 'react';
import connection from './signalrConnection';

const App: React.FC = () => {
  const [connectionStatus, setConnectionStatus] = useState<string>('Đang kết nối...');

  useEffect(() => {
    connection
      .start()
      .then(() => {
        console.log('Đã kết nối thành công đến Hub!');
        setConnectionStatus('Kết nối thành công');
      })
      .catch((err) => {
        console.error('Kết nối thất bại:', err);
        setConnectionStatus('Kết nối thất bại');
      });

    return () => {
      connection.stop();
    };
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <p>Trạng thái kết nối: {connectionStatus}</p>
    </div>
  );
};

export default App;
