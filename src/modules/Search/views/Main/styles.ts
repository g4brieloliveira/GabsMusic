import { TextInput, View, Text as RNText } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  padding: 16px;
`;

export const Input = styled(TextInput)`
  background-color: #eee;
  padding: 8px;
  border-radius: 8px;
`;

export const Text = styled(RNText)`
  color: #fff;
`;
