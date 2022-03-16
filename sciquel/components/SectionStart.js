import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SectionStart = (props) => {
  return (
    <View
      style={{
        borderTopColor: "#828282",
        borderTopWidth: StyleSheet.hairlineWidth,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          marginTop: 8,
          color: "#555",
        }}
      >
        {props.sectionName}
      </Text>
    </View>
    // <View
    //   style={{
    //     height: 20,
    //     padding: 4,
    //     backgroundColor: "#D1D1D1",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <Text
    //     style={{
    //       fontSize: 12,
    //     }}
    //   >
    //     {props.sectionName}
    //   </Text>
    // </View>
  );
};

export default SectionStart;
