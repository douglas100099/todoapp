import React from 'react'
import styled from 'styled-components/native'
import { Colors } from '../../styles/theme'
import Constants from 'expo-constants';

const Container = styled.View `
    flex: 1;
    background-color: ${Colors.Background_light};
`

const Title = styled.Text `
    font-family: 'PopBold';
    font-size: 20px;
    color: ${Colors.White};
    text-align: center;
`

const Subtitle = styled.Text `
    font-family: 'PopRegular';
    font-size: 16px;
    color: ${Colors.White};
    text-align: center;
`

const ViewHeader = styled.View `
    flex: 1;
    justify-content: center;
`

const Image = styled.Image `
    height: 35px;
    width: 35px;
    border-radius: 100pcx;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: ${Colors.Primary};
`

const ViewIcon = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

const ButtonSearch = styled.View `
    position: absolute;
    height: 40px;
    width: 40px;
    right: 5px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    z-index: 9;
`

const ViewBody = styled.View `
    flex: 1;
    margin-top: 5px;
    padding: 15px;
`

const TextDate = styled.Text `
    text-align: left;
    font-family: 'PopRegular';
    font-size: 16px;
    color: ${Colors.White};
    padding: 5px;
`

const ViewTitle = styled.View `
    height: 100px;
    margin-top: 5px;
    padding: 10px;
    align-items: center;
    margin-top: ${Constants.statusBarHeight}px;
`

const ContainerInput = styled.View ` 
    height: 50px;
    width: 100%;
    justify-content: center;
`

const Input = styled.TextInput ` 
    height: 45px;
    width: 100%;
    border-width: 1px;
    border-color: ${Colors.Gray};
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 40px;
    font-family: 'PopRegular';
    color: ${Colors.White};
    font-size: 14px;
`

export {
    Container,
    Title,
    ViewHeader,
    Image,
    ViewIcon,
    ViewBody,
    ViewTitle,
    Subtitle,
    TextDate,
    ButtonSearch,
    ContainerInput,
    Input,
};