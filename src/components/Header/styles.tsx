import React from 'react'
import styled from 'styled-components/native'
import { Colors } from '../../styles/theme';

const Container = styled.View `
    flex-direction: row;
    height: 60px;
    width: 100%;
    background-color: ${Colors.Background_light};
    justify-content: space-between;
    padding: 0px 15px 0px 15px;
    margin-top: 5px;
`

export {
    Container,
};