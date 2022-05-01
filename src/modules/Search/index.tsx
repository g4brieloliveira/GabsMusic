import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../../navigation/routes";
import { Search } from "./views/Main";

const Stack = createNativeStackNavigator();

export const SearchNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.SEARCH.SEARCH} component={Search} />
    </Stack.Navigator>
  );
};
