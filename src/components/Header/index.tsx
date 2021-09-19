import React from 'react';

import { Container, Name, Avatar, GreetingContainer, Greeting } from './styles'

export default function Header() {
    return (
        <Container>
            <GreetingContainer>
                <Greeting>Bom dia !</Greeting>
                <Name>Mateus Henrique</Name>
            </GreetingContainer>
            <Avatar 
                source={{
                     uri: "https://avatars.githubusercontent.com/u/34848657?v=4"
                }}
            />
        </Container>
    )
}