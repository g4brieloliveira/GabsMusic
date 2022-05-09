import React, { useEffect } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { ArtistProps, TrackProps } from "../../types";
import * as S from "./styles";

export const TrackItem = ({ item }: TrackProps) => {
  const renderItem = ({ item }: { item: ArtistProps }) => (
    <S.Text>{item.name}</S.Text>
  );

  return (
    <S.TrackContainer>
      <View style={{ width: 50, height: 50, backgroundColor: "#222" }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: item.album.images[2].url }}
        />
      </View>
      <S.InfosContainer>
        <S.Text>{item.name}</S.Text>
        <S.ArtistsContainer>
          <FlatList
            data={item.artists}
            renderItem={renderItem}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <S.Text>, </S.Text>}
            horizontal
            keyExtractor={(item) => item.name}
          />
        </S.ArtistsContainer>
      </S.InfosContainer>
    </S.TrackContainer>
  );
};
