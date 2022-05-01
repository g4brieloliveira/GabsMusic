import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TransitionPresets } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "../modules/Home";
import { SearchNavigator } from "../modules/Search";
import { FavouritesNavigator } from "../modules/Favourites";
import { ProfileNavigator } from "../modules/Profile";
import { Ionicons } from "@expo/vector-icons";
import { ROUTES } from "./routes";
import { theme } from "../utils/theme";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={ROUTES.HOME.NAVIGATOR}
        screenOptions={({ route }) => ({
          headerShown: false,
          presentation: "modal",
          tabBarShowLabel: false,
          ...TransitionPresets.FadeFromBottomAndroid,
          tabBarStyle: {
            position: "absolute",
            bottom: 20,
            backgroundColor: theme.colors.bg.primary,
            marginHorizontal: 20,
            height: 80,
            borderRadius: 20,
            borderTopWidth: 0,
          },

          tabBarActiveTintColor: theme.colors.brand.primary,
          tabBarInactiveTintColor: theme.colors.brand.secondary,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === ROUTES.HOME.NAVIGATOR) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === ROUTES.SEARCH.NAVIGATOR) {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === ROUTES.FAVOURITES.NAVIGATOR) {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === ROUTES.PROFILE.NAVIGATOR) {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={ROUTES.HOME.NAVIGATOR} component={HomeNavigator} />
        <Tab.Screen
          name={ROUTES.SEARCH.NAVIGATOR}
          component={SearchNavigator}
        />
        <Tab.Screen
          name={ROUTES.FAVOURITES.NAVIGATOR}
          component={FavouritesNavigator}
        />
        <Tab.Screen
          name={ROUTES.PROFILE.NAVIGATOR}
          component={ProfileNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
