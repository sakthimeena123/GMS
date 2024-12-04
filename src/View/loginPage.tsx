import { useState }from 'react';
import {Text, View, StyleSheet,TextInput,TouchableOpacity, Image} from 'react-native';
import { login } from '../Constants/appImage';
import Icon from 'react-native-vector-icons/MaterialIcons';

const loginPage = () =>{
    const [text, setText] = useState('');
    return (
    <View style={{flex: 1,}}>
      <View
        style={{
          
          alignSelf: 'center',
          marginTop:'40%',
          width:'70%',
        
        }}>
        <Text  style={ styles.text1}>Login Your account with phone number!</Text>
        <Text style={ styles.text2}>Your OTP will be sent to the number you provided below.</Text>
        </View>
       <View style={ styles.inputText}> 
       <Icon name="phone" size={30} color="#27AE60" style={styles.icon} />

       <Text  style={ styles.text3}>+91</Text>
        <TextInput
        
          style={styles.input}
          placeholder="Enter the number "
          value={text}
          onChangeText={setText}
        />
        </View> 
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

      <View style={styles.image}> <Image  source={login}
            style={styles.image1} /></View>
      </View>
    );
  };

  const styles = StyleSheet.create({ 
    text1:{
    fontSize:22,
    fontWeight:'bold',
    color:'#4F4F4F',textAlign:'center'
    },
    text3:{
        fontSize:18,
        fontWeight:'bold',
        color:'#4F4F4F',
        alignSelf:'center',
    marginLeft:10
        },
    text2:{
    marginTop:10,textAlign:'center',color:'#828282'}, 
    input: {
            borderColor: 'gray',     
            shadowOpacity:10,
            width:'50%',
            alignSelf:'center',
          },
          image1:{
            height: '60%',
            width: '80%',
            resizeMode: 'contain',
        },
        icon: {
    alignSelf:'center',
    marginLeft:10
          },
        image:{ alignItems:'center', marginTop:'40%'},
          inputText:{
            flexDirection:'row',
                        height: 50,

            borderRadius:10,
          marginTop:40, alignSelf:'center',borderWidth:1}, 
          button:{
            alignSelf:'center', 
            width:'70%', 
            backgroundColor:'#2A4084',
             marginTop:20,   
             justifyContent:'center',height: 50,borderRadius:10}
          ,
          buttonText:{
            fontSize:20,
            textAlign:'center',
            color:'#fff',
            fontWeight:'bold'
          }, })
export default loginPage;