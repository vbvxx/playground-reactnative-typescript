import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DumbContainer from "./src/DumbContainer";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <DumbContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
