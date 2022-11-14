import { createContext, useState } from 'react';

const AuthenticationContext = createContext();

function AuthenticationProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({ isLogin: false });

    // TODO: add functions about authenticate: setCurrentUserType, setLogin, setLogout, ...
    
    return (
        <AuthenticationContext.Provider value={[currentUser, setCurrentUser]}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export { AuthenticationContext };
export default AuthenticationProvider;
