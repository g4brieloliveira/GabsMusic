import { View, Text as RNText, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const Text = styled(RNText)`
  color: #fff;
`;

export const TrackContainer = styled(TouchableOpacity)`
  flex-direction: row;
  margin: 5px 0;
`;

export const InfosContainer = styled(View)`
  justify-content: space-evenly;
  margin-left: 10px;
`;

export const ArtistsContainer = styled(RNText)`
  flex-direction: row;
`;
