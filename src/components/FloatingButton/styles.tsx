import React from 'react'
import styled from 'styled-components/native'
import { Colors } from '../../styles/theme';

const Container = styled.View `
    position: absolute;
    height: 50px;
    width: 50px;
    bottom: 20px;
    right: 20px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`

const Touchable = styled.TouchableOpacity `
    height: 50px;
    width: 50px;
    border-radius: 100px;
    background-color: ${Colors.Primary};
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 2px red;
`

export {
    Touchable,
    Container,
}