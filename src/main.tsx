import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';

flushSync(() => {
  createRoot(document.getElementById('root')!).render(<App />);
});
