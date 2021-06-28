import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { 
    Container,
    ViewCardLeft,
    ViewCardRight,
    Badge,
    BadgeText,
    TextTask,
    TextHour
} from './styles';

interface CardsDataProps {
    children?: ReactNode;
    data?: any;
}

const Cards: React.FC = ({ children,data } : CardsDataProps) => {
    return (
        <Container>
            <ViewCardRight>
                <Badge>
                    <BadgeText>Alta</BadgeText>
                </Badge>
            </ViewCardRight>
            <ViewCardLeft>
                <TextTask>Fazer café</TextTask>
            </ViewCardLeft>
            <ViewCardRight>
                <TextHour>10:14</TextHour>
            </ViewCardRight>
        </Container>
    );
}

export default Cards;