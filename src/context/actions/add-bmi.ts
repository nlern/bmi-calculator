import { IAction } from './action.interfce';
import BmiActionTypes from './action.types';

class AddBmiAction implements IAction {
    type = BmiActionTypes.AddBmi;

    constructor(public payload: any) {}
}

export default AddBmiAction;
