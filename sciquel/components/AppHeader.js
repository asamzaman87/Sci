import React from "react";
import { StyleSheet, Text } from "react-native";
import AppText from "./AppText";

const AppHeader = (props) => {
  return (
    <AppText>
      <Text style={styles.header}>{props.children}</Text>
    </AppText>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "#444",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default AppHeader;
