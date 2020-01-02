import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView,FlatList } from 'react-native';

import YouTube from 'react-native-youtube';
import series from '../data/serie';


formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;

class playerScreen extends Component {
  
  render() {    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Image
                style={{width: 20, height: 20,marginBottom:150}}
                source={require('../assets/back.png')}
            />
            </TouchableOpacity>
        </View>
        <YouTube
                apiKey = "AIzaSyBhkzplva1wLkbEpeEEmp73EkqeHYZ0DEo"
                videoId="XlBWF1BfEAY" // The YouTube video ID
                play // control playback of video with true/false
                // control whether the video should play in fullscreen or inline
                loop // control whether the video should loop when ended
                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300}}
              />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        padding:15,
        backgroundColor:'#121212',
    },
    header: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    series:{
      flex:1,
      marginTop:20
    }
  });

export default playerScreen ;  
