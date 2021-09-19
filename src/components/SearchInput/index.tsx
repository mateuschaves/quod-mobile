import React from 'react'
import { TextInputProps } from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import { Container, IconContainer, Input } from './styles';

interface SearchInputProps extends TextInputProps {
    iconSize?: number;
}

export default function SearchInput({ iconSize = 24, ...props }: SearchInputProps) {
    return (
        <Container>
            <IconContainer>
                <Ionicons 
                    name="search"
                    size={iconSize}
                />
            </IconContainer>
            <Input
                placeholderTextColor="rgb(191, 192, 193)"
                {...props}

            />
        </Container>
    )
}