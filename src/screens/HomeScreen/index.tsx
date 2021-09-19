import React, { useEffect } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import Header from '~/components/Header';
import SearchInput from '~/components/SearchInput';

import { Container } from './styles';

export default function HomeScreen({ navigation }) {

    useEffect(
        () => 
            navigation.addListener('beforeRemove', (e: any) => {
                e.preventDefault();
              })
        ,
        []
    );

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <Container>
                    <>
                        <Header />
                        <SearchInput placeholder="Qual mercado você está ?"/>
                    </>
            </Container>
        </TouchableWithoutFeedback>
    )
}