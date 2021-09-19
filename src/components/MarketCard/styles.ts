import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    align-items: center;
    width: 250px;
    height: 80px;
    flex-direction: row;
    padding: 8px;
    margin-right: 8px;
`;

export const Logo = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 8px;
`;

export const Title = styled.Text`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 4px;
    color: rgb(56, 58, 58);
`;

export const Distance = styled.Text`
    color: rgb(191, 192, 193);
`;

export const Info = styled.View`
    flex-direction: column;
    margin-left: 16px;
`;