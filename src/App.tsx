import React from 'react';

import Header from './components/Header';
import BmiForm from './components/BmiForm';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <BmiForm />
        </div>
    );
};

export default App;
