import { useState }from 'react';
import {Text, View, StyleSheet,TextInput,TouchableOpacity, Image} from 'react-native';
import { login } from '../Constants/appImage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const otpPage = () =>{
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
        <Text style={ styles.text2}>Please enter the OTP sent to the given phone number.</Text>
        </View>
       <View style={ styles.inputText}> 
      

       
        <TextInput
         maxLength={1}
          style={styles.input}
          placeholder="Enter the number "
          value={text}
          onChangeText={setText}
           keyboardType="numeric"
        />
        </View> 
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reloadText}>
      <Icon name="reload" size={20} color="#C20400" style={styles.icon} />
      <Text style={styles.text4}>Send Again</Text>
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
    reloadText:{
        flexDirection:'row',
        marginTop:10,
        marginLeft:70
      
    },
    text4:{
        fontSize:15,
       
       marginLeft:5,
        color:'#C20400',
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
   
 marginLeft:90
          },
        image:{ alignItems:'center', marginTop:'25%'},
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
export default otpPage;