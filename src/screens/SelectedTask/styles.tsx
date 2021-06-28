import React from 'react'
import styled from 'styled-components/native'
import { Colors } from '../../styles/theme'

export const Container = styled.View `
    flex: 1;
    background-color: ${Colors.Background_light};
`

export const ViewInput = styled.View ` 
    padding: 16px;
`

export const ContainerInput = styled.View ` 
    height: 50px;
    width: 100%;
    justify-content: center;
`

export const Input = styled.TextInput ` 
    height: 45px;
    width: 100%;
    border-width: 1px;
    border-color: ${Colors.Gray};
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 5px;
    font-family: 'PopRegular';
    color: ${Colors.White};
    font-size: 14px;
`

export const ContainerInputDesc = styled.View ` 
    height: 150px;
    width: 100%;
    justify-content: center;
`

export const InputDesc = styled.TextInput ` 
    height: 145px;
    width: 100%;
    border-width: 1px;
    border-color: ${Colors.Gray};
    border-radius: 10px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 5px;
    font-family: 'PopRegular';
    color: ${Colors.White};
    font-size: 14px;
`

export const TitleInput = styled.Text ` 
    font-size: 14px;
    font-family: 'PopBold';
    color: ${Colors.White};
    text-align: left;
`

export const ButtonDate = styled.TouchableOpacity ` 
    flex-direction: row;
    height: 40px;
    width: 100%;
    align-items: center;
`

export const TitleDate = styled.Text `
    font-size: 14px;
    font-family: 'PopRegular';
    color: ${Colors.White};
    text-align: center;
    margin-left: 15px;
`

export const ViewButtons = styled.View ` 
    height: 50px;
    width: 100%;
    position: absolute;
    bottom: 20px;
    align-self: center;
    justify-content: center;
    flex-direction: row;
`

export const ButtonAction = styled.TouchableOpacity `
    height: 45px;
    width: 40%;
    background-color: ${Colors.Primary};
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin-left: 10px;
    margin-right: 10px;
`

export const ButtonText = styled.Text ` 
    font-size: 16px;
    font-family: 'PopBold';
    color: ${Colors.White};
    text-align: center;
`