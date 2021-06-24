import React, { FunctionComponent, useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { BmiContext } from '../../context/BmiContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormattedDate: FunctionComponent<any> = (props: any) => {
    const { x, y, payload } = props;

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
                {format(new Date(payload.value), 'dd MMM')}
            </text>
        </g>
    );
};

export default function BmiChart(): JSX.Element {
    const {
        store: { data },
    } = useContext(BmiContext);

    return data && data.length >= 1 ? (
        <ResponsiveContainer width="100%" height={250} debounce={300}>
            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="date" tick={<FormattedDate />} />
                <YAxis dataKey="bmi" />
                <Tooltip />
                <Line type="monotone" dataKey="bmi" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    ) : (
        <div className="flex flex-col capitalize justify-center align-center text-center text-4xl text-gray-300 w-100 h-60">
            Not enough data
        </div>
    );
}
