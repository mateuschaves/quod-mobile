import React from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import Header from "~/components/Header";
import MarketCard from "~/components/MarketCard";
import SearchInput from "~/components/SearchInput";

import { Container, MarketNearbyTitle, Markets } from "./styles";

export default function HomeScreen() {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <>
          <Header />
          <SearchInput placeholder="Qual mercado você está ?" />

          <MarketNearbyTitle>
              Mercados próximos
          </MarketNearbyTitle>

          <Markets
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <MarketCard
              distance={0.3}
              logo="https://lh3.googleusercontent.com/proxy/_xW0TgzWlJXxopFuLr7zxG6JmuaM56U8Da7ok2p1yBtnGfew5WXh5I0_1oYsg13rsLszUpkbwHmPvrH_sVYbzMlqYtA39Z8YBEqM4M8ZUjrO3z3n1yY74qp8y96V4vR6iJiLcOv8mw"
              title="Unicompra"
            />
            <MarketCard
              distance={1}
              logo="https://bonanza.com.br/wp-content/uploads/2020/04/bonanza-home-ta-bem-aqui-bonanzito.png"
              title="Bonanza"
            />
          </Markets>
        </>
      </Container>
    </TouchableWithoutFeedback>
  );
}
