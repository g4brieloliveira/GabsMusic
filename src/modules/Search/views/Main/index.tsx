import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Wrapper } from "../../../../components/Wrapper";
import { search } from "../../../../services/search";
import * as S from "./styles";

export const Search = () => {
  const [value, setValue] = useState("sidoka");

  const [tracks, setTracks] = useState([]);

  const onSearch = async () => {
    const data = await search({ limit: 10, offset: 0, value: value });

    // console.log(data[0].name);
    setTracks(data);
  };

  useEffect(() => {
    onSearch();
  }, [value]);

  return (
    <Wrapper>
      <S.Container>
        <S.Input
          value={value}
          placeholder="Pesquisar musica"
          onChangeText={(text) => setValue(text)}
        />
        {tracks &&
          tracks.map((item, index) => {
            return <S.Text key={index}>{item.name}</S.Text>;
          })}
      </S.Container>
    </Wrapper>
  );
};
