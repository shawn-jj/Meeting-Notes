import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { loadUserData } from './UserOperation';

const ProtectedRoute = ( {children} ) => {

    const user = loadUserData();
    const [isUserLoggedIn, setUserLoggedIn] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (user == null) {
            setUserLoggedIn(false);
            navigate("/login");
        }
        else {
            setUserLoggedIn(true);
        }
    }, []);

    return isUserLoggedIn ? children : ""
}

export default ProtectedRoute;