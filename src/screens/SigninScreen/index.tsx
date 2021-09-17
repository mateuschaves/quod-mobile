import React, { useState } from "react";
import {
  Keyboard as KeyboardController,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

import {
  LoginTitle,
  Container,
  Content,
  CreateAccountTitle,
  Input,
  LoginButton,
  Keyboard,
} from "./styles";

export default function SigninScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    navigation.navigate('Signup')
  }

  return (
    <Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Container>
        <TouchableWithoutFeedback onPress={KeyboardController.dismiss}>
          <Content>
            <LoginTitle>Olá, {`\n`}Entre agora.</LoginTitle>
            <CreateAccountTitle>
              {"Se você é novo /  "}
              <CreateAccountTitle bold>Criar uma conta</CreateAccountTitle>
            </CreateAccountTitle>
            <Input
              label="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              mode="outlined"
              keyboardType="email-address"
              keyboardAppearance="default"
            />
            <Input
              label="Senha"
              value={password}
              onChangeText={(text) => setPassword(text)}
              mode="outlined"
              secureTextEntry
            />
            <CreateAccountTitle>
              {"Esqueceu a senha ? /  "}
              <CreateAccountTitle bold>Trocar</CreateAccountTitle>
            </CreateAccountTitle>
            <LoginButton onPress={handleSubmit} mode="contained">Entrar</LoginButton>
          </Content>
        </TouchableWithoutFeedback>
      </Container>
    </Keyboard>
  );
}
