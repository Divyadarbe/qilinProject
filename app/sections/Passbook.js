import React from 'react';
import {
    Linking,
    StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, Button, Image
} from 'react-native';

export class Passbook extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.box1} >
                    <View style={styles.b1}>
                        <Text>Transactions(248)</Text>
                        <Button style={styles.button}
                            onPress={() => Alert.alert('Simple Button pressed')} title="Press me" />
                    </View>
                    <View style={styles.b2}>
                        <Text>Select Date Range</Text>
                        <Text>Date</Text>
                    </View>

                    <View style={styles.b3}>
                        <TouchableHighlight onPress={() => Alert.alert('Should display all the transactions, not yet implemented')}>
                            <Text>ALL</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Alert.alert('should display sent transactions, not yet implemented')}>
                            <Text>SENT</Text>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => Alert.alert('should display received transactions')}>
                            <Text>RECEIVED</Text>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => Alert.alert('Claimed transactions, yet to add the functionality')}>
                            <Text>CLAIMED</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Alert.alert('Redeemed transactions, not yet implemented')}>
                            <Text>REDEEMED</Text>
                        </TouchableHighlight>

                    </View>
                </View>


                <View style={styles.box2}>
                    {/* Hard coded the transactions display */}
                    {/* Here we should get the transaction details(image,description, amount) from the database using fetch api's get method. Display details using map method */}
                    <View style={styles.transaction1}>
                        <Image style={styles.image} source={require('../../assets/avatar.png')} />
                        <Text>Received from Himanshu</Text>
                        <Text>1000</Text>
                    </View>
                    <View style={styles.transaction1}>
                        <Image style={styles.image} source={require('../../assets/avatar.png')} />
                        <Text>Sent to xyz</Text>
                        <Text>2000</Text>
                    </View>
                    <View style={styles.transaction1}>
                        <Image style={styles.image} source={require('../../assets/avatar.png')} />
                        <Text>Sent to xyz</Text>
                        <Text>2000</Text>
                    </View>
                    <View style={styles.transaction1}>
                        <Image style={styles.image} source={require('../../assets/avatar.png')} />
                        <Text>Sent to xyz</Text>
                        <Text>2000</Text>
                    </View>
                </View>

            </View>


        );
    }

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',

        height: 600
    },
    box1: {
        flex: 1,


    },
    box2: {
        flex: 3,

    },
    button: {
        width: 20,
        height: 20
    },
    b1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    b2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    b3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    transaction1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    image: {
        padding: 20,
        width: 30,
        height: 30,

    },

})

