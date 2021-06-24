import React, { useContext, useEffect, useState } from 'react';
import { BmiContext } from '../../context/BmiContext';

export default function BmiStatusCard(): JSX.Element {
    const {
        store: { data },
    } = useContext(BmiContext);

    const [currentBmi, setCurrentBmi] = useState(0);
    const [status, setStatus] = useState('healthy');

    useEffect(() => {
        const newCurrent = data.length > 0 ? data[data.length - 1].bmi : 0;
        setCurrentBmi(newCurrent);
    }, [data]);

    useEffect(() => {
        if (currentBmi > 0) {
            let stat = 'healthy';
            if (currentBmi < 18.5) {
                stat = 'under weight';
            } else if (currentBmi > 25 && currentBmi <= 29.9) {
                stat = 'over weight';
            } else if (currentBmi > 30) {
                stat = 'obese';
            }
            setStatus(stat);
        }
    }, [currentBmi]);

    return (
        <div className="w-52 h-full bg-white flex flex-col justify-center align-center">
            <div className="text-center text-base font-semibold uppercase">Your Health</div>
            <div className="flex flex-col align-center justify-center text-center font-semibold h-full flex-1 text-9xl">
                {currentBmi > 0 ? (
                    <div
                        className={`text-${
                            // eslint-disable-next-line no-nested-ternary
                            status === 'healthy' ? 'green' : status === 'obese' ? 'red' : 'yellow'
                        }-500`}
                    >
                        {currentBmi}
                        <div className="text-center uppercase text-base p-2">{status}</div>
                    </div>
                ) : (
                    <div className="text-2xl capitalize text-gray-300">Not enough data</div>
                )}
            </div>
        </div>
    );
}
