import { Container } from 'react-bootstrap';
import './App.css';
import Signup from './Components/Signup/Signup';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';

function App() {
    return (
        <Container
            className="d-flex align-item-center justify-content-center pt-5"
            style={{ minHeight: '100vh' }}
        >
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <BrowserRouter>
                    <AuthProvider>
                        <Routes>
                            <Route exact path="/" element={<Dashboard />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </AuthProvider>
                </BrowserRouter>
            </div>
        </Container>
    );
}

export default App;
