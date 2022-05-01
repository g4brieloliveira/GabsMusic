import { View } from "react-native";
import styled from "styled-components";
import Button from "../../../../components/Button";

export const Container = styled(View)`
  padding: ${({ theme }) => theme.spacing.big};
`;

export const ButtonsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FavouriteArtistButton = styled(Button)`
  width: 48%;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.text.secondary};
  border: 0px;
`;

export const AleatoryPlayButton = styled(Button)`
  width: 48%;
  color: ${({ theme }) => theme.colors.text.primary};
`;
