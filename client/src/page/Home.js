import React from "react";

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '20px',
    marginBottom: '40px',
  },
  featureCard: {
    flex: '1 1 calc(30% - 20px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    backgroundColor: 'green'
  },
  featureCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  content: {
    padding: '20px',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '1.5em',
    color: '#4caf50',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1em',
    color: '#555',
  },
  callToAction: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
  },
  callToActionHover: {
    backgroundColor: '#45a049',
  },
};
const Home = () => {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  return (
    <div style={styles.container}>
      <section style={styles.section}>
        <div
          style={{
            ...styles.featureCard,
            ...(hoveredCard === 1 ? styles.featureCardHover : {}),
          }}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://via.placeholder.com/300x200"
            alt="Reports"
            style={styles.image}
          />
          <div style={styles.content}>
            <h2 style={styles.title}>Comprehensive Reports</h2>
            <p style={styles.description}>
              Get clear insights into your spending and income with detailed reports.
            </p>
          </div>
        </div>

        <div
          style={{
            ...styles.featureCard,
            ...(hoveredCard === 2 ? styles.featureCardHover : {}),
          }}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://via.placeholder.com/300x200"
            alt="Income Tracking"
            style={styles.image}
          />
          <div style={styles.content}>
            <h2 style={styles.title}>Income Tracking</h2>
            <p style={styles.description}>
              Monitor all your income streams in one place seamlessly.
            </p>
          </div>
        </div>

        <div
          style={{
            ...styles.featureCard,
            ...(hoveredCard === 3 ? styles.featureCardHover : {}),
          }}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://via.placeholder.com/300x200"
            alt="Bank Integration"
            style={styles.image}
          />
          <div style={styles.content}>
            <h2 style={styles.title}>Bank Statements Integration</h2>
            <p style={styles.description}>
              Import and categorize transactions automatically for easy management.
            </p>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Home;
