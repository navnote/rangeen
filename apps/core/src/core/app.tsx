import { CoreRoutes } from './core-routes';
import { ThemeProvider } from './theme/theme-provider';

export function App() {
  return (
    <ThemeProvider>
      <CoreRoutes />
    </ThemeProvider>
  );
}

export default App;
