import React from 'react'
import styled from 'styled-components/native'
import { Colors } from '../../styles/theme'

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
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: ${Colors.Primary};
`

const ViewIcon = styled.View `
    flex: 1;
    justify-content: center;
    align-items: flex-end;
`

const ViewBody = styled.ScrollView `
    flex: 1;
    margin-top: 5px;
    padding: 15px;
`

const TextDate = styled.Text `
    text-align: left;
    font-family: 'PopRegular';
    font-size: 16px;
    color: ${Colors.White};
    padding: 5px
`

const ViewTitle = styled.View `
    margin-top: 5px;
    padding: 10px;
    align-items: center;
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
};