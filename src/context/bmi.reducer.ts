import { v4 as uuidv4 } from 'uuid';
import { IBmi } from '../interfaces/bmi.interface';
import { IAction } from '../interfaces/action.interfce';
import BmiActionTypes from './actions/action.types';
import { IBmiForm } from '../interfaces/bmi-form.interface';

export interface IState {
    data: IBmi[];
}

const calculateBmi = (weight: number, height: number): number => {
    return Math.round((weight * 10000) / (height * height));
};

export const reducer = (state: IState, { type, payload }: IAction): IState => {
    switch (type) {
        case BmiActionTypes.AddBmi: {
            const id = uuidv4();
            const { height, weight, date } = payload as IBmiForm;
            const bmi = calculateBmi(weight, height);
            return {
                ...state,
                data: [...state.data, { id, height, weight, bmi, date: date.toISOString() }],
            };
        }

        default:
            return state;
    }
};
