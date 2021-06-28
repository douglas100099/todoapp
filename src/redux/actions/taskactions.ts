import React, { Dispatch } from 'react';
import { api } from '../../services/api';
import { store } from '../store/store';
import {
    FETCH_TASKS,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILED,
    ADD_TASKS_FAILED,
    ADD_TASKS_SUCCESS,
    DELETE_TASKS_SUCCESS
} from '../store/types';


export const fetchTasks = (dispatch: Dispatch<any>) => {
    dispatch({
        type: FETCH_TASKS,
        payload: null,
    });
    try {
        return async (dispatch: Dispatch<any>) => {
            const resp = await api.get('tasks');
            if (resp.data) {
                dispatch({
                    type: FETCH_TASKS_SUCCESS,
                    payload: resp.data,
                });
            } else {
                throw new Error('Ops, tivemos um problema.');
            };
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: FETCH_TASKS_FAILED,
            payload: error,
        });
    }
};

export const addTask = (data: any, date: Date, dispatch: Dispatch<any>) => {
    try {
        return async (dispatch: Dispatch<any>) => {
            if (data) {
                const task = {
                    id: Math.round(Math.random() * 1000),
                    name: data.title,
                    description: data.description,
                    date: date,
                    status: "IN-PROGRESS",
                    priority: data.priority
                };
                const resp = await api.post('tasks', task, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (resp.data) {
                    dispatch(fetchTasks(dispatch));
                    alert('Tarefa adicionada com sucesso')
                } else {
                    throw new Error('Ops, tivemos um problema.');
                }
            } else {
                throw new Error('Ops, tivemos um problema.');
            }
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: ADD_TASKS_FAILED,
            payload: error,
        });
    }
};

export const removeTask = (id: string, dispatch: Dispatch<any>) => {
    try {
        return async (dispatch: Dispatch<any>) => {
            if (id) {
                const resp = await api.delete(`tasks/${id}`);
                if (resp.data) {
                    dispatch(fetchTasks(dispatch));
                    alert('Tarefa deletada com sucesso')
                }
            } else {
                throw new Error;
            }
        }
    } catch (error) {
        alert('Ops, tivemos um problema ao deletar a tarefa')
    }
}

export const updateTask = (data: any, date: Date, dispatch: Dispatch<any>) => {
    try {
        return async (dispatch: Dispatch<any>) => {
            if (data && date) {
                console.log(data);
                const task = {
                    id: data.id,
                    name: data.title,
                    description: data.description,
                    date: date,
                    status: data.status,
                    priority: data.priority
                };
                const resp = await api.patch(`tasks/${data.id}`, JSON.stringify(task), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                dispatch(fetchTasks(dispatch));
                alert('Tarefa atualizada com sucesso')
            } else {
                throw new Error;
            }
        }
    } catch (error) {
        alert('Ops, tivemos um problema ao atualizar a tarefa')
    }
}