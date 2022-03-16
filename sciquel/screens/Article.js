import React from "react";
import { Text, SafeAreaView, Image } from "react-native";

const Article = (props) => {
  return (
    <SafeAreaView>
      <Text>This is the article page</Text>
      <Text>{props.route.params.article.title}</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: props.route.params.article.imageURL }}
      />
    </SafeAreaView>
  );
};

export default Article;
