import React, { createContext, FC, useReducer } from 'react';
import { IAction } from '../interfaces/action.interfce';
import { IState, reducer } from './bmi.reducer';

const initialState: IState = {
    data: [],
    datesMap: new Map<string, number>(),
};

export const BmiContext = createContext<{ store: IState; dispatch: (action: IAction) => void }>({
    store: initialState,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch: (_action): void => {},
});

export const BmiProvider: FC = ({ children }): JSX.Element => {
    const [store, dispatch] = useReducer(reducer, initialState);
    return <BmiContext.Provider value={{ store, dispatch }}>{children}</BmiContext.Provider>;
};
