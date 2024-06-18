import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const Income = () => {
    const [incomeList, setIncomeList] = useState([]);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddIncome = () => {
        const newIncome = {
            id: incomeList.length + 1,
            description,
            amount: parseFloat(amount),
            date: new Date().toISOString().split('T')[0]
        };
        setIncomeList([...incomeList, newIncome]);
        setDescription('');
        setAmount('');
    };

    const data = {
        labels: incomeList.map(entry => entry.date),
        datasets: [
            {
                label: 'Income',
                data: incomeList.map(entry => entry.amount),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
        ],
    };
  return (
    <>
       <div style={{padding: '10px'}}>
            <h2>Income Tracker</h2>
            <div>
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button onClick={handleAddIncome}>Add Income</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {incomeList.map(entry => (
                        <tr key={entry.id}>
                            <td>{entry.date}</td>
                            <td>{entry.description}</td>
                            <td>${entry.amount.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{height:"900px", width:"900px"}}> 
            {incomeList.length > 0 && (
                <div>
                    <h3>Income Chart</h3>
                    <Line data={data} />
                </div>
                
            )}
            </div>
        </div>
    </>
  );
};

export default Income;
