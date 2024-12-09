import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { login } from '../Constants/appImage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import navigation from '../Navigation/navigation';
import { useNavigation } from '@react-navigation/native';

const loginPage = () => {
  const navigation = useNavigation();

  const [text, setText] = useState('');

  return (
    <View style={{ flex: 1 }}>
     
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => {  }}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Login</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text1}>Login Your account with phone number!</Text>
        <Text style={styles.text2}>
          Your OTP will be sent to the number you provided below.
        </Text>
      </View>

      <View style={styles.inputText}>
        <Icon name="phone" size={30} color="#27AE60" style={styles.icon} />
        <Text style={styles.text3}>+91</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the number"
          value={text}
          onChangeText={setText}
        />
      </View>

      <TouchableOpacity   onPress={() => navigation.navigate('otpPage')} style={styles.button}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity  >

      <View style={styles.image}>
        <Image source={login} style={styles.image1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#2A4084',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    padding: 10,
  },
  topBarTitle: {
    flex: 1,
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    alignSelf: 'center',
    marginTop: '30%',
    width: '70%',
  },
  text1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4F4F4F',
    textAlign: 'center',
  },
  text2: {
    marginTop: 10,
    textAlign: 'center',
    color: '#828282',
  },
  inputText: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    marginTop: 40,
    alignSelf: 'center',
    borderWidth: 1,
  },
  icon: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  text3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4F4F4F',
    alignSelf: 'center',
    marginLeft: 10,
  },
  input: {
    borderColor: 'gray',
    width: '50%',
    alignSelf: 'center',
  },
  button: {
    alignSelf: 'center',
    width: '70%',
    backgroundColor: '#2A4084',
    marginTop: 20,
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    alignItems: 'center',
    marginTop: '30%',
  },
  image1: {
    height: '60%',
    width: '80%',
    resizeMode: 'contain',
  },
});

export default loginPage;
