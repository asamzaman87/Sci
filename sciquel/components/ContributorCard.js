import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

const ContributorCard = (props) => {
  const imageSize = 60;
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        marginVertical: 10,
        flexDirection: "row",
        padding: 10,
        width: "50%",
      }}
      activeOpacity={1}
      onPress={() => {
        // this.props.navigation.navigate("ArticlePage", {
        //   article: article,
        // });
      }}
    >
      <Image
        style={{
          width: imageSize,
          height: imageSize,
          borderRadius: imageSize / 2,
        }}
        source={{ uri: props.contributor.imageURL }}
      />
      <View
        style={{ flexDirection: "column", width: "60%", marginHorizontal: 10 }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          {props.contributor.name}
        </Text>
        <Text>{props.contributor.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContributorCard;
