import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Bank = () => {
    const [transactions, setTransactions] = useState([
        { id: 1, date: '2024-06-10', amount: '$100', description: 'Groceries' },
        { id: 2, date: '2024-06-11', amount: '$50', description: 'Gas' },
        { id: 3, date: '2024-06-12', amount: '$200', description: 'Rent' }
      ]);
    
      const handleDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        console.log('Dropped file:', file);
        // Handle file upload here (e.g., upload to a server)
      }, []);
    
      const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
        accept: 'image/*'
      });
    
      return (
        <div style={{ padding: '20px' }}>
          
          <div {...getRootProps()} style={styles.dropzone}>   <h1> Upload Bank Statement</h1>
            <input {...getInputProps()} />
            {
              isDragActive ? 
                <p>Drop the image here ...</p> :
                <p>Drag & drop an image here, or click to select one</p>
            }
          </div>
          <h1>Transaction List</h1>
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Date</th>
                  <th style={styles.th}>Amount</th>
                  <th style={styles.th}>Description</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td style={styles.td}>{transaction.id}</td>
                    <td style={styles.td}>{transaction.date}</td>
                    <td style={styles.td}>{transaction.amount}</td>
                    <td style={styles.td}>{transaction.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };
    
    const styles = {
      dropzone: {
        border: '2px dashed #cccccc',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '5px',
        margin: '20px auto',
        width: '300px',
        backgroundColor: '#f9f9f9'
      },
      tableContainer: {
        margin: '20px auto',
        width: '80%',
        overflowX: 'auto'
      },
      table: {
        width: '100%',
        borderCollapse: 'collapse'
      },
      th: {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
        backgroundColor: '#f4f4f4'
      },
      td: {
        border: '1px solid #ddd',
        padding: '8px'
      }
};

export default Bank;
