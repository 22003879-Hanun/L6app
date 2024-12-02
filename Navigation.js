import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home.js";
import Add from "./Add.js";
import Edit from "./Edit.js";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: true,
                    headerStyle: { backgroundColor: "#f8b195" },
                    headerTitleStyle: { fontWeight: "bold", color: "#ffffff" },
                }}
            >
                {/* Home Screen */}
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Pokémon Home",
                    }}
                />

                {/* Add Pokémon Screen */}
                <Stack.Screen
                    name="Add"
                    component={Add}
                    options={{
                        title: "Add Pokémon",
                    }}
                />

                {/* Edit Pokémon Screen */}
                <Stack.Screen
                    name="Edit"
                    component={Edit}
                    options={{
                        title: "Edit Pokémon",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
