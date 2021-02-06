//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import COLORS from '../../consts/colors'
import { PrimaryButton } from '../component/Button';

const OnBoardScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <View style={{height: 400}}>
                <Image 
                style={{
                    width: '100%',
                    resizeMode: 'contain',
                    top: -150
                }} 
                source={require('../../assets/onboardImage.png')}
            />
            </View>
            <View style={styles.textContainer}>
                <View>
                    <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>Hoàng Gia</Text>
                    <Text style={{
                        marginTop: 20, 
                        fontSize: 18, 
                        textAlign: 'center', 
                        color: COLORS.grey
                    }}>
                        Mỗi món ăn là một kiệt tác</Text>
                </View>
                <View style={styles.indicatorContainer}>
                    <View style={styles.currentIndicator}></View>
                    <View style={styles.indicator}></View>
                    <View style={styles.indicator}></View>
                </View>
                <PrimaryButton
                    onPress={() => navigation.navigate('Home')}
                    title="Get Started"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textContainer:{
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        paddingBottom: 40,
    },
    indicatorContainer:{
        height: 50,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    currentIndicator:{
        height: 12,
        width: 30,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        marginHorizontal: 5,
    },
    indicator:{
        height: 12,
        width: 12,
        borderRadius: 10,
        backgroundColor: COLORS.grey,
        marginHorizontal: 5,
    }
})

export default OnBoardScreen;
