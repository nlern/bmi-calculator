import React from 'react';

import Header from './components/Header/Header';
import BmiForm from './components/BmiForm/BmiForm';
import BmiChart from './components/BmiChart/BmiChart';
import { BmiProvider } from './context/BmiContext';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <BmiProvider>
                <main className="flex flex-row flex-wrap">
                    <div className="flex-1">
                        <BmiChart />
                    </div>
                    <BmiForm />
                </main>
            </BmiProvider>
        </div>
    );
};

export default App;
