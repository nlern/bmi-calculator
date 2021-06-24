import { compareAsc } from 'date-fns';
import { IBmi } from '../interfaces/bmi.interface';
import { IAction } from '../interfaces/action.interfce';
import BmiActionTypes from './actions/action.types';
import { IBmiForm } from '../interfaces/bmi-form.interface';
import calculateBmi from '../utils/calculate-bmi.util';

export interface IState {
    data: IBmi[];
    datesMap: Map<string, number>;
}

export const reducer = (state: IState, { type, payload }: IAction): IState => {
    switch (type) {
        case BmiActionTypes.AddBmi: {
            const { height, weight, date } = payload as IBmiForm;
            const bmi = calculateBmi(weight, height);
            const dateStr = date.toISOString();
            const bmiObj = { height, weight, bmi, date: dateStr };
            // check if exists
            const dateExists = state.datesMap.has(dateStr);
            if (!dateExists) {
                // add case
                /**
                 * 1. Current data is already sorted.
                 * 2. Find first date which is just
                 * after new date to be inserted.
                 * 3. Insert new data in the position.
                 * 4. If position not found, append to bottom.
                 */
                const indx = state.data.findIndex(
                    ({ date: dateL }) => compareAsc(Date.parse(dateL), Date.parse(dateStr)) >= 0,
                );
                if (indx === -1) {
                    state.datesMap.set(dateStr, state.data.length);
                    return {
                        ...state,
                        data: [...state.data, bmiObj],
                    };
                }
                state.datesMap.set(dateStr, indx);
                const newData = [...state.data.slice(0, indx), bmiObj, ...state.data.slice(indx)];

                return {
                    ...state,
                    data: newData,
                };
            }
            // update case
            // get index
            const indx = state.datesMap.get(dateStr) as number;
            const newData = [...state.data.slice(0, indx), bmiObj, ...state.data.slice(indx + 1)];

            return {
                ...state,
                data: newData,
            };
        }

        default:
            return state;
    }
};
