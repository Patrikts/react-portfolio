import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalProvider } from './context/moda-context';
import './index.css'


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<ModalProvider><App/></ModalProvider>);