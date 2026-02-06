// src/components/common/Offline.js
const Offline = () => {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f8d7da',
      color: '#721c24',
      minHeight: '100vh'
    }}>
      <h2>You are offline</h2>
      <p>Please check your internet connection and try again.</p>
    </div>
  );
};

export default Offline;