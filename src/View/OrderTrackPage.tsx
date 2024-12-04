import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Frameicon, Group, home, cash, load} from '../Constants/appImage';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const OrderTrack = () => {
  const [text, setText] = useState('');
  return (
    <View style={{flex: 1, marginTop: '10%'}}>
      <Text style={styles.headertext1}>Enter your Order ID</Text>
      <View style={styles.inputText}>
        <Text style={styles.text3}>+91</Text>
        <TextInput
          style={styles.input}
          placeholder="539FK403490"
          value={text}
          onChangeText={setText}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Order</Text>
      </TouchableOpacity>
      <View style={{flex: 1, backgroundColor: '#fff', margin: 20, padding: 8}}>
        <View style={styles.card}>
          <View style={styles.row1}>
            <Image source={Group} style={styles.icon1} />
            <Text style={{marginLeft: 5}}>Bill Number#</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={cash} style={styles.icon1} />
            <Text style={{marginLeft: 3}}>Charges</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.row1}>
            <Text style={{marginLeft: 4, fontSize: 16, fontWeight: 'bold'}}>
              GMS392OD90I0
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginLeft: 4, fontSize: 16, fontWeight: 'bold'}}>
              ₹1,233
            </Text>
          </View>
        </View>
        <View style={styles.reload}>
          <Image source={load} style={styles.reloadStyle} />
          <Text style={styles.reloadText}>Delivery On Progress</Text>
        </View>
        <View style={{  borderStyle: 'dotted', borderWidth: 1, 
  
  borderRadius: 8,marginTop:20,width:'95%', alignSelf:'center'}}>
        <View style={{flexDirection:'row', marginTop:5}}>
         <Icon name="location-on" size={20} color="red" />
          <Text style={styles.location}>Pickup Location</Text></View>
          <TextInput
          style={styles.textInput}
          multiline
          editable
          placeholder="Pickup Location"
          defaultValue={`Plot No.5, Brindavan Nagar, Valasaravakkam, Chennai, Tamil Nadu 600087`}
          placeholderTextColor="#555"
        />
        </View>
        <View style={{justifyContent:'center'}}><Text style={{textAlign:"center", fontSize:10}}>.</Text>
        <Text style={{textAlign:"center"}}>.</Text>
        <Text style={{textAlign:"center"}}>.</Text>
        <Text style={{textAlign:"center"}}>.</Text></View>
        <View style={{  borderStyle: 'dotted', borderWidth: 1, 
  
  borderRadius: 8,marginTop:20,width:'95%', alignSelf:'center'}}>
   
        <View style={{flexDirection:'row', marginTop:5}}>
         <Icon name="location-on" size={20} color="green" />
          <Text style={styles.location}>Delivery Location</Text></View>
          <TextInput
          style={styles.textInput}
          multiline
          editable
          placeholder="Pickup Location"
          defaultValue={`Plot No.5, Brindavan Nagar, Valasaravakkam, Chennai, Tamil Nadu 600087`}
          placeholderTextColor="#555"
        />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row1: {flexDirection: 'row'},
  textInput: {
   marginLeft:20,
    fontSize: 16,
    color: '#000',
  
  },
  icon1: {width: 20, height: 20},
  headertext1: {
    marginLeft: 23,
    fontSize: 16,
    color: '#828282',
    marginTop: 15,
  },
  location:{marginLeft:2, fontSize:16, fontWeight:'bold', color:'#828282'},
  reloadStyle: {height: 28, width: 28},
  reload: {
    marginTop: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    paddingHorizontal: 72,
    padding: 7,
    borderColor: '#FF9800',
    borderRadius: 20,
  },
  reloadText: {fontSize: 18, color: '#FF9800'},
  text3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0E0E0',
    alignSelf: 'center',
    marginLeft: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginTop: 10,
    marginLeft: 5,
  },

  input: {
    borderColor: 'gray',
    shadowOpacity: 10,
    width: '78%',
    alignSelf: 'center',
  },
  image1: {
    height: '60%',
    width: '80%',
    resizeMode: 'contain',
  },
  inputText: {
    flexDirection: 'row',
    height: 50,

    borderRadius: 10,
    marginTop: 15,
    alignSelf: 'center',
    borderWidth: 1,
  },
  button: {
    height: 50,
    borderColor: '#2A4084',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '89%',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 16,
    justifyContent: 'center',
    backgroundColor: '#2A4084',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OrderTrack;
