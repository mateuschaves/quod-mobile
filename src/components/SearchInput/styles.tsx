import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 60px;
    margin-bottom: 60px;
`;

export const IconContainer = styled.View`
    right: 90%;
    position: absolute;
    z-index: 50;
`;

export const Input = styled.TextInput`
    flex: 1;
    background-color: #ffff;
    border-radius: 8px;
    height: 56px;
    padding-left: 50px
`;
