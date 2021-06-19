import React, { FormEvent, FormEventHandler } from 'react';

export default function BmiForm(): JSX.Element {
    const handleSubmit: FormEventHandler = (e: FormEvent): void => {
        e.preventDefault();
    };
    return (
        <form className="m-2 w-64" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold" htmlFor="weight">
                    Weight (in kg)
                    <input
                        className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="weight"
                        type="number"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold" htmlFor="height">
                    Height (in cm)
                    <input
                        className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="height"
                        type="number"
                    />
                </label>
            </div>
            <button
                type="submit"
                className="px-4 py-1 text-base text-white bg-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                title="Add New Note"
            >
                Calculate
            </button>
        </form>
    );
}
