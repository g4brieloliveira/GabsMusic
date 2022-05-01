import { Dimensions, View } from "react-native";
import styled from "styled-components";

const { height } = Dimensions.get("window");

type Props = {
  tabBarHeight: number;
};

export const Wrapper = styled(View)`
  flex: 1;
  justify-content: space-between;
`;

export const Container = styled(View)<Props>`
  height: ${(props) =>
    props.tabBarHeight && height - (props.tabBarHeight + 40) - 24}px;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const TabBackground = styled(View)<Props>`
  height: ${(props) => props.tabBarHeight && props.tabBarHeight + 40}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg.tertiary};
`;
