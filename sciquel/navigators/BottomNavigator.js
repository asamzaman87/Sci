import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet } from "react-native";

import IonIcon from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Home from "../screens/Home";
import Articles from "../screens/Articles";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Article from "../screens/Article";
import Menu from "../screens/Menu";
import Search from "../screens/Search";

const iconSize = 25;
const iconActiveColor = "#F98121";
const iconInactiveColor = "#444";

const BackIcon = (props) => {
  return (
    <IonIcon
      name="arrow-back-outline"
      style={{ marginLeft: 20 }}
      size={iconSize}
      color={iconInactiveColor}
      onPress={() => {
        props.navigation.goBack();
      }}
    />
  );
};
const TitleLogo = () => {
  return <Text style={{ fontSize: 20, fontWeight: "bold" }}>SciQuel</Text>;
};

const BottomTab = createBottomTabNavigator();
function BottomNavigator() {
  return (
    <BottomTab.Navigator
      sceneContainerStyle={{}}
      screenOptions={({ route, navigation }) => ({
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingBottom: 30,
          height: 80,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
        tabBarItemStyle: {},
        tabBarActiveTintColor: iconActiveColor,
        tabBarInactiveTintColor: iconInactiveColor,
        headerTitle: () => {
          return <TitleLogo />;
        },
        headerLeft: () => {
          return (
            <Feather
              name="menu"
              size={iconSize}
              color={iconInactiveColor}
              onPress={() => {
                navigation.navigate("Menu");
              }}
              style={{ marginLeft: 20 }}
            />
          );
        },
        headerRight: () => (
          <Feather
            name="search"
            size={iconSize}
            color={iconInactiveColor}
            onPress={() => {
              navigation.navigate("Search");
            }}
            style={{ marginRight: 20 }}
          />
        ),
      })}
      initialRouteName="Home"
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <IonIcon name="home-outline" size={iconSize} color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Articles"
        component={Articles}
        options={{
          tabBarIcon: ({ color }) => (
            <IonIcon name="book" size={iconSize} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={iconSize} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Menu"
        component={Menu}
        options={({ navigation }) => ({
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: { display: "none" },
          headerLeft: () => {
            return <BackIcon navigation={navigation} />;
          },
          headerRight: () => null,
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={({ navigation }) => ({
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: { display: "none" },
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name="Article"
        component={Article}
        options={({ navigation }) => ({
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: { display: "none" },
          headerLeft: () => {
            return <BackIcon navigation={navigation} />;
          },
          headerRight: () => null,
        })}
      />
      <BottomTab.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: { display: "none" },
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name="SignUp"
        component={SignUp}
        options={({ navigation }) => ({
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: { display: "none" },
          headerShown: false,
        })}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({});
export default BottomNavigator;
