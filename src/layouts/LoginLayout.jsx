import React from 'react';
import NavigrationBar from '../pages/Shared/NavigrationBar/NavigrationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigrationBar></NavigrationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;