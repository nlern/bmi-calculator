import { IBmiForm } from '../../interfaces/bmi-form.interface';
import { IAction } from '../../interfaces/action.interfce';
import BmiActionTypes from './action.types';

class AddBmiAction implements IAction {
    type = BmiActionTypes.AddBmi;

    constructor(public payload: IBmiForm) {}
}

export default AddBmiAction;
