import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { Searchbar } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";

const themeBlackColor = "#444";

const Search = (props) => {
  const [text, setText] = React.useState("");
  return (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Feather
            name="search"
            // size="20"
            size={20}
            color={themeBlackColor}
            // style={{ marginLeft: 1 }}
          />
          <TextInput
            // style={styles.searchInput}
            style={styles.searchInput}
            onChangeText={setText}
            value={text}
            autoCorrect={false}
            selectionColor={themeBlackColor}
            placeholder="Search Articles"
          />
          {text !== "" && (
            <IonIcon
              name="close-circle"
              size={20}
              color={themeBlackColor}
              onPress={() => {
                setText("");
              }}
            />
          )}
        </View>
        <Button
          title="Cancel"
          color={themeBlackColor}
          onPress={() => {
            setText("");
            props.navigation.goBack();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    // backgroundColor: "#fff",
    // height: ,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: "3%",
  },
  inputContainer: {
    flexDirection: "row",
    // borderWidth: 1,
    marginRight: 2,
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#e6e6e6",
    width: "82%",
  },
  searchInput: {
    height: 20,
    marginLeft: 8,
    width: "82%",
    // padding: 10,
    // paddingHorizontal: 10,
  },
});

export default Search;
