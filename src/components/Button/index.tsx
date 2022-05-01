import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { theme } from "../../theme";

import { Container, Title } from "./styles";

interface ButtonProps {
  label: string;
  loading?: boolean;
  disabled?: boolean;
  variant?: "text" | "contained" | "outlined";
  fontWeight?: "bold" | string;
}

const Button: React.FC<ButtonProps & TouchableOpacityProps> = ({
  loading,
  label,
  variant = "contained",
  fontWeight,
  disabled,
  ...buttonProps
}) => {
  const props = {
    label,
    variant,
    fontWeight,
    disabled,
  };

  return (
    <Container
      testID="Button"
      props={props}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...buttonProps}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={
            variant !== "contained"
              ? theme.colors.ui.primary
              : theme.colors.white
          }
        />
      ) : (
        <Title props={props}>{label}</Title>
      )}
    </Container>
  );
};

export default Button;
