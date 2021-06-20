import { IAction } from './actions/action.interfce';
import BmiActionTypes from './actions/action.types';

export interface IState {
    data: any[];
}

const calculateBmi = (weight: number, height: number): number => {
    return Math.round((weight * 10000) / (height * height));
};

export const reducer = (state: IState, { type, payload }: IAction): IState => {
    switch (type) {
        case BmiActionTypes.AddBmi: {
            const { height, weight, date } = payload;
            const bmi = calculateBmi(weight, height);
            return { ...state, data: [...state.data, { bmi, date: date.toISOString() }] };
        }

        default:
            return state;
    }
};
