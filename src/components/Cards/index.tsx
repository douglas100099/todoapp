import React, { memo, ReactNode } from 'react';
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
import { formatedHours } from '../../commons/utils';

interface CardsDataProps {
    data: any;
    onPress: (item:any) => void;
}

const Cards = ({ data, onPress } : CardsDataProps) => {
    
    const renderPriority = (item:number) : String => {
        switch(item){
            case 0:
                return "Baixa";
            case 1:
                return "Média";
            case 2:
                return "Alta";
            default:
                return "Alta";
        };
    };

    return (
        <Container onPress={() => onPress(data)}  key={data.id.toString()}>
            <ViewCardRight>
                <Badge>
                    <BadgeText>{renderPriority(data.priority)}</BadgeText>
                </Badge>
            </ViewCardRight>
            <ViewCardLeft>
                <TextTask>{data.name}</TextTask>
            </ViewCardLeft>
            <ViewCardRight>
                <TextHour>{formatedHours(data.date)}</TextHour>
            </ViewCardRight>
        </Container>
    );
}

export default memo(Cards);