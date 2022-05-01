import { View, Text, Dimensions } from "react-native";
import React from "react";

import * as S from "./styles";
import { Props } from "./types";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export const Wrapper = ({ children }: Props) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <S.Wrapper>
      <S.Container tabBarHeight={tabBarHeight}>{children}</S.Container>
      <S.TabBackground tabBarHeight={tabBarHeight} />
    </S.Wrapper>
  );
};
