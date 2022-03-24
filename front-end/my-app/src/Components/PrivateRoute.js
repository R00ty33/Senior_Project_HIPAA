import React, { useEffect, useState} from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom'
import authProvider from './AuthProvider';

const PrivateRoute = ({children }) => {
    return authProvider.useAuth() ? children : <Navigate to="/login" />;
};

export default PrivateRoute