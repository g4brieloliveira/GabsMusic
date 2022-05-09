import React, { useState } from "react";
import { Text } from "react-native";
import Button from "../../../../components/Button";
import { Wrapper } from "../../../../components/Wrapper";
import { getAccessToken } from "../../../../services/getAccessToken";
import { search } from "../../../../services/search";
import * as S from "./styles";

export const Home = () => {
  const [token, setToken] = useState();

  const handlePressFavouriteButton = async () => {
    search({ limit: 10, offset: 0, value: "test" });
    // const data = await search();

    // setToken(data.access_token);
  };

  const handlePressAleatoryButton = async () => {
    const data = await getAccessToken();

    setToken(data.access_token);
  };

  return (
    <Wrapper>
      <S.Container>
        <S.ButtonsContainer>
          <S.FavouriteArtistButton
            label="Favoritar artista"
            variant="contained"
            onPress={handlePressFavouriteButton}
          />
          <S.AleatoryPlayButton
            label="Tocar aleatória"
            variant="outlined"
            onPress={handlePressAleatoryButton}
          />
        </S.ButtonsContainer>
        <Text style={{ color: "#fff" }}>{token}</Text>
      </S.Container>
    </Wrapper>
  );
};
