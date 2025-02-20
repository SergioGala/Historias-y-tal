// src/App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import theme from './styles/themes/lightTheme';
import GlobalStyles from './styles/globals/GlobalStyles';
import Container from './components/Layout/Container';
import Section from './components/Layout/Section';
import Grid from './components/Layout/Grid';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.primary.main};
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
      <Section spacing="md">
        <Container>
          <h1>Grid Demo</h1>
          <Grid columns={3} gap="md">
            <Card>Card 1</Card>
            <Card>Card 2</Card>
            <Card>Card 3</Card>
          </Grid>
        </Container>
      </Section>

      <Section variant="secondary" spacing="md">
        <Container>
          <h2>Auto-fit Grid</h2>
          <Grid autoFit minWidth="200px" gap="md">
            <Card>Auto 1</Card>
            <Card>Auto 2</Card>
            <Card>Auto 3</Card>
            <Card>Auto 4</Card>
          </Grid>
        </Container>
      </Section>
    </ThemeProvider>
  );
}

export default App;