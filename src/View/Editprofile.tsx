import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {Ellipse, eye} from '../Constants/appImage';
import { useState } from 'react';

const Editprofile = () => {
    const [text, setText] = useState('');
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

  return (
    <View style={{flex: 1}}>
      <View style={styles.imageContainer}>
        <Image source={Ellipse} style={styles.image} />
      </View>
      <Text style={{textAlign:'center', fontSize:20,fontWeight:'bold'}}>Edit Profile</Text>
      <Text style={styles.headertext1}>Your Name</Text>
      <View style={styles.inputText}>
         
          <TextInput
            style={styles.input}
            placeholder="Suresh Kumar"
            value={text}
            onChangeText={setText}
          />
        </View>
        <Text style={styles.headertext1}>Phone Number</Text>
        <View style={styles.inputText}>
         
          <TextInput
            style={styles.input}
            placeholder="+91 7943732378"
            value={text1}
            onChangeText={setText1}
          />
        </View>
        <Text style={styles.headertext1}>Change Password</Text>
        <View style={styles.inputText}>
         
          <TextInput
            style={styles.inpu1t}
            placeholder="123fhtkdf"
            value={text2}
            onChangeText={setText2}
          />
          <TouchableOpacity> <Image source={eye} style={styles.imagecount}/></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 200,
    borderColor: '#000',
    justifyContent: 'center',
    
    marginLeft:60,
    marginTop:50
  },
  imagecount:{width:25,height:25 ,marginTop:5, },
  headertext1: {
    marginLeft: 23,
    fontSize: 16,
    color: '#828282',
    marginTop: 15,
  },
  image: {
    width: 296,
    height: 296,
  },
  button: {
    height: 50,
    borderColor: '#2A4084',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '89%',
    alignSelf: 'center',
    marginTop: '5%',
    fontSize: 16,
    justifyContent: 'center',
    backgroundColor: '#2A4084',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    // textAlign: 'center',
    marginLeft: 4,
  },
  text3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0E0E0',
    alignSelf: 'center',
    marginLeft: 10,
  },inpu1t:{ borderColor: 'gray',
    shadowOpacity: 10,
    width: '81%',
    alignSelf: 'center',},
  input: {
    borderColor: 'gray',
    shadowOpacity: 10,
    width: '88%',
    alignSelf: 'center',
  },
  inputText: {
    flexDirection: 'row',
    height: 50,
padding:5,
    borderRadius: 10,
    marginTop: 15,
    alignSelf: 'center',
    borderWidth: 1,
  },
});

export default Editprofile;
