import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
    render() {
        return (
            <View style={styles.card}>
                <Text>{this.props.joke}</Text>
            </View>
        )
    }
}

class NoMoreCards extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>No Jokes To Show</Text>
            </View>
        )
    }
}

export default class Tinder extends React.Component {

    handleAccept() {
        console.log('I like this joke');
    }

    handleReject() {
        console.log('I dont like this joke');
    }

    render() {
        return (
            <SwipeCards
                cards={this.props.jokes}
                renderCard={(jokeObject) => <Card joke={jokeObject.joke} />}
                renderNoMoreCards={() => <NoMoreCards />}
                handleYup={this.handleAccept}
                handleNope={this.handleReject}
            />
        )
    }
}


const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 300,
        borderRadius: 10,
        borderColor: '#b3ffff',
        borderWidth: 2,
        backgroundColor: '#00cccc',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00cccc'
    }

})
