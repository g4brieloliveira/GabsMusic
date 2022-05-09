import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { ArtistProps, TrackProps } from "../../types";
import { Audio } from "expo-av";
import * as S from "./styles";
import { Sound } from "expo-av/build/Audio";

type Props = {
  item: TrackProps;
  playingSound: Sound | undefined;
  setplayingSound: Dispatch<SetStateAction<Sound | undefined>>;
};

export const TrackItem = ({ item, playingSound, setplayingSound }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [actualSound, setActualSound] = useState<Sound>();

  const renderItem = ({ item }: { item: ArtistProps }) => (
    <S.Text>{item.name}</S.Text>
  );

  const handlePressItem = async ({ item }: { item: TrackProps }) => {
    isPlaying && actualSound === playingSound
      ? await pauseSound(playingSound)
      : await playSound(item.preview_url);
  };

  const playSound = async (uri: string) => {
    await pauseSound(playingSound);
    const { sound } = await Audio.Sound.createAsync({ uri: uri });
    setplayingSound(sound);
    setActualSound(sound);
    setIsPlaying(true);
    await sound.playAsync();
  };

  const pauseSound = async (sound: Sound | undefined) => {
    setIsPlaying(false);
    setActualSound(playingSound);
    !!sound && sound.unloadAsync();
  };

  return (
    <S.TrackContainer onPress={() => handlePressItem({ item })}>
      <View style={{ width: 50, height: 50, backgroundColor: "#222" }}>
        {isPlaying && actualSound === playingSound ? (
          <View>
            <S.Text
              style={{
                fontSize: 40,
                position: "absolute",
                bottom: 3,
                left: 15,
              }}
            >
              {">"}
            </S.Text>
            <Image
              style={{ width: 50, height: 50, opacity: 0.18 }}
              source={{ uri: item.album.images[2].url }}
            />
          </View>
        ) : (
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: item.album.images[2].url }}
          />
        )}
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
