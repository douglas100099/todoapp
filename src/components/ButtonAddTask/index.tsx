import React from 'react';
import { View } from 'react-native';

import {
    Touchable,
    Title
} from './styles';

interface ButtonAddTaskDataProps {
    onPress: () => void;
    disabled: boolean;
    title: string;
}

const ButtonAddTask = ({ onPress, disabled, title }: ButtonAddTaskDataProps) => {
    return (
        <Touchable 
            onPress={onPress}
            disabled={disabled}
        >
            <Title>{title}</Title>
        </Touchable>
    );
}

export default ButtonAddTask;