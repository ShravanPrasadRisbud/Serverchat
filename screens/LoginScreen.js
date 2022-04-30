import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Touchable,
} from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";

export default class LoginScreen extends Component {
  state = {
    name: "",
  };

  continue = () => {
    this.props.navigation.navigate("Chat", { name: this.state.name });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{ marginTop: 64 }}></View>
        <View style={{ margin: 100, height: 100, alignSelf: "center" }}>
          <Text style={styles.header}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Type your username"
            onChangeText={(name) => {
              this.setState({ name });
            }}
            value={this.state.name}
          />
          <View style={{ alignItems: "flex-end", marginTop: 64 }}>
            <TouchableOpacity style={styles.continue} onPress={this.continue}>
              <Ionicons name="md-arrow-round-forward" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363d4a",
  },
  circle: {
    width: 600,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#282c34",
    position: "absolute",
    left: -120,
    top: -20,
  },
  header: {
    fontWeight: "600",
    fontSize: 30,
    color: "#b5b5b5",
    marginTop: 32,
    fontFamily: "Source Sans Pro",
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#bab7c3",
    borderRadius: 30,
    paddingHorizontal: 16,
    //color: "#63797a",
    color: "white",
    fontWeight: "600",
    fontFamily: "Source Sans Pro",
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#4221a6",
    alignItems: "center",
    justifyContent: "center",
  },
});
