import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { RootState, RootActions } from "./redux/store";
import { Dispatch } from "redux";
import { syncActionCreator, testGetState } from "./redux/actions";
import { ThunkDispatch } from "redux-thunk";

interface OwnProps {}

interface StateProps {
  text: string;
}

interface DispatchProps {
  update: (text: string) => void;
  test: () => void;
}

type Props = OwnProps & StateProps & DispatchProps;

class DumbContainer extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonView}>
          <Button
            title={"Hack"}
            onPress={() => {
              this.props.update("hack");
            }}
          />
          <View style={{ width: 30 }} />
          <Button
            title={"Cool"}
            onPress={() => {
              this.props.update("cool");
            }}
          />
          <View style={{ width: 30 }} />
          <Button
            title={"Bonus"}
            onPress={() => {
              this.props.test();
            }}
          />
        </View>
        <Text style={{ margin: 20, fontSize: 20, color: "green" }}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  buttonView: {
    flexDirection: "row"
  }
});

const mapStateToProps = (state: RootState): StateProps => {
  return {
    text: state.playground.text
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>
): DispatchProps => {
  return {
    update: (text: string) => {
      dispatch(syncActionCreator(text));
    },
    test: () => {
      dispatch(testGetState());
    }
  };
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(DumbContainer);
