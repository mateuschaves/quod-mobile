import React from 'react'

import { Container, Logo, Info, Title, Distance } from './styles';

interface MarketCardProps {
    title: string;
    distance: number;
    logo: string;
}

export default function MarketCard({ title, distance, logo }: MarketCardProps) {
    return (
        <Container
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.00,

                elevation: 1,
                backgroundColor: '#fff',
                borderRadius: 8
            }}
        >
            <Logo 
                source={{ uri: logo }}
            />
            <Info>
                <Title 
                    numberOfLines={1} 
                    ellipsizeMode="tail"
                >
                    {title}
                </Title>
                <Distance>{distance} km</Distance>
            </Info>
        </Container>
    )
}
