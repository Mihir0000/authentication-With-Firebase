import React, { useState } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
    const { logout, currentUser } = useAuth();
    const [error, setError] = useState('');
    async function LogoutHandle() {
        try {
            setError('');
            await logout();
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            <Card>
                <Card.Body className="d-flex flex-column">
                    <h3 className="text-center mb-4">Dashboard</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Card.Text className="d-flex justify-content-center ">
                        {currentUser && (
                            <div className="d-flex flex-column">
                                {currentUser.email}
                                <Button onClick={LogoutHandle}>Logout</Button>
                            </div>
                        )}
                    </Card.Text>
                    {!currentUser && (
                        <div d-flex>
                            <div className="w-100 text-center mt-2">
                                Need an account?{' '}
                                <Link to="/signup">Sign Up</Link>
                            </div>
                            <div className="w-100 text-center mt-2">
                                Already have an account?
                                <Link to="/login">Log In</Link>
                            </div>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </>
    );
};

export default Dashboard;
