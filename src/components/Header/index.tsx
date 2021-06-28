import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { Container } from './styles';

interface HeaderDataProps {
    children?: ReactNode;
}

const Header: React.FC = ({ children } : HeaderDataProps) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default Header;