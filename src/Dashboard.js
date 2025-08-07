import React from 'react';

const Dashboard = () => {
  const dashboardStyles = {
    body: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      margin: 0,
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px'
    },
    title: {
      color: '#333',
      fontSize: '2.5em',
      marginBottom: '10px'
    },
    subtitle: {
      color: '#666',
      fontSize: '1.2em'
    },
    metricsContainer: {
      display: 'flex',
      gap: '30px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    metricBox: {
      background: 'white',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      minWidth: '250px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    },
    metricValue: {
      fontSize: '3em',
      fontWeight: 'bold',
      marginBottom: '10px'
    },
    metricLabel: {
      fontSize: '1.3em',
      color: '#666',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    activeUsersValue: {
      color: '#4CAF50'
    },
    totalDeploymentsValue: {
      color: '#2196F3'
    },
    footer: {
      textAlign: 'center',
      marginTop: '60px',
      color: '#999',
      fontSize: '0.9em'
    }
  };

  const handleMetricBoxHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
  };

  const handleMetricBoxLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  };

  return (
    <div style={dashboardStyles.body}>
      <div style={dashboardStyles.container}>
        <div style={dashboardStyles.header}>
          <h1 style={dashboardStyles.title}>🚀 Ace Frontend Dashboard</h1>
          <p style={dashboardStyles.subtitle}>Real-time metrics and deployment statistics</p>
        </div>
        
        <div style={dashboardStyles.metricsContainer}>
          <div 
            style={{...dashboardStyles.metricBox}}
            onMouseEnter={handleMetricBoxHover}
            onMouseLeave={handleMetricBoxLeave}
          >
            <div style={{...dashboardStyles.metricValue, ...dashboardStyles.activeUsersValue}}>
              5
            </div>
            <div style={dashboardStyles.metricLabel}>
              Logged-in Users
            </div>
          </div>
          
          <div 
            style={{...dashboardStyles.metricBox}}
            onMouseEnter={handleMetricBoxHover}
            onMouseLeave={handleMetricBoxLeave}
          >
            <div style={{...dashboardStyles.metricValue, ...dashboardStyles.totalDeploymentsValue}}>
              25
            </div>
            <div style={dashboardStyles.metricLabel}>
              Production Deployments
            </div>
          </div>
        </div>
        
        <div style={dashboardStyles.footer}>
          <p>Dashboard created for ace-frontend-test-arthur repository</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
