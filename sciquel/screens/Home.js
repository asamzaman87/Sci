import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import { Text, NavBar, Button } from "galio-framework";

import ArticleCard from "../components/ArticleCard";
import ContributorCard from "../components/ContributorCard";
import SectionStart from "../components/SectionStart";
import TopArticleCard from "../components/TopArticleCard";

export default class Home extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = { articles: this.getArticleList(),
    refreshing: false };

  }

  wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  onRefresh = () => {
    this.setState({
      refreshing: true
    })

    this.wait(2000).then(() =>  this.setState({
      refreshing: false
    }));
  }

  getArticleList() {
    const articles = [];
    for (let i = 0; i < 10; i++) {
      articles.push(this.getArticle(i));
    }
    return articles;
  }

  getArticle(id) {
    return {
      id: id,
      title: "This is The Title " + id + " of An Article",
      Section: "Chemistry",
      summary:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu. In iaculis nunc sed augue. Lobortis feugiat vivamus at augue eget arcu dictum. Faucibus pulvinar elementum integer enim neque. Tellus in hac habitasse platea dictumst vestibulum. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Pellentesque habitant morbi tristique senectus et netus et. Nunc sed id semper risus in hendrerit. Habitant morbi tristique senectus et netus et malesuada fames ac. At lectus urna duis convallis convallis tellus id interdum. Egestas dui id ornare arcu odio. Id aliquet risus feugiat in ante.",
      imageURL: "https://picsum.photos/id/" + id * 104 + "/400/200",
    };
  }

  getContributorList() {
    const contributors = [];
    for (let i = 0; i < 6; i++) {
      contributors.push(this.getContributor(i));
    }
    return contributors;
  }

  getContributor(id) {
    return {
      id: id,
      name: "Jeffery Xiong",
      title: "Scientist at SciQuel",
      imageURL: "http://i.pravatar.cc/100?id=skater",
    };
  }

  renderTopArticles = ({ item }) => (
    <TopArticleCard article={item} navigation={this.props.navigation} />
  );

  getTopArticles() {
    return this.state.articles.filter((article) => article.id < 2);
  }

  getArticlesBySectionName(sectionName) {
    if (sectionName === "LATEST STORIES") {
      return this.state.articles.filter(
        (article) => article.id >= 2 && article.id < 6
      );
    }
  }

  render() {
    return (
      <ScrollView style={styles.homePageContainer}
        contentContainerStyle={styles.scrollView}
        refreshControl={
        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh}/> }>

        <View style={styles.sectionContainer}>
          <SectionStart sectionName="TOP STORIES" />
          {this.getTopArticles().map((item) => (
            <TopArticleCard
              article={item}
              navigation={this.props.navigation}
              key={item.id}
            />
          ))}
        </View>

        <View style={styles.sectionContainer}>
          <SectionStart sectionName="LATEST STORIES" />
          {this.getArticlesBySectionName("LATEST STORIES").map((item) => (
            <ArticleCard
              article={item}
              navigation={this.props.navigation}
              key={item.id}
            />
          ))}
          {/* <Button color="#50C7C7" size="small">
            Read More
          </Button> */}
          <TouchableOpacity
            style={[styles.moreButton, styles.shadow]}
            onPress={() => {
              this.props.navigation.navigate("Articles");
            }}
          >
            <Text style={styles.moreButtonText}>Read More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <SectionStart sectionName="CONTRIBUTERS/WRITERS" />
          <View style={styles.contributorsContainer}>
            {this.getContributorList().map((item) => (
              <ContributorCard
                contributor={item}
                navigation={this.props.navigation}
                key={item.id}
              />
            ))}
          </View>
        </View>

        {/* <View style={styles.sectionContainer}>
          <SectionStart sectionName="PODCAST" />
        </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  shadow: {
    // backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  moreButton: {
    width: 100,
    height: 28,
    alignSelf: "center",
    margin: 6,
    justifyContent: "center",
    backgroundColor: "#F98121",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  moreButtonText: {
    fontSize: 12,
    color: "#FFF",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  contributorsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  item: {
    width: "50%", // is 50% of container width
  },
  homePageContainer: {
    backgroundColor: "#fff",
  },
});
