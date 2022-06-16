import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button } from "../../components/Button";

import { Container, Title, SubTitle, BodyText, Wrapper } from "./style";

/* interface IHomeProps {
  navigation
} */

function Home({ navigation }: any): JSX.Element {
  function onButtonPress() {
    navigation.navigate("Blog");
  }

  return (
    <Container>
      <Wrapper>
        <Title>Seja muito bem vindo(a)</Title>
        <SubTitle>App desenvolvido usando Expo</SubTitle>
        <BodyText>by: Átila de Freitas</BodyText>
      </Wrapper>
      <Wrapper>
        <Button title="Acessar Blog" onPress={onButtonPress} />
      </Wrapper>
      <StatusBar style="light" />
    </Container>
  );
}

export { Home };
