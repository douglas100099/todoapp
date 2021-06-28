import {
    FETCH_TASKS
} from '../store/types';

const INITIAL_STATE = {
    tasks: null,
    loading: false,
    error: {
        msg: null,
        flag: null,
    },
}

export const taskreducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case FETCH_TASKS:
            return {
                ...state,
                loading: true,
            };
        default:
            return state
    };
};