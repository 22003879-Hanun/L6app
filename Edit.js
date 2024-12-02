import React, { useState } from 'react';
import { TextInput, View, Text, Button, StyleSheet, Alert } from "react-native";
import { datasource } from "./Data";

const Edit = ({ navigation, route }) => {

    const { sectionIndex, pokemonIndex } = route.params;
    const [name, setName] = useState(route.params.pokemon.name);
    const [number, setNumber] = useState(route.params.pokemon.num);

    return (
        <View style={{ padding: 10 }}>
            <Text style={styles.label}>Pokémon Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Enter Pokémon name"
            />
            <Text style={styles.label}>Pokédex Number:</Text>
            <TextInput
                style={styles.input}
                value={number}
                keyboardType="numeric"
                onChangeText={(text) => setNumber(text)}
                placeholder="Enter Pokédex number"
            />
            <View style={styles.buttonRow}>
                <View style={{ margin: 5 }}>
                    <Button
                        title="SAVE"
                        onPress={() => {
                            // Update the Pokémon in the data source
                            datasource[sectionIndex].data[pokemonIndex] = {
                                name: name,
                                num: number,
                            };
                            navigation.navigate('Home'); // Navigate back to Home
                        }}
                    />
                </View>
                <View style={{ margin: 5 }}>
                    <Button
                        title="DELETE"
                        color="red"
                        onPress={() => {
                            Alert.alert(
                                "Are you sure you want to delete?",
                                "",
                                [
                                    {
                                        text: "Yes",
                                        onPress: () => {

                                            datasource[sectionIndex].data.splice(pokemonIndex, 1);
                                            navigation.navigate('Home');
                                        },
                                    },
                                    { text: "No" },
                                ]
                            );
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontWeight: "bold",
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default Edit;
