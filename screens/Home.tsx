import React, { useState, useEffect, useCallback, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { reg } from "../src/assets/regex";
import { Content } from "../src/components/Content";

import { Form } from "../src/interfaces/Interfaces";
import { Prop } from "../src/interfaces/Interfaces";

export const Home: React.FC<Prop> = ({ navigation }) => {
  const [value, setValue] = useState<Form>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string[]>([]);

  const handleChange = (value: string, key: string) => {
    setValue((prev) => ({ ...prev, [key]: value }));
  };

  const handleDelete = (name: string) => {
    setError((prev) => prev.filter((er) => er !== name));
  };

  const addError = (value: string) => {
    setError((prev) => [...prev, value]);
  };

  const handleBlur = (value: string, name: string) => {
    switch (name) {
      case "email":
        if (!reg.test(value)) {
          addError(name);
        } else {
          handleDelete(name);
        }

        return;

      case "password":
        if (value.trim().length < 8) {
          addError(name);
        } else {
          handleDelete(name);
        }

        return;
    }
  };

  const checkValid = () => {
    if (!value.email.trim()) {
      addError("email");
    }

    if (!value.password.trim()) {
      addError("password");
    }
  };

  const handleSubmit = () => {
    checkValid();
    const test = Object.values(value).every((el) => el);

    if (!error.length && test) {
      navigation.navigate("ImagePage");
    }
  };

  return (
    <Content>
      <View style={styles.inputContainer}>
        <View style={styles.inputBlock}>
          <TextInput
            style={styles.input}
            value={value.email}
            placeholder="Email"
            autoCapitalize={"none"}
            autoCorrect={false}
            keyboardType={"email-address"}
            placeholderTextColor="#808080"
            onBlur={() => handleBlur(value.email, "email")}
            onChangeText={(e) => handleChange(e, "email")}
          />
          {error.includes("email") && (
            <Text style={styles.message}>Email is not valid </Text>
          )}
        </View>
        <View style={styles.inputBlock}>
          <TextInput
            style={styles.input}
            value={value.password}
            placeholder="Password"
            autoCapitalize={"none"}
            autoCorrect={false}
            secureTextEntry={true}
            placeholderTextColor="#808080"
            onBlur={() => handleBlur(value.password, "password")}
            onChangeText={(e) => handleChange(e, "password")}
          />
          {error.includes("password") && (
            <Text style={styles.message}>Password length min 8 chars</Text>
          )}
        </View>
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
  },
  inputBlock: {
    position: "relative",
    marginBottom: 15,
  },

  message: {
    position: "absolute",
    color: "red",
    bottom: -11,
    left: 4,
  },

  input: {
    padding: 5,
    fontSize: 20,
    color: "#DCDCDC",
  },
});
