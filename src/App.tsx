import React from 'react';

import Header from './components/Header/Header';
import BmiForm from './components/BmiForm/BmiForm';
import BmiChart from './components/BmiChart/BmiChart';
import { BmiProvider } from './context/BmiContext';
import BmiStatusCard from './components/BmiStatusCard/BmiStatusCard';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <BmiProvider>
                <main>
                    <section className="flex flex-row">
                        <div className="shadow m-4 p-4">
                            <BmiStatusCard />
                        </div>
                        <div className="flex-1 shadow m-4 p-4">
                            <BmiChart />
                        </div>
                        <div className="shadow m-4 p-4">
                            <BmiForm />
                        </div>
                    </section>
                </main>
            </BmiProvider>
        </div>
    );
};

export default App;
