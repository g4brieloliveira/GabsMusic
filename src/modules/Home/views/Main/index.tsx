import React from "react";
import Button from "../../../../components/Button";
import { Wrapper } from "../../../../components/Wrapper";
import * as S from "./styles";

export const Home = () => {
  return (
    <Wrapper>
      <S.Container>
        <S.ButtonsContainer>
          <S.FavouriteArtistButton
            label="Favoritar artista"
            variant="contained"
          />
          <S.AleatoryPlayButton label="Tocar aleatória" variant="outlined" />
        </S.ButtonsContainer>
      </S.Container>
    </Wrapper>
  );
};
