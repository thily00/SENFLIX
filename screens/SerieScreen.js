import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView,FlatList } from 'react-native';

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

class SerieScreen extends Component {
  
  render() {    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Image
                style={{width: 20, height: 20}}
                source={require('../assets/back.png')}
            />
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{fontSize:20,color:'white',alignSelf:'center',marginTop:20}}>Serie</Text>
        </View>
        <View style={styles.series}>
            <FlatList
                data={series}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                      style={{marginRight:10,marginBottom:20,width:120,height:150,backgroundColor:'black',borderRadius:5}}
                      onPress={() => this.props.navigation.navigate('SerieDetails',{
                        itemId: item.id
                      })}
                    >
                      <Image
                        style={{width:120,height:150,resizeMode:'stretch',borderRadius:5}}
                        source={{uri: item.imageurl}}
                      />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                numColumns={numColumns}
            />
        </View>
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

export default SerieScreen ;  