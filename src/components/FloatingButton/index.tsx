import React from 'react';
import { View } from 'react-native';

import { Touchable, Container } from './styles';
import { Ionicons } from '@expo/vector-icons'; 
import { Colors } from '../../styles/theme';

const FloatingButton: React.FC = () => {
    return (
        <Container>
            <Touchable>
                <Ionicons name="add-sharp" size={35} color={Colors.White} />
            </Touchable>
        </Container>
    );
}

export default FloatingButton;