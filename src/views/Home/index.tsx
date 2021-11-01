import React from 'react';

import Characters from '../../components/Characters.tsx';
import Header from '../../components/Header';


const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Characters />
        </>
    );
}

export default Home;