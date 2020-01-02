import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import series from '../data/serie'
import films from '../data/serie'


class HomeScreen extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
            <Image
                style={{width: 20, height: 20}}
                source={require('../assets/menu.png')}
            />
            </TouchableOpacity>
            <Image
                style={{width: 100, height: 50,marginTop:-15}}
                source={require('../assets/logoicon.png')}
            />
            <Image
                style={{width: 20, height: 20}}
                source={require('../assets/search.png')}
            />
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.main}>
            <TouchableOpacity style={styles.favorite}>
                <Image
                    style={{height:300,width:391,resizeMode:'stretch', borderRadius:15}}
                    source={require('../assets/favorite.jpg')}
                    onPress={() => this.props.navigation.togg()}
                /> 
            </TouchableOpacity>
        </View>
        <View style={styles.programs}>
            <View style={{marginBottom:20}}>
                <Text style={{color:'white',marginBottom:15}}>Serie</Text>
                <View >
                    <ScrollView style={styles.categorie} horizontal={true}showsHorizontalScrollIndicator={false}>
                    <FlatList
                         contentContainerStyle={styles.categorie}
                        data={series}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{marginRight:10,marginBottom:20,width:120,height:150,backgroundColor:'black',borderRadius:5}}>
                                <Image
                                    style={{width:120,height:150,resizeMode:'stretch',borderRadius:5}}
                                    source={{uri: item.imageurl}}
                                />
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                    <TouchableOpacity 
                        style={{marginRight:10,width:100,height:150,backgroundColor:'red',borderRadius:5,flex:1,justifyContent:'center'}}
                        onPress={() => this.props.navigation.navigate('Series')}
                    >
                        <Text style={{color:'white',flex:1,alignSelf:'center'}}>Voir Plus</Text>
                    </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
         
        </View>
        <View style={{marginTop:-80}}>
        <View style={styles.programs}>
            <View style={{marginBottom:20}}>
                <Text style={{color:'white',marginBottom:15}}>Film</Text>
                <View >
                    <ScrollView style={styles.categorie} horizontal={true}showsHorizontalScrollIndicator={false}>
                    <FlatList
                         contentContainerStyle={styles.categorie}
                        data={films}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{marginRight:10,marginBottom:20,width:120,height:150,backgroundColor:'black',borderRadius:5}}>
                                <Image
                                    style={{width:120,height:150,resizeMode:'stretch',borderRadius:5}}
                                    source={{uri: item.imageurl}}
                                />
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                    <TouchableOpacity 
                        style={{marginRight:10,width:100,height:150,backgroundColor:'red',borderRadius:5,flex:1,justifyContent:'center'}}
                        onPress={() => this.props.navigation.navigate('Series')}
                    >
                        <Text style={{color:'white',flex:1,alignSelf:'center'}}>Voir Plus</Text>
                    </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
         
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
        padding:10,
        backgroundColor:'#121212',
    },
    header: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    main:{
        flexDirection:'row'
    },
    favorite:{
        flex:6,
        height:300,
        borderRadius:15,
        backgroundColor:'black',
    },
    programs:{
        marginTop:30,
        marginBottom:30
    },
    categorie:{
        flexDirection:'row'
    }
  });

export default HomeScreen ;  