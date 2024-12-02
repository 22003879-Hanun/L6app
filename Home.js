import React, { useState } from 'react';
import {
    StatusBar,
    Button,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { datasource } from './Data.js';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    opacityStyle: {
        borderWidth: 1,
        borderRadius: 4,
        margin: 5,
        padding: 15,
        backgroundColor: '#f8f8f8',
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    },
    container: {
        flex: 1,
        paddingBottom: 50,
    },
    button: {
        margin: 10,
    },
});

const Home = () => {
    const navigation = useNavigation();
    const [data, setData] = useState(datasource);

    useFocusEffect(
        React.useCallback(() => {
            setData(datasource); // Refresh data when screen comes into focus
        }, [])
    );

    const renderItem = ({ item, index, section }) => {
        const sectionIndex = data.findIndex(
            (sec) => sec.title === section.title
        );

        if (sectionIndex === -1) {
            console.error('Section not found:', section.title);
            return null;
        }

        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() => {
                    navigation.navigate('Edit', {
                        sectionIndex,
                        pokemonIndex: index,
                        pokemon: item,
                    });
                }}
            >
                <Text style={styles.textStyle}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.button}>
                <Button
                    title="Add Pokémon"
                    onPress={() => {
                        try {
                            navigation.navigate('Add');
                        } catch (error) {
                            console.error('Navigation error:', error);
                            alert('Unable to navigate to Add screen!');
                        }
                    }}
                />
            </View>

            <SectionList
                sections={data}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor } }) => (
                    <Text
                        style={[
                            styles.headerText,
                            { backgroundColor: bgColor || '#cccccc' },
                        ]}
                    >
                        {title}
                    </Text>
                )}
                ListEmptyComponent={() => (
                    <Text style={{ textAlign: 'center', margin: 20 }}>
                        No Pokémon available. Add one to get started!
                    </Text>
                )}
            />
        </View>
    );
};

export default Home;
