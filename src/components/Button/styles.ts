import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components";

type ButtonProps = TouchableOpacityProps & {
  props: {
    variant?: "text" | "contained" | "outlined";
    disabled?: boolean;
    fontWeight?: string;
    fontSize?: number;
    textColor?: string;
  };
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  justify-content: center;
  padding: ${({ props, theme }) =>
    props.variant !== "text" ? theme.spacing.medium : "0px"};
  justify-content: center;
  align-items: center;
  width: ${({ props }) => (props.variant !== "text" ? `100%` : "auto")};
  height: ${({ props }) => (props.variant !== "text" ? `50px` : "auto")};
  border-radius: ${({ theme }) => theme.spacing.large};

  border-width: ${({ props }) => (props.variant !== "text" ? `1px` : "0px")};
  border-color: ${({ props, theme }) =>
    props.variant !== "text"
      ? theme.colors.ui.secondary
      : theme.colors.ui.primary};
  background-color: ${({ props, theme }) =>
    props.variant === "contained"
      ? props.disabled
        ? `${theme.colors.ui.primary}55`
        : theme.colors.ui.primary
      : theme.colors.transparent};
`;

export const Title = styled(Text)<ButtonProps>`
  font-size: ${({ props }) => (props.fontSize ? props.fontSize : "16px")};
  color: ${({ props, theme }) =>
    props.variant === "contained"
      ? theme.colors.text.secondary
      : theme.colors.text.primary};
  text-decoration: ${({ props }) =>
    props.variant === "text" ? "underline" : "none"};
`;
