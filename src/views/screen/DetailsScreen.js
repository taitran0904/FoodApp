//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons'
import COLORS from '../../consts/colors'
import {SecondaryButton} from '../component/Button';

const DetailsScreen = ({navigation, route}) => {
    const item = route.params;
    return(
        <SafeAreaView style={{borderStartColor: COLORS.white}}>
            <View style={styles.header}>
                <Icon name="arrow-back" size={24} color="black" onPress={navigation.goBack}/>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>Details</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{justifyContent: 'center', alignItems: 'center', height: 280}}>
                    <Image source={item.image} style={{height: 220, width: 220}}/>
                </View>
                <View style={styles.details}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
                            {item.name}
                        </Text>
                        <View style={styles.iconContainer}>
                            <Icon name="favorite-border" color={COLORS.primary} size={25}/>
                        </View>
                    </View>
                    <Text style={styles.detailsText}>
                        Our menu perfectly combines a melting pot of Middle-Eastern, Levantine, and the Mediterranean inspired cuisine. Beirut is a place for family and for friends. Your dining experience throughout our modern-Mediterranean inspired ambiance is lively. We are here to share our long-held Lebanese-Mediterranean traditions with a modern contemporary twist.
                    </Text>
                    <View style={{marginTop: 40, marginBottom: 40}}>
                        <SecondaryButton title="Add To Cart"/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    details:{
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: COLORS.primary,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    iconContainer:{
        backgroundColor: COLORS.white,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    detailsText:{
        marginTop: 10,
        lineHeight: 22,
        fontSize: 16,
        color: COLORS.white
    }
})

export default DetailsScreen;
