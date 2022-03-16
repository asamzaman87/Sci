import React from "react";
import { TouchableOpacity, Image, View, StyleSheet, Text } from "react-native";
import AppText from "./AppText";
import AppHeader from "./AppHeader";

const ArticleCard = (props) => {
  const article = props.article;

  return (
    <TouchableOpacity
      style={[styles.articleCardContainer, styles.shadow]}
      activeOpacity={1}
      onPress={() => {
        props.navigation.navigate("Article", {
          article: article,
        });
      }}
    >
      <Image style={styles.articleImage} source={{ uri: article.imageURL }} />
      <View style={styles.articleTextContainer}>
        <View style={styles.titleContainer}>
          <AppHeader style={styles.articleTitle}>{article.title}</AppHeader>
        </View>
        <AppText>{article.summary}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  articleCardContainer: {
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    // borderWidth: 2,
    borderRadius: 8,
    marginBottom: 15,
  },
  articleImage: {
    width: 120,
    height: 120,
    borderRadius: 5,
    // borderTopLeftRadius: 5,
    // borderBottomLeftRadius: 5,
  },
  shadow: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  articleTextContainer: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 20,
  },
  titleContainer: {
    alignSelf: "flex-start",
    marginBottom: 5,
  },
});

export default ArticleCard;
