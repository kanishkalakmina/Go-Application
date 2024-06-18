// Footer.js
import React from 'react';
const styles = {
  app: {
    textAlign: 'center',
    color: '#333',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
};
const Footer = () => {
  return (
    <div style={styles.app}>
      <footer style={styles.footer}>
        <p>© 2024 Budget Buddy. All rights reserved.</p>
      </footer>
    </div>

  );
};

export default Footer;
