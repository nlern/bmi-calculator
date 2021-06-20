import BmiActionTypes from './action.types';

export interface IAction {
    type: BmiActionTypes;
    payload?: any;
}
