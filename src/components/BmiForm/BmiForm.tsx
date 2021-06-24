import React, {
    ChangeEvent,
    ChangeEventHandler,
    FormEvent,
    FormEventHandler,
    useContext,
    useEffect,
    useState,
} from 'react';
import AddBmiAction from '../../context/actions/add-bmi';
import { BmiContext } from '../../context/BmiContext';

import { DatePicker } from '../Datepicker/Datepicker';

export default function BmiForm(): JSX.Element {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [date, setDate] = useState(new Date());
    const [formValid, setFormValid] = useState(false);

    const { dispatch } = useContext(BmiContext);

    const isValid = (value: string): boolean => !value || Number.isNaN(value) || +value >= 0;

    const isDateValid = (dateToCheck: Date) => dateToCheck <= new Date();

    useEffect(() => {
        setFormValid(isValid(weight) && isValid(height) && isDateValid(date));
    }, [weight, height, date]);

    const updateWeight: ChangeEventHandler<HTMLInputElement> = (
        e: ChangeEvent<HTMLInputElement>,
    ) => {
        setWeight(e.target.value);
    };

    const updateHeight: ChangeEventHandler<HTMLInputElement> = (
        e: ChangeEvent<HTMLInputElement>,
    ) => {
        setHeight(e.target.value);
    };

    const handleSubmit: FormEventHandler = (e: FormEvent): void => {
        e.preventDefault();
        if (!formValid) {
            return;
        }
        const bmiData = {
            weight: +weight,
            height: +height,
            date,
        };
        dispatch(new AddBmiAction(bmiData));
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
                        placeholder="Enter weight"
                        min="0"
                        max="200"
                        value={weight}
                        onChange={updateWeight}
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
                        placeholder="Enter height"
                        min="1"
                        max="250"
                        value={height}
                        onChange={updateHeight}
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
