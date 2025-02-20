// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import theme from './styles/themes/lightTheme';
import GlobalStyles from './styles/globals/GlobalStyles';
import Container from './components/Layout/Container';
import Button from './components/UI/Button';

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  align-items: center;
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 1rem;
`;

const DemoSection = styled.div`
  margin-bottom: 3rem;

  h2 {
    margin-bottom: 1.5rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const AppWrapper = styled.div`
  background: #121212;
  min-height: 100vh;
  padding: 2rem 0;

  h1 {
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    text-shadow: 0 0 10px rgba(255,255,255,0.5);
  }
`;

function App() {
  const [loading, setLoading] = useState({});

  const handleClick = (buttonId) => {
    setLoading(prev => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setLoading(prev => ({ ...prev, [buttonId]: false }));
    }, 1500);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapper>
        <Container>
          <h1>🚀 Botones mas mi rollo tu sabes 🚀</h1>
          
          <DemoSection>
            <h2>💜 Botones Cyberpunk</h2>
            <ButtonContainer>
              <Button variant="primary" size="sm" onClick={() => handleClick('p1')} loading={loading['p1']}>
                SMALL CYBER
              </Button>
              <Button variant="primary" onClick={() => handleClick('p2')} loading={loading['p2']}>
                MEDIUM CYBER
              </Button>
              <Button variant="primary" size="lg" onClick={() => handleClick('p3')} loading={loading['p3']}>
                LARGE CYBER
              </Button>
            </ButtonContainer>
          </DemoSection>

          <DemoSection>
            <h2>☢️ Botones Tóxicos</h2>
            <ButtonContainer>
              <Button variant="secondary" size="sm">
                SMALL TOXIC
              </Button>
              <Button variant="secondary">
                MEDIUM TOXIC
              </Button>
              <Button variant="secondary" size="lg">
                LARGE TOXIC
              </Button>
            </ButtonContainer>
          </DemoSection>

          <DemoSection>
            <h2>🌈 Botones Rainbow</h2>
            <ButtonContainer>
              <Button variant="rainbow" size="sm">
                SMALL RAINBOW
              </Button>
              <Button variant="rainbow">
                MEDIUM RAINBOW
              </Button>
              <Button variant="rainbow" size="lg">
                LARGE RAINBOW
              </Button>
            </ButtonContainer>
          </DemoSection>

          <DemoSection>
            <h2>🔥 Botones Lava</h2>
            <ButtonContainer>
              <Button variant="danger" size="sm">
                SMALL LAVA
              </Button>
              <Button variant="danger">
                MEDIUM LAVA
              </Button>
              <Button variant="danger" size="lg">
                LARGE LAVA
              </Button>
            </ButtonContainer>
          </DemoSection>

          <DemoSection>
            <h2>👽 Botones Alien</h2>
            <ButtonContainer>
              <Button variant="alien" size="sm">
                SMALL ALIEN
              </Button>
              <Button variant="alien">
                MEDIUM ALIEN
              </Button>
              <Button variant="alien" size="lg">
                LARGE ALIEN
              </Button>
            </ButtonContainer>
          </DemoSection>

          <DemoSection>
            <h2>🤖 Estados Especiales</h2>
            <ButtonContainer>
              <Button variant="primary" disabled>
                DISABLED CYBER
              </Button>
              <Button variant="rainbow" loading>
                LOADING RAINBOW
              </Button>
              <Button variant="danger" disabled>
                DISABLED LAVA
              </Button>
              <Button variant="alien" loading>
                LOADING ALIEN
              </Button>
            </ButtonContainer>
          </DemoSection>

        </Container>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;