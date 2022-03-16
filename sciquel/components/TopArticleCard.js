import React from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import { Text, Card } from "galio-framework";
import { theme, withGalio, GalioProvider } from "galio-framework";

const TopArticleCard = (props) => {
  const article = props.article;
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Article", {
          article: article,
        });
      }}
      activeOpacity={1}
    >
      <Card
        flex
        shadow
        borderless
        style={[styles.card, styles.shadow]}
        title={article.title}
        caption={article.summary}
        // location="Los Angeles, CA"
        avatar="http://i.pravatar.cc/100?id=skater"
        // imageStyle={styles.cardImage}
        imageBlockStyle={styles.imageBlockStyle}
        image={article.imageURL}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
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
  imageBlockStyle: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
// export default withGalio(TopArticleCard, styles);
export default TopArticleCard;
