import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Name = styled.Text`
    font-size: 20px;
    font-weight: 800;
    color: rgb(56, 58, 58);
`;

export const Avatar = styled.Image`
    width: 54px;
    height: 54px;
    border-radius: 90px;
`;

export const GreetingContainer = styled.View`

`;

export const Greeting = styled.Text`
    color: rgb(191, 192, 193);
    font-size: 18px;
    font-weight: 500;
`;