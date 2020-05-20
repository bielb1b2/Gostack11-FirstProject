import React from 'react';

import GlobalStyle from './styles/global';
import SignUp from './pages/SignUp';
// import SignIn from './pages/signIn';

const App: React.FC = () => (
    <>
        <SignUp />
        <GlobalStyle />
    </>
);

export default App;
