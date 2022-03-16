import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <Text>This is the articles page</Text>
      </SafeAreaView>
    );
  }
}
