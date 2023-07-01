import './TodoApp.css'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import AuthProvider, { useAuth } from './Security/AuthContext';
import TodoComponent from './TodoComponent';

export default function TodoApp() {

    function AuthenticatedRoute({children}) {
        const authContext = useAuth()
        
        if(authContext.isAuthenticated)
            return children
        
        return <Navigate to="/login"/>
    }
    return (
        <div className="TodoApp">            
            <BrowserRouter>
                <AuthProvider>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={ <LoginComponent /> } />
                    <Route path='/login' element={ <LoginComponent /> } />
                    
                    <Route path='/welcome/:username' element={<AuthenticatedRoute><WelcomeComponent /></AuthenticatedRoute> } />
                    <Route path='/todos' element={ <AuthenticatedRoute><ListTodosComponent /> </AuthenticatedRoute>} />
                    <Route path='/todos/:id' element={ <AuthenticatedRoute><TodoComponent /> </AuthenticatedRoute>} />

                    <Route path='*' element={<ErrorComponent /> } />
                    <Route path='/logout' element={<AuthenticatedRoute><LogoutComponent /> </AuthenticatedRoute> } />
                </Routes>
                <FooterComponent/>
                </AuthProvider>
            </BrowserRouter>            
            
        </div>
    )
}