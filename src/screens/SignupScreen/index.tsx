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

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {

  }

  return (
    <Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Container>
        <TouchableWithoutFeedback onPress={KeyboardController.dismiss}>
          <Content>
            <LoginTitle>Olá, {`\n`}Crie sua conta.</LoginTitle>
            <CreateAccountTitle>
              {"Se você já tem uma /  "}
              <CreateAccountTitle bold>Entrar agora</CreateAccountTitle>
            </CreateAccountTitle>
            <Input
              label="Nome"
              value={name}
              onChangeText={(text) => setName(text)}
              mode="outlined"
              keyboardType="name-phone-pad"
              autoCapitalize="words"
            />
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
            <LoginButton onPress={handleSubmit} mode="contained">Criar</LoginButton>
          </Content>
        </TouchableWithoutFeedback>
      </Container>
    </Keyboard>
  );
}
