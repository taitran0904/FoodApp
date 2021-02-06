import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons'
import COLORS from '../../consts/colors';


const HomeScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <View style={styles.header}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 28}}>Hello</Text>
                        <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>Tài</Text>
                    </View>
                    <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>Bạn muốn ăn gì nào ?</Text>
                </View>
                <Image source={require('../../assets/avt.jpg')} style={{height: 50, width: 50, borderRadius: 25}}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    }
});

export default HomeScreen;
