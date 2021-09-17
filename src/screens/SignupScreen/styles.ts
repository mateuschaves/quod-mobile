import styled from 'styled-components/native';

import { KeyboardAvoidingView } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';

interface CreateAccountTitleProps {
    bold?: boolean;
}

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    background-color: #ffff;
`;

export const Content = styled.View`
    padding: 16px 30px;
    background-color: #ffff;
`

export const LoginTitle = styled(Title)`
    font-size: 30px;
    font-weight: bold;
`

export const CreateAccountTitle = styled(Title)`
    color: ${({ bold }: CreateAccountTitleProps) => bold ? 'rgb(98, 98, 105)' : 'rgb(179, 179, 182)'};
    font-weight: ${({ bold }: CreateAccountTitleProps) => bold ? 'bold' : 'normal'};
    margin-left: ${({ bold }: CreateAccountTitleProps) => bold ? '8px' : 0};
    margin-vertical: 35px;
`

export const Form = styled.View`
    flex-direction: column;
    justify-content: space-between;
`;


export const Input = styled(TextInput)`
    margin-vertical: 8px;
    background-color: #fff;
`;

export const LoginButton = styled(Button)`
    justify-content: center;
    align-items: center;
    margin-vertical: 8px;
    height: 56px;
`;

export const Keyboard = styled(KeyboardAvoidingView)`
    flex: 1;
`;