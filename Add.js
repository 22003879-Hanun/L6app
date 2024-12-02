import React, { useState } from 'react';
import { datasource } from "./Data";
import { TextInput, View, Text, Button, StyleSheet } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [type, setType] = useState('NORMAL');

    return (
        <View style={{ padding: 10 }}>
            <Text style={styles.label}>Pokémon Name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setName(text)}
                placeholder="Enter Pokémon name"
            />
            <Text style={styles.label}>Pokédex Number:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={(text) => setNumber(text)}
                placeholder="Enter Pokédex number"
            />
            <Text style={styles.label}>Type:</Text>
            <View style={{ padding: 10 }}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: "NORMAL", value: "NORMAL" },
                        { label: "FIRE", value: "FIRE" },
                        { label: "DARK", value: "Dark" },
                    ]}
                />
            </View>
            <Button
                title="SUBMIT"
                onPress={() => {
                    const sectionIndex = datasource.findIndex(section => section.title === type);

                    if (sectionIndex !== -1) {
                        datasource[sectionIndex].data.push({ name: name, num: number });
                    }
                    navigation.navigate('Home');
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
});

export default Add;
