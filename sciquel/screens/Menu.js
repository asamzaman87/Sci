import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <Text>This is the menu page</Text>
      </SafeAreaView>
    );
  }
}
