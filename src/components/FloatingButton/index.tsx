import React from 'react';
import { View } from 'react-native';

import { Touchable, Container } from './styles';
import { Ionicons } from '@expo/vector-icons'; 
import { Colors } from '../../styles/theme';

interface FloatingButtonDataProps {
    onPress: () => void;
}

const FloatingButton = ({ onPress } : FloatingButtonDataProps) => {
    return (
        <Container>
            <Touchable onPress={onPress}>
                <Ionicons name="add-sharp" size={35} color={Colors.White} />
            </Touchable>
        </Container>
    );
}

export default FloatingButton;