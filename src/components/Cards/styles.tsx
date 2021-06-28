import React from 'react'
import styled from 'styled-components/native'
import { Colors } from '../../styles/theme'

const Container = styled.TouchableOpacity `
    height: 165px;
    padding: 5px;
    width: 100%;
    flex-direction: column;
    background-color: ${Colors.Gray};
    border-radius: 10px;
    margin-bottom: 15px;
`

const ViewCardRight = styled.View `
    flex: 1;
    padding: 5px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

const ViewCardLeft = styled.View `
    flex: 1;
    padding: 5px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const Badge = styled.View `
    justify-content: center;
    height: 35px;
    width: 65px;
    background-color: red;
    border-radius: 10px;
    align-items: center;
`

const BadgeText = styled.Text `
    font-size: 14px;
    color: ${Colors.White};
    text-align: center;
    font-family: 'PopBold';
`

const TextTask = styled.Text `
    font-size: 16px;
    color: ${Colors.Background};
    font-family: 'PopBold';
    text-align: left;
`

const TextHour = styled.Text `
    font-size: 14px;
    color: ${Colors.Background};
    font-family: 'PopRegular';
    text-align: right;
`


export {
    Container,
    ViewCardRight,
    Badge,
    BadgeText,
    TextTask,
    ViewCardLeft,
    TextHour,
}