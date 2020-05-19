import React from 'react';
import {
    StyleSheet, Text, View, TouchableHighlight, Image, ImageBackground
} from 'react-native';

export class Home extends React.Component {
    _onPressPassBook = () => {
        this.props.navigation.navigate('Passbook');
    }

    render() {
        return (

            <View style={styles.container}>

                <View style={styles.col1}>

                    <View style={styles.row11}>

                        <Image style={styles.image} source={require('../../assets/avatar.png')} />
                        <View style={styles.user}>
                            <Text style={styles.text2}>Himanshu Barmola</Text>
                            <Text style={styles.text2}>99720111111</Text>
                        </View>

                    </View>

                    <View style={styles.row12}>
                        <TouchableHighlight onPress={this._onPressPassBook} underlayColor="white">
                            <View style={styles.col22}>
                                <Image source={require('../../assets/passbook.png')} style={styles.image13} />
                                <Text>Passbook</Text>
                            </View>
                        </TouchableHighlight>
                        <View style={styles.col22}>
                            <Image source={require('../../assets/gift-card_w.png')} style={styles.image13} />
                            <Text>Claim Gifts</Text>
                        </View>
                        <View style={styles.col22}>
                            <Image source={require('../../assets/transfer-points_w.png')} style={styles.image13} />
                            <Text>Transfer Points</Text>
                        </View>
                        <View style={styles.col22}>
                            <Image source={require('../../assets/scan.png')} style={styles.image13} />
                            <Text>Scan QR</Text>
                        </View>
                    </View>
                    <View>

                    </View>

                </View>



                <View style={styles.row2}>
                    <ImageBackground style={styles.couponbgimage} source={require('../../assets/couponbg.png')} >
                        <View style={styles.row21}>
                            <Image style={styles.coin_image} source={require('../../assets/mark-coin.png')} />
                            <View style={styles.col2}>
                                <Text style={styles.text}>123456</Text>
                                <Text>Redeemable Points</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.row3}>
                    <Image source={require('../../assets/c1.png')} style={styles.c2} />
                </View>

            </View>

        );
    }

}
var styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'pink'
    },
    row2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    row3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        padding: 20
    },
    c2: {
        width: 350,
        height: 190,
        borderRadius: 20,
    },


    user: {
        flexDirection: 'column',
        justifyContent: 'center',


    },
    image: {
        padding: 60,
        width: 60,
        height: 40,
    },
    image13: {
        padding: 5,
        width: 30,
        height: 30,
    },

    couponbgimage: {
        backgroundColor: 'white',
        width: 350,
        height: 150,
        borderRadius: 20,

    },
    coin_image: {
        width: 100,
        height: 100,
        justifyContent: 'center'
    },
    row21: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    col2: {
        flexDirection: 'column',

    },
    col1: {
        //flexDirection: 'row',
        flexDirection: 'column',
        backgroundColor: 'orange'
    },
    row11: {
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    row12: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 30,
        paddingTop: 30
    },
    col22: {
        flexDirection: 'column',

    },
    text: {
        color: 'orange',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text2: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});