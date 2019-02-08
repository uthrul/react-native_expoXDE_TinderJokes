import React from 'react';
// CSS, text, container, something to type content in, button emulator
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Item } from 'native-base';

// () => somefunction()
// render() {}
export default class Input extends React.Component {

    fetchData() {
        // string concatination is combining two strings
        // concatinate a static string with a dynamic value
        fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
            // json - javascript object notation, get data and make it to a type the comp understands
            // make it into a type of object, key value pairs
            // { flower: 'part of a plant'  } => this is an object
            .then((response) => { return response.json() })
            // once info is given, we want to update our parents state
            // we want to share this data with another component, via our parent state
            // single source of truth
            .then((data) => this.props.updateJokes(data.value))
    }

    render() {
        // return data, i.e result of executing function

        // Instance is one instance/child of class with specific attributes called props(short)/properties
        return (
            <View style={styles.container}>
                <Text style={styles.textTinder}>Tinder Jokes</Text>
                <Text style={styles.textAttention}>How to use :</Text>
                <Text style={styles.textUse}>
                    You only need to enter a number, which matches the jokes that you want to see.
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    // oranges
                    value={this.props.value}
                    style={styles.input}
                    //track changes in text, when someone types something in input field
                    // text will be what we type in
                    onChangeText={(text) => this.props.onChange(text)}
                />
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.fetchData()}
                >
                    <Text
                        style={styles.text}
                    >Search</Text>
                </TouchableHighlight>
            </View>
        )
    }

}
//optimised styling

// alignItems is to horizontally align
// justifyContent is to vertically align
// flex 1 is to take entire height
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 60,
    },
    input: {
        height: 70,
        width: 300,
        borderColor: '#00cccc',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 30,
        fontWeight: '600',
        color: '#00cccc',
    },
    button: {
        backgroundColor: '#00cccc',
        borderColor: '#b3ffff',
        height: 50,
        width: 150,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    textTinder: {
        fontSize: 40,
        fontWeight: '600',
        color: '#00cccc',
    },
    textAttention: {
        fontSize: 15,
        fontWeight: '500',
        color: '#00cccc',
    },
    textUse: {
        fontSize: 15,
        fontWeight: '500',
        color: '#00cccc',
        marginBottom: 15,
    }
})
