// src/components/RetreatItem.js
import React from 'react';
import styled from 'styled-components';

const RetreatCard = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const RetreatItem = ({ retreat }) => (
  <RetreatCard>
    <img src={retreat.image} alt={retreat.title} style={{ width: '100%', maxWidth: '200px', borderRadius: '8px' }} />
    <div style={{ marginLeft: '16px' }}>
      <h2>{retreat.title}</h2>
      <p>{retreat.description}</p>
      <p><strong>Date:</strong> {retreat.date}</p>
      <p><strong>Location:</strong> {retreat.location}</p>
      <p><strong>Price:</strong> {retreat.price}</p>
    </div>
  </RetreatCard>
);

export default RetreatItem;
