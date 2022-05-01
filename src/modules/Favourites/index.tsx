import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../../navigation/routes";
import { Favourites } from "./views/Main";

const Stack = createNativeStackNavigator();

export const FavouritesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ROUTES.FAVOURITES.FAVOURITES}
        component={Favourites}
      />
    </Stack.Navigator>
  );
};
