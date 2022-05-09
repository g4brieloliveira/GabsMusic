import {
  TextInput,
  View,
  Text as RNText,
  FlatList as RNFlatList,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  padding: 16px;
  justify-content: space-between;
`;

export const Input = styled(TextInput)`
  background-color: #eee;
  padding: 8px;
  border-radius: 8px;
`;

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
