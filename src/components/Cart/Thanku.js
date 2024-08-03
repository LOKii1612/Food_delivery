// // ThankYouPage.js
// import React from 'react';

// const styles = {
//   container: {
//     textAlign: 'center',
//     padding: '50px',
//     backgroundColor: '#f0f8ff',
//   },
//   heading: {
//     fontSize: '2.5rem',
//     color: '#FF0000',
//   },
//   paragraph: {
//     fontSize: '1.4rem',
//     color: '#333',
//   },
// };

// function ThankYouPage() {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Thank You!</h1>
//       <p style={styles.paragraph}>Your order has been received.</p>
//       <p style={styles.paragraph}>We appreciate your Patience and will get back to you soon.</p>
//     </div>
//   );
// }

// export default ThankYouPage;
import React from 'react';
import './ThankYouPage.css'; // Import the CSS file for styling

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <h1 className="thank-you-heading">Thank You!</h1>
      <p className="thank-you-message">
        Your order has been placed successfully. We appreciate your business!
      </p>
      <p className="thank-you-message">
        You will receive a confirmation message shortly.
      </p>
      <a href="/" className="thank-you-button">
        Return to Home
      </a>
    </div>
  );
};

export default ThankYouPage;
