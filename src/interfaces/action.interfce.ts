import BmiActionTypes from '../context/actions/action.types';

export interface IAction {
    type: BmiActionTypes;
    payload?: unknown;
}
