import React, { useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./screens/Home";
import { ImagePage } from "./screens/ImagePage";
import { Person } from "./screens/Person";

export const Context = createContext({});
const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState({});

  const obj = {
    user,
    setUser,
  };

  return (
    <Context.Provider value={obj}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ImagePage" component={ImagePage} />
          <Stack.Screen name="Person" component={Person} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default App;