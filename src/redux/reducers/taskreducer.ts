import {
    FETCH_TASKS,
    FETCH_TASKS_FAILED,
    FETCH_TASKS_SUCCESS,
} from '../store/types';

const INITIAL_STATE = {
    tasks: [],
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
        case FETCH_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.payload,
                loading: false,
            };
        case FETCH_TASKS_FAILED:
            return {
                ...state,
                loading: false,
                tasks: [],
                error: {
                    msg: action.payload,
                    flag: true,
                },
            };
        default:
            return state
    };
};