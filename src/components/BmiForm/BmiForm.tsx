import React, { FormEvent, FormEventHandler, useState } from 'react';

import { DatePicker } from '../Datepicker/Datepicker';

export default function BmiForm(): JSX.Element {
    const [date, setDate] = useState(new Date());
    const handleSubmit: FormEventHandler = (e: FormEvent): void => {
        e.preventDefault();
    };
    return (
        <form className="m-2" onSubmit={handleSubmit}>
            <div className="mb-2">
                <label className="flex flex-col text-gray-700 text-sm font-bold" htmlFor="weight">
                    Weight (in kg)
                    <input
                        className="shadow appearance-none border rounded mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="weight"
                        type="number"
                    />
                </label>
            </div>
            <div className="mb-2">
                <label className="flex flex-col text-gray-700 text-sm font-bold" htmlFor="height">
                    Height (in cm)
                    <input
                        className="shadow appearance-none border rounded mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="height"
                        type="number"
                    />
                </label>
            </div>
            <div className="mb-2">
                <DatePicker label="Date" id="date" date={date} onChange={setDate} />
            </div>
            <button
                type="submit"
                className="w-full px-4 py-1 text-base text-white bg-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                title="Add New Note"
            >
                Calculate
            </button>
        </form>
    );
}
