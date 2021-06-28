import React from 'react'
import styled from 'styled-components/native'
import { Colors } from '../../styles/theme'

export const Touchable = styled.TouchableOpacity `
    position: absolute;
    height: 50px;
    width: 200px;
    border-radius: 15px;
    background-color: ${Colors.Primary};
    justify-content: center;
    align-items: center;
    align-self: center;
    bottom: 20px;
`

export const Title = styled.Text ` 
    font-family: 'PopBold';
    font-size: 16px;
    color: ${Colors.White};
`