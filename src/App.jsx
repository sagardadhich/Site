// src/App.js
import React from 'react';
import Header from './components/Header';
import RetreatList from './components/RetreatList';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 16px;

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <RetreatList />
    </AppContainer>
  );
}

export default App;

