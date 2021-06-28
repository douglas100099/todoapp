import {
    FETCH_TASKS,
    FETCH_TASKS_FAILED,
    FETCH_TASKS_SUCCESS,
    ADD_TASKS_FAILED,
    ADD_TASKS,
    ADD_TASKS_SUCCESS,
    UPDATE_TASKS,
    UPDATE_TASKS_SUCCESS,
    UPDATE_TASKS_FAILED,
    REMOVE_TASKS,
    REMOVE_TASKS_SUCCESS,
    REMOVE_TASKS_FAILED,
} from '../store/types';

const INITIAL_STATE = {
    tasks: [],
    loading: false,
    loadingAddTask: false,
    loadingUpdateTask: false,
    loadingRemoveTask: false,
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
        case ADD_TASKS:
            return {
                ...state,
                loadingAddTask: true,
            };
        case ADD_TASKS_SUCCESS:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload,
                ],
            };
        case ADD_TASKS_FAILED:
            return {
                ...state,
                loadingAddTask: false,
                error: {
                    msg: action.payload,
                    flag: true,
                },
            };
        case UPDATE_TASKS:
            return {
                ...state,
                loadingUpdateTask: true,
            };
        case UPDATE_TASKS_SUCCESS:
            return {
                ...state,
                loadingUpdateTask: false,
            };
        case UPDATE_TASKS_FAILED:
            return {
                ...state,
                loadingUpdateTask: false,
                error: {
                    msg: action.payload,
                    flag: true,
                },
            };
        case REMOVE_TASKS:
            return {
                ...state,
                loadingRemoveTask: true,
            };
        case REMOVE_TASKS_SUCCESS:
            return {
                ...state,
                loadingRemoveTask: false,
            };
        case REMOVE_TASKS_FAILED:
            return {
                ...state,
                loadingRemoveTask: false,
                error: {
                    msg: action.payload,
                    flag: true,
                },
            };
        default:
            return state
    };
};