import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';

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

class SerieDetails extends Component {
  
  
  
  render() {  
    const { navigation } = this.props  
    const serieId = JSON.stringify(navigation.getParam('itemId'))
    const result = series.find(serie => serie.id == serieId);
    

    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
                style={{width: 20, height: 20}}
                source={require('../assets/back.png')}
            />
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{fontSize:20,color:'white',alignSelf:'center',marginTop:20}}>
                {result.tittle}
            </Text>
            <Image
                style={{width: 200, height: 250,resizeMode:'stretch',alignSelf:'center',marginTop:15}}
                source={{uri: result.imageurl}}
            />
            <Text style={{color:'white',marginTop:10}}>
                {result.description}
            </Text>


          





            <Text style={{fontSize:20,color:'gray',marginTop:20}}>Saison 1</Text>
            <View style={{marginTop:15}}>
              <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('playerS')}
              >
              <Text style={{backgroundColor:'#212121',height:35,padding:7,color:'white',borderColor:'black',borderWidth:0.5}}>Episode 1</Text>
              </TouchableOpacity>
              <TouchableOpacity>
              <Text style={{backgroundColor:'#212121',height:35,padding:7,color:'white',borderColor:'black',borderWidth:0.5}}>Episode 2</Text>
              </TouchableOpacity>
              <TouchableOpacity>
              <Text style={{backgroundColor:'#212121',height:35,padding:7,color:'white',borderColor:'black',borderWidth:0.5}}>Episode 3</Text>
              </TouchableOpacity>
              <TouchableOpacity>
              <Text style={{backgroundColor:'#212121',height:35,padding:7,color:'white',borderColor:'black',borderWidth:0.5}}>Episode 4</Text>
              </TouchableOpacity>
              <TouchableOpacity>
              <Text style={{backgroundColor:'#212121',height:35,padding:7,color:'white',borderColor:'black',borderWidth:0.5}}>Episode 5</Text>
              </TouchableOpacity>
              <TouchableOpacity>
              <Text style={{backgroundColor:'#212121',height:35,padding:7,color:'white',borderColor:'black',borderWidth:0.5}}>Episode 6</Text>
              </TouchableOpacity>
              
              
            </View>
        </View>
        </ScrollView>
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

export default SerieDetails ;  