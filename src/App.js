// src/App.js
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import theme from "./styles/themes/lightTheme";
import GlobalStyles from "./styles/globals/GlobalStyles";
import Container from "./components/Layout/Container";
import Section from "./components/Layout/Section";
import Grid from "./components/Layout/Grid";
import Flex from "./components/Layout/Flex";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";

// Styled Components para la demo
const DemoBox = styled.div`
  padding: 1rem;
  background: ${(props) => (props.$dark ? "#1a1a1a" : "white")};
  border-radius: 0.5rem;
  height: 100%;
  min-height: ${(props) => props.$height || "100px"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$dark ? "white" : "black")};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const DemoSection = styled.div`
  margin-bottom: 4rem;

  h2 {
    color: ${(props) => (props.$dark ? "#fff" : "#1a1a1a")};
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid ${(props) => (props.$dark ? "#333" : "#eee")};
    padding-bottom: 0.5rem;
  }
`;

const ComponentWrapper = styled.div`
  padding: 2rem;
  background: ${(props) => (props.$dark ? "#1a1a1a" : "#f8fafc")};
  border-radius: 1rem;
  margin-bottom: 2rem;
  border: 1px solid ${(props) => (props.$dark ? "#333" : "#eee")};
`;

const AppWrapper = styled.div`
  background: ${(props) => (props.$dark ? "#121212" : "#fff")};
  min-height: 100vh;
  padding: 2rem 0;

  h1 {
    color: ${(props) => (props.$dark ? "#fff" : "#1a1a1a")};
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const SubTitle = styled.p`
  color: ${(props) => (props.$dark ? "#888" : "#666")};
  text-align: center;
  margin-bottom: 3rem;
`;

function App() {
  const [loading, setLoading] = useState({});
  const [isDark, setIsDark] = useState(true);

  const handleClick = (buttonId) => {
    setLoading((prev) => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setLoading((prev) => ({ ...prev, [buttonId]: false }));
    }, 1500);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapper $dark={isDark}>
        <Container>
          {/* Header */}
          <Flex
            justify="space-between"
            align="center"
            style={{ marginBottom: "3rem" }}
          >
            <div>
              <h1>UI Components Demo</h1>
              <SubTitle $dark={isDark}>
                Showcase de todos los componentes y sus variantes
              </SubTitle>
            </div>
            <Button
              variant={isDark ? "danger" : "primary"}
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
            </Button>
          </Flex>

          {/* Grid Layouts */}
          <DemoSection $dark={isDark}>
            <h2>📐 Grid Layouts</h2>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Grid Columnas Fijas
              </h3>
              <Grid columns={3} gap="lg">
                <DemoBox $dark={isDark}>Columna 1</DemoBox>
                <DemoBox $dark={isDark}>Columna 2</DemoBox>
                <DemoBox $dark={isDark}>Columna 3</DemoBox>
              </Grid>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Grid Responsive (auto-fit)
              </h3>
              <Grid autoFit minWidth="200px" gap="md">
                <DemoBox $dark={isDark}>Auto 1</DemoBox>
                <DemoBox $dark={isDark}>Auto 2</DemoBox>
                <DemoBox $dark={isDark}>Auto 3</DemoBox>
                <DemoBox $dark={isDark}>Auto 4</DemoBox>
              </Grid>
            </ComponentWrapper>
          </DemoSection>
          <DemoSection $dark={isDark}>
            <h2>📐 Grid Layouts Avanzados</h2>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Grid 2x2
              </h3>
              <Grid columns={2} gap="lg">
                <DemoBox $dark={isDark}>2x2 Grid Item 1</DemoBox>
                <DemoBox $dark={isDark}>2x2 Grid Item 2</DemoBox>
                <DemoBox $dark={isDark}>2x2 Grid Item 3</DemoBox>
                <DemoBox $dark={isDark}>2x2 Grid Item 4</DemoBox>
              </Grid>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Grid 4x4
              </h3>
              <Grid columns={4} gap="md">
                {Array(16)
                  .fill(null)
                  .map((_, i) => (
                    <DemoBox
                      $dark={isDark}
                      key={i}
                      style={{ minHeight: "60px" }}
                    >
                      {i + 1}
                    </DemoBox>
                  ))}
              </Grid>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Grid con Diferentes Gaps
              </h3>
              <Grid columns={3} gap="xs" style={{ marginBottom: "2rem" }}>
                <DemoBox $dark={isDark}>Gap XS</DemoBox>
                <DemoBox $dark={isDark}>Gap XS</DemoBox>
                <DemoBox $dark={isDark}>Gap XS</DemoBox>
              </Grid>
              <Grid columns={3} gap="xl">
                <DemoBox $dark={isDark}>Gap XL</DemoBox>
                <DemoBox $dark={isDark}>Gap XL</DemoBox>
                <DemoBox $dark={isDark}>Gap XL</DemoBox>
              </Grid>
            </ComponentWrapper>
          </DemoSection>

          {/* Flex Layouts */}
          <DemoSection $dark={isDark}>
            <h2>↔️ Flex Layouts</h2>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Flex Row
              </h3>
              <Flex justify="space-between" gap="md">
                <DemoBox $dark={isDark} style={{ flex: 1 }}>
                  Left
                </DemoBox>
                <DemoBox $dark={isDark} style={{ flex: 2 }}>
                  Center
                </DemoBox>
                <DemoBox $dark={isDark} style={{ flex: 1 }}>
                  Right
                </DemoBox>
              </Flex>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Flex Column
              </h3>
              <Flex direction="column" gap="md" style={{ height: "300px" }}>
                <DemoBox $dark={isDark}>Top</DemoBox>
                <DemoBox $dark={isDark}>Middle</DemoBox>
                <DemoBox $dark={isDark}>Bottom</DemoBox>
              </Flex>
            </ComponentWrapper>
          </DemoSection>
          <DemoSection $dark={isDark}>
            <h2>↔️ Flex Layouts Avanzados</h2>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Flex con Diferentes Justify
              </h3>
              <Flex direction="column" gap="md">
                <Flex justify="flex-start" gap="sm">
                  <DemoBox $dark={isDark} style={{ width: "100px" }}>
                    Start
                  </DemoBox>
                  <DemoBox $dark={isDark} style={{ width: "100px" }}>
                    Start
                  </DemoBox>
                </Flex>
                <Flex justify="center" gap="sm">
                  <DemoBox $dark={isDark} style={{ width: "100px" }}>
                    Center
                  </DemoBox>
                  <DemoBox $dark={isDark} style={{ width: "100px" }}>
                    Center
                  </DemoBox>
                </Flex>
                <Flex justify="flex-end" gap="sm">
                  <DemoBox $dark={isDark} style={{ width: "100px" }}>
                    End
                  </DemoBox>
                  <DemoBox $dark={isDark} style={{ width: "100px" }}>
                    End
                  </DemoBox>
                </Flex>
                <Flex justify="space-around" gap="sm">
                  <DemoBox $dark={isDark} style={{ width: "100px" }}>
                    Around
                  </DemoBox>
                  <DemoBox $dark={isDark} style={{ width: "100px" }}>
                    Around
                  </DemoBox>
                </Flex>
              </Flex>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Flex con Diferentes Align
              </h3>
              <Flex
                style={{
                  height: "200px",
                  background: isDark ? "#333" : "#f0f0f0",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                }}
              >
                <Flex direction="column" gap="md" style={{ flex: 1 }}>
                  <DemoBox $dark={isDark}>Start</DemoBox>
                  <DemoBox $dark={isDark}>Start</DemoBox>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  gap="md"
                  style={{ flex: 1 }}
                >
                  <DemoBox $dark={isDark}>Center</DemoBox>
                  <DemoBox $dark={isDark}>Center</DemoBox>
                </Flex>
                <Flex
                  direction="column"
                  align="flex-end"
                  gap="md"
                  style={{ flex: 1 }}
                >
                  <DemoBox $dark={isDark}>End</DemoBox>
                  <DemoBox $dark={isDark}>End</DemoBox>
                </Flex>
              </Flex>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Flex Wrap Responsivo
              </h3>
              <Flex wrap="wrap" gap="md" justify="center">
                {Array(8)
                  .fill(null)
                  .map((_, i) => (
                    <DemoBox
                      $dark={isDark}
                      key={i}
                      style={{
                        width: "150px",
                        minHeight: "80px",
                      }}
                    >
                      Flex Item {i + 1}
                    </DemoBox>
                  ))}
              </Flex>
            </ComponentWrapper>
          </DemoSection>

          {/* Buttons */}
          <DemoSection $dark={isDark}>
            <h2>🎮 Botones</h2>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Botones Cyberpunk
              </h3>
              <Flex gap="md" wrap="wrap">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleClick("cyber1")}
                  loading={loading["cyber1"]}
                >
                  SMALL CYBER
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleClick("cyber2")}
                  loading={loading["cyber2"]}
                >
                  MEDIUM CYBER
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handleClick("cyber3")}
                  loading={loading["cyber3"]}
                >
                  LARGE CYBER
                </Button>
              </Flex>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Botones Rainbow
              </h3>
              <Flex gap="md" wrap="wrap">
                <Button variant="rainbow" size="sm">
                  SMALL RAINBOW
                </Button>
                <Button variant="rainbow">MEDIUM RAINBOW</Button>
                <Button variant="rainbow" size="lg">
                  LARGE RAINBOW
                </Button>
              </Flex>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Botones Danger y Success
              </h3>
              <Flex gap="md" wrap="wrap">
                <Button variant="danger">DANGER</Button>
                <Button variant="danger" loading>
                  LOADING
                </Button>
                <Button variant="success">SUCCESS</Button>
                <Button variant="alien">ALIEN</Button>
              </Flex>
            </ComponentWrapper>
          </DemoSection>
          <DemoSection $dark={isDark}>
            <h2>🎮 Showcase de Botones</h2>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Botones con Iconos
              </h3>
              <Flex gap="md" wrap="wrap">
                <Button variant="primary">
                  <span>🚀</span> Launch
                </Button>
                <Button variant="secondary">
                  <span>💾</span> Save
                </Button>
                <Button variant="danger">
                  <span>🗑️</span> Delete
                </Button>
                <Button variant="success">
                  <span>✓</span> Confirm
                </Button>
              </Flex>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Estados de Loading
              </h3>
              <Flex gap="md" wrap="wrap">
                <Button variant="primary" loading>
                  Loading Primary
                </Button>
                <Button variant="rainbow" loading>
                  Loading Rainbow
                </Button>
                <Button variant="danger" loading>
                  Loading Danger
                </Button>
                <Button variant="neon" loading>
                  Loading Neon
                </Button>
              </Flex>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Estados Disabled
              </h3>
              <Flex gap="md" wrap="wrap">
                <Button variant="primary" disabled>
                  Disabled Primary
                </Button>
                <Button variant="rainbow" disabled>
                  Disabled Rainbow
                </Button>
                <Button variant="danger" disabled>
                  Disabled Danger
                </Button>
                <Button variant="success" disabled>
                  Disabled Success
                </Button>
              </Flex>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Combinaciones de Tamaños
              </h3>
              <Flex direction="column" gap="lg">
                <Flex gap="md" wrap="wrap" align="center">
                  <Button variant="primary" size="sm">
                    Small
                  </Button>
                  <Button variant="primary">Medium</Button>
                  <Button variant="primary" size="lg">
                    Large
                  </Button>
                </Flex>
                <Flex gap="md" wrap="wrap" align="center">
                  <Button variant="toxic" size="sm">
                    Small
                  </Button>
                  <Button variant="toxic">Medium</Button>
                  <Button variant="toxic" size="lg">
                    Large
                  </Button>
                </Flex>
                <Flex gap="md" wrap="wrap" align="center">
                  <Button variant="rainbow" size="sm">
                    Small
                  </Button>
                  <Button variant="rainbow">Medium</Button>
                  <Button variant="rainbow" size="lg">
                    Large
                  </Button>
                </Flex>
                <Flex gap="md" wrap="wrap" align="center">
                  <Button variant="neon" size="sm">
                    Small
                  </Button>
                  <Button variant="neon">Medium</Button>
                  <Button variant="neon" size="lg">
                    Large
                  </Button>
                </Flex>
              </Flex>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Grupos de Botones
              </h3>
              <Grid columns={2} gap="xl">
                <Flex gap="sm">
                  <Button variant="primary">Left</Button>
                  <Button variant="primary">Middle</Button>
                  <Button variant="primary">Right</Button>
                </Flex>
                <Flex gap="sm">
                  <Button variant="rainbow">One</Button>
                  <Button variant="rainbow" loading>
                    Two
                  </Button>
                  <Button variant="rainbow">Three</Button>
                </Flex>
              </Grid>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Botones en Cards
              </h3>
              <Grid columns={3} gap="lg">
                <DemoBox
                  $dark={isDark}
                  style={{ flexDirection: "column", gap: "1rem" }}
                >
                  <div>Card Title</div>
                  <Button variant="primary" size="sm">
                    Action
                  </Button>
                </DemoBox>
                <DemoBox
                  $dark={isDark}
                  style={{ flexDirection: "column", gap: "1rem" }}
                >
                  <div>Card Title</div>
                  <Button variant="rainbow" size="sm">
                    Action
                  </Button>
                </DemoBox>
                <DemoBox
                  $dark={isDark}
                  style={{ flexDirection: "column", gap: "1rem" }}
                >
                  <div>Card Title</div>
                  <Button variant="neon" size="sm">
                    Action
                  </Button>
                </DemoBox>
              </Grid>
            </ComponentWrapper>
          </DemoSection>
          <DemoSection $dark={isDark}>
  <h2>🎨 Todas las Variantes de Botones</h2>

  <ComponentWrapper $dark={isDark}>
    <h3 style={{ marginBottom: '1rem', color: isDark ? '#fff' : '#333' }}>Cyberpunk Style</h3>
    <Flex gap="md" wrap="wrap">
      <Button variant="primary" size="sm">SMALL CYBER</Button>
      <Button variant="primary">MEDIUM CYBER</Button>
      <Button variant="primary" size="lg">LARGE CYBER</Button>
      <Button variant="primary" loading>LOADING CYBER</Button>
      <Button variant="primary" disabled>DISABLED CYBER</Button>
    </Flex>
  </ComponentWrapper>

  <ComponentWrapper $dark={isDark}>
    <h3 style={{ marginBottom: '1rem', color: isDark ? '#fff' : '#333' }}>Rainbow Style</h3>
    <Flex gap="md" wrap="wrap">
      <Button variant="rainbow" size="sm">SMALL RAINBOW</Button>
      <Button variant="rainbow">MEDIUM RAINBOW</Button>
      <Button variant="rainbow" size="lg">LARGE RAINBOW</Button>
      <Button variant="rainbow" loading>LOADING RAINBOW</Button>
      <Button variant="rainbow" disabled>DISABLED RAINBOW</Button>
    </Flex>
  </ComponentWrapper>

  <ComponentWrapper $dark={isDark}>
    <h3 style={{ marginBottom: '1rem', color: isDark ? '#fff' : '#333' }}>Lava Style</h3>
    <Flex gap="md" wrap="wrap">
      <Button variant="danger" size="sm">SMALL LAVA</Button>
      <Button variant="danger">MEDIUM LAVA</Button>
      <Button variant="danger" size="lg">LARGE LAVA</Button>
      <Button variant="danger" loading>LOADING LAVA</Button>
      <Button variant="danger" disabled>DISABLED LAVA</Button>
    </Flex>
  </ComponentWrapper>

  <ComponentWrapper $dark={isDark}>
    <h3 style={{ marginBottom: '1rem', color: isDark ? '#fff' : '#333' }}>Alien Style</h3>
    <Flex gap="md" wrap="wrap">
      <Button variant="alien" size="sm">SMALL ALIEN</Button>
      <Button variant="alien">MEDIUM ALIEN</Button>
      <Button variant="alien" size="lg">LARGE ALIEN</Button>
      <Button variant="alien" loading>LOADING ALIEN</Button>
      <Button variant="alien" disabled>DISABLED ALIEN</Button>
    </Flex>
  </ComponentWrapper>

  <ComponentWrapper $dark={isDark}>
    <h3 style={{ marginBottom: '1rem', color: isDark ? '#fff' : '#333' }}>Neon Style</h3>
    <Flex gap="md" wrap="wrap">
      <Button variant="neon" size="sm">SMALL NEON</Button>
      <Button variant="neon">MEDIUM NEON</Button>
      <Button variant="neon" size="lg">LARGE NEON</Button>
      <Button variant="neon" loading>LOADING NEON</Button>
      <Button variant="neon" disabled>DISABLED NEON</Button>
    </Flex>
  </ComponentWrapper>
</DemoSection>


          {/* Inputs */}
          <DemoSection $dark={isDark}>
            <h2>⌨️ Inputs</h2>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Inputs Especiales
              </h3>
              <Grid columns={2} gap="lg">
                <Input
                  variant="cyber"
                  label="CYBER INPUT"
                  placeholder="Escribe algo..."
                  floating
                />
                <Input
                  variant="rainbow"
                  label="RAINBOW INPUT"
                  placeholder="Colorful..."
                  floating
                />
                <Input
                  variant="neon"
                  label="NEON"
                  placeholder="Matrix style..."
                  floating
                />
                <Input
                  variant="gradient"
                  label="GRADIENT"
                  placeholder="Smooth gradient..."
                  floating
                />
              </Grid>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Estados
              </h3>
              <Grid columns={3} gap="lg">
                <Input
                  variant="success"
                  label="Success"
                  value="Datos válidos ✓"
                  floating
                />
                <Input
                  variant="error"
                  label="Error"
                  value="Datos inválidos ✗"
                  floating
                />
                <Input label="Disabled" placeholder="No disponible" disabled />
              </Grid>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Text Areas
              </h3>
              <Grid columns={2} gap="lg">
                <Input
                  variant="cyber"
                  label="CYBER TEXTAREA"
                  placeholder="Multi-line cyber text..."
                  multiline
                  floating
                />
                <Input
                  variant="rainbow"
                  label="RAINBOW TEXTAREA"
                  placeholder="Multi-line rainbow text..."
                  multiline
                  floating
                />
              </Grid>
            </ComponentWrapper>
          </DemoSection>
          <DemoSection $dark={isDark}>
            <h2>⌨️ Showcase de Inputs</h2>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Formulario de Login
              </h3>
              <Grid
                columns={1}
                gap="md"
                style={{ maxWidth: "400px", margin: "0 auto" }}
              >
                <Input
                  variant="cyber"
                  label="USERNAME"
                  placeholder="Enter your username..."
                  floating
                />
                <Input
                  variant="cyber"
                  type="password"
                  label="PASSWORD"
                  placeholder="Enter your password..."
                  floating
                />
                <Button variant="primary" style={{ width: "100%" }}>
                  LOGIN
                </Button>
              </Grid>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Formulario de Búsqueda
              </h3>
              <Flex gap="md">
                <Input
                  variant="rainbow"
                  placeholder="Search anything..."
                  startIcon={<span>🔍</span>}
                />
                <Button variant="rainbow">Search</Button>
              </Flex>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Inputs con Validación
              </h3>
              <Grid columns={2} gap="lg">
                <Input
                  variant="success"
                  label="Email válido"
                  value="user@example.com"
                  floating
                />
                <Input
                  variant="error"
                  label="Email inválido"
                  value="invalid.email"
                  floating
                />
                <Input
                  variant="success"
                  label="Contraseña válida"
                  type="password"
                  value="********"
                  floating
                />
                <Input
                  variant="error"
                  label="Contraseña corta"
                  type="password"
                  value="****"
                  floating
                />
              </Grid>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Text Areas con Diferentes Estilos
              </h3>
              <Grid columns={2} gap="lg">
                <Input
                  variant="neon"
                  label="NEON TEXTAREA"
                  placeholder="Write something glowing..."
                  multiline
                  floating
                />
                <Input
                  variant="gradient"
                  label="GRADIENT TEXTAREA"
                  placeholder="Write with style..."
                  multiline
                  floating
                />
              </Grid>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Formulario de Contacto
              </h3>
              <Grid columns={1} gap="md">
                <Grid columns={2} gap="md">
                  <Input
                    variant="cyber"
                    label="NOMBRE"
                    placeholder="Tu nombre..."
                    floating
                  />
                  <Input
                    variant="cyber"
                    label="EMAIL"
                    placeholder="Tu email..."
                    floating
                  />
                </Grid>
                <Input
                  variant="cyber"
                  label="ASUNTO"
                  placeholder="Asunto del mensaje..."
                  floating
                />
                <Input
                  variant="cyber"
                  label="MENSAJE"
                  placeholder="Tu mensaje..."
                  multiline
                  floating
                />
                <Flex gap="md" justify="flex-end">
                  <Button variant="secondary">Cancel</Button>
                  <Button variant="primary">Send Message</Button>
                </Flex>
              </Grid>
            </ComponentWrapper>
          </DemoSection>
          <DemoSection $dark={isDark}>
  <h2>⌨️ Todas las Variantes de Inputs</h2>

  <ComponentWrapper $dark={isDark}>
    <h3 style={{ marginBottom: '1rem', color: isDark ? '#fff' : '#333' }}>Cyberpunk Inputs</h3>
    <Grid columns={2} gap="lg">
      <Input
        variant="cyber"
        label="CYBER INPUT"
        placeholder="Type something..."
        floating
      />
      <Input
        variant="cyber"
        label="CYBER PASSWORD"
        type="password"
        placeholder="Enter password..."
        floating
      />
      <Input
        variant="cyber"
        label="CYBER TEXTAREA"
        placeholder="Multi-line text..."
        multiline
        floating
      />
      <Input
        variant="cyber"
        label="CYBER DISABLED"
        placeholder="Not available"
        disabled
        floating
      />
    </Grid>
  </ComponentWrapper>

  <ComponentWrapper $dark={isDark}>
    <h3 style={{ marginBottom: '1rem', color: isDark ? '#fff' : '#333' }}>Rainbow Inputs</h3>
    <Grid columns={2} gap="lg">
      <Input
        variant="rainbow"
        label="RAINBOW INPUT"
        placeholder="Colorful text..."
        floating
      />
      <Input
        variant="rainbow"
        label="RAINBOW AREA"
        placeholder="Multi-color text..."
        multiline
        floating
      />
    </Grid>
  </ComponentWrapper>

  <ComponentWrapper $dark={isDark}>
    <h3 style={{ marginBottom: '1rem', color: isDark ? '#fff' : '#333' }}>Neon Inputs</h3>
    <Grid columns={2} gap="lg">
      <Input
        variant="neon"
        label="NEON INPUT"
        placeholder="Glowing text..."
        floating
      />
      <Input
        variant="neon"
        label="NEON AREA"
        placeholder="More glow..."
        multiline
        floating
      />
    </Grid>
  </ComponentWrapper>

  <ComponentWrapper $dark={isDark}>
    <h3 style={{ marginBottom: '1rem', color: isDark ? '#fff' : '#333' }}>Gradient Inputs</h3>
    <Grid columns={2} gap="lg">
      <Input
        variant="gradient"
        label="GRADIENT INPUT"
        placeholder="Smooth text..."
        floating
      />
      <Input
        variant="gradient"
        label="GRADIENT AREA"
        placeholder="Flowing text..."
        multiline
        floating
      />
    </Grid>
  </ComponentWrapper>

  <ComponentWrapper $dark={isDark}>
    <h3 style={{ marginBottom: '1rem', color: isDark ? '#fff' : '#333' }}>Estado de Validación</h3>
    <Grid columns={2} gap="lg">
      <Input
        variant="success"
        label="SUCCESS INPUT"
        value="Valid input ✓"
        floating
      />
      <Input
        variant="error"
        label="ERROR INPUT"
        value="Invalid input ✗"
        floating
      />
      <Input
        variant="success"
        label="SUCCESS AREA"
        value="Valid text area content ✓"
        multiline
        floating
      />
      <Input
        variant="error"
        label="ERROR AREA"
        value="Invalid text area content ✗"
        multiline
        floating
      />
    </Grid>
  </ComponentWrapper>
</DemoSection>

          {/* Secciones */}
          <DemoSection $dark={isDark}>
            <h2>🎯 Secciones</h2>

            <Section variant="primary" spacing="lg">
              <Container>
                <DemoBox $dark={!isDark}>
                  Primary Section (Large Spacing)
                </DemoBox>
              </Container>
            </Section>

            <Section variant="secondary" spacing="md">
              <Container>
                <DemoBox $dark={!isDark}>
                  Secondary Section (Medium Spacing)
                </DemoBox>
              </Container>
            </Section>

            <Section spacing="sm">
              <Container>
                <Grid columns={3} gap="md">
                  <DemoBox $dark={isDark}>Grid</DemoBox>
                  <DemoBox $dark={isDark}>Inside</DemoBox>
                  <DemoBox $dark={isDark}>Section</DemoBox>
                </Grid>
              </Container>
            </Section>
          </DemoSection>
          <DemoSection $dark={isDark}>
            <h2>🎯 Secciones Avanzadas</h2>

            <Section variant="primary" spacing="xs">
              <Container>
                <DemoBox $dark={!isDark}>Primary Section (XS Spacing)</DemoBox>
              </Container>
            </Section>

            <Section variant="secondary" spacing="xl">
              <Container>
                <Grid columns={2} gap="lg">
                  <DemoBox $dark={!isDark}>Grid en Secondary</DemoBox>
                  <DemoBox $dark={!isDark}>Grid en Secondary</DemoBox>
                </Grid>
              </Container>
            </Section>

            <Section spacing="md">
              <Container>
                <Flex justify="space-between" align="center" gap="md">
                  <DemoBox $dark={isDark} style={{ flex: 1 }}>
                    Flex
                  </DemoBox>
                  <DemoBox $dark={isDark} style={{ flex: 2 }}>
                    en
                  </DemoBox>
                  <DemoBox $dark={isDark} style={{ flex: 1 }}>
                    Section
                  </DemoBox>
                </Flex>
              </Container>
            </Section>
          </DemoSection>
          <DemoSection $dark={isDark}>
            <h2>🎨 Showcase de Layouts Complejos</h2>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Dashboard Header
              </h3>
              <Flex justify="space-between" align="center" gap="lg">
                <Input
                  variant="search"
                  placeholder="Search dashboard..."
                  startIcon={<span>🔍</span>}
                  style={{ maxWidth: "300px" }}
                />
                <Flex gap="md">
                  <Button variant="secondary" size="sm">
                    <span>⚙️</span> Settings
                  </Button>
                  <Button variant="primary" size="sm">
                    <span>👤</span> Profile
                  </Button>
                </Flex>
              </Flex>
            </ComponentWrapper>

            <ComponentWrapper $dark={isDark}>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                Card Grid con Acciones
              </h3>
              <Grid columns={3} gap="lg">
                {Array(3)
                  .fill(null)
                  .map((_, i) => (
                    <DemoBox
                      key={i}
                      $dark={isDark}
                      style={{
                        flexDirection: "column",
                        gap: "1rem",
                        padding: "1.5rem",
                      }}
                    >
                      <h4 style={{ color: isDark ? "#fff" : "#333" }}>
                        Card Title {i + 1}
                      </h4>
                      <p
                        style={{
                          color: isDark ? "#aaa" : "#666",
                          fontSize: "0.9rem",
                        }}
                      >
                        Some description text for this card...
                      </p>
                      <Flex gap="md" style={{ marginTop: "auto" }}>
                        <Button variant="secondary" size="sm">
                          Cancel
                        </Button>
                        <Button variant="primary" size="sm">
                          Action
                        </Button>
                      </Flex>
                    </DemoBox>
                  ))}
              </Grid>
            </ComponentWrapper>
          </DemoSection>
        </Container>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
