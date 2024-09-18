import { GlobalStyle } from "./styles/GlobalStyle";
import { AuthProvider } from "./context/useAuth";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/Themes";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useContext } from "react";

const AppContent: React.FC = () => {
  const { isDarkTheme } = useTheme(); // Acessa o contexto de tema

  return (
    <StyledThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AuthProvider>
        <Router>
          <GlobalStyle />
          <AppRouter />
        </Router>
      </AuthProvider>
    </StyledThemeProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent /> {/* Componente que usa o contexto e aplica o tema */}
    </ThemeProvider>
  );
}

export default App;