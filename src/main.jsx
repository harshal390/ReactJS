import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import ClassApp from './ClassApp.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('function')).render(<App />);
ReactDOM.createRoot(document.getElementById('class')).render(<ClassApp />);
