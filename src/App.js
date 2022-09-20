import logo from './logo.svg';
import './App.css';
import { AppProviders } from '../src/providers/app-providers.tsx';
import { MuiMode } from './components/mui/mui-mode.tsx';

function App() {
  return (
    <AppProviders>
      <div className='App'>
        <MuiMode/>
      </div>
    </AppProviders>
  );
}

export default App;
