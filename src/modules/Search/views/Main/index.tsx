import { Sound } from "expo-av/build/Audio";
import React, { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";
import { Wrapper } from "../../../../components/Wrapper";
import { search } from "../../../../services/search";
import { TrackItem } from "../../components/TrackItem";
import { TrackProps } from "../../types";
import * as S from "./styles";

export const Search = () => {
  const [value, setValue] = useState("");
  const [playingSound, setplayingSound] = useState<Sound | undefined>();
  const [tracks, setTracks] = useState([]);

  const onSearch = async () => {
    const data = await search({ limit: 30, offset: 0, value: value });
    setTracks(data);
  };

  useEffect(() => {
    onSearch();
  }, [value]);

  const renderItem = ({ item }: { item: TrackProps }) => (
    <TrackItem
      item={item}
      playingSound={playingSound}
      setplayingSound={setplayingSound}
    />
  );

  return (
    <Wrapper>
      <S.Container>
        <S.Input
          value={value}
          placeholder="Pesquisar musica"
          onChangeText={(text) => setValue(text)}
        />
        <FlatList
          style={{
            height: "95%",
          }}
          data={tracks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </S.Container>
    </Wrapper>
  );
};
