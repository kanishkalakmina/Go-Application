import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  // Example state data (replace with actual implementation)
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [savingsGoals, setSavingsGoals] = useState([
    { id: 1, name: "Goal 1", target: 1000, progress: 500 },
    { id: 2, name: "Goal 2", target: 2000, progress: 1500 }
  ]);

  // Example function to calculate savings goals progress percentage
  const calculateProgress = (goal) => {
    return ((goal.progress / goal.target) * 100).toFixed(2);
  };

  return (
    <Container className="py-2">
      <Row>
        {/* Total Expenses and Total Income */}
        <Col>
          <h4>Total Expenses: ${totalExpenses.toFixed(2)}</h4>
        </Col>
        <Col>
          <h4>Total Income: ${totalIncome.toFixed(2)}</h4>
        </Col>
      </Row>

      <Row className="my-3">
        {/* Savings Goals Progress */}
        <Col>
          <h4>Savings Goals Progress</h4>
          <ul>
            {savingsGoals.map((goal) => (
              <li key={goal.id}>
                {goal.name}: {calculateProgress(goal)}%
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      <Row className="my-3">
        {/* Add New Goal Button */}
        <Col>
          <Link to="/add" className="btn btn-primary">
            Add New Goal
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
