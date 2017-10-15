import React, {Component} from 'react';
import { View,  KeyboardAvoidingView } from 'react-native';
import {Input, Item, Text, Button } from 'native-base';

export default class NewDeckView extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <View>
                    <Text style={{
                        fontSize:25,
                        fontWeight:"bold"
                    }}>
                        What is the title of your new Deck?
                    </Text>
                </View>
                <View>
                    <Item regular style={{
                        marginTop:15,
                        marginBottom:10,
                        width: 300
                    }}>
                        <Input placeholder='Title' />
                    </Item>
                </View>
                <View>
                    <Button bordered>
                        <Text> Submit </Text>
                    </Button>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
