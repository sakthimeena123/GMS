import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Frameicon, Group, home, cash, load, row} from '../Constants/appImage';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OrderTrack = () => {
  const data = [
    {id: 1, name: 'Number of Boxes', name1: ':', name2: '2'},
    {
      id: 2,
      name: 'Items',
      name1: ':',
      name2: 'Washing Machine,Air Conditioner,Firdge(3)',
    },
    {id: 3, name: 'Weight', name1: ':', name2: '2,352 Kg'},
    {id: 4, name: 'Mode', name1: ':', name2: 'Sea'},
    {id: 5, name: 'Container Number', name1: ':', name2: '43242349854'},
    {id: 6, name: 'Seaport Destination', name1: ':', name2: 'Madurai'},
    {id: 7, name: 'arrival date', name1: ':', name2: '20 mar, wed 2023'},
    {id: 8, name: 'airport Clearance Status', name1: ':', name2: 'Approved'},
    {id: 9, name: 'Tracking Number', name1: ':', name2: '43214234235423'},
    {id: 10, name: 'Delivery Date', name1: ':', name2: 'Wed 20, Mar, 2023'},
  ];
  const [text, setText] = useState('');
  return (
    <ScrollView>
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
        <View
          style={{flex: 1, backgroundColor: '#fff', margin: 20, padding: 8}}>
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
          <View
            style={{
              borderStyle: 'dotted',
              borderWidth: 1,
              borderRadius: 8,
              marginTop: 20,
              width: '95%',
              alignSelf: 'center',
            }}>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Icon name="location-on" size={20} color="red" />
              <Text style={styles.location}>Pickup Location</Text>
            </View>
            <TextInput
              style={styles.textInput}
              multiline
              editable
              placeholder="Pickup Location"
              defaultValue={`Plot No.5, Brindavan Nagar, Valasaravakkam, Chennai, Tamil Nadu 600087`}
              placeholderTextColor="#555"
            />
          </View>
          
          <View
            style={{
              borderStyle: 'dotted',
              borderWidth: 1,
              borderRadius: 8,
              marginTop: 20,
              width: '95%',
              alignSelf: 'center',
            }}>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Icon name="location-on" size={20} color="green" />
              <Text style={styles.location}>Delivery Location</Text>
            </View>
            <TextInput
              style={styles.textInput}
              multiline
              editable
              placeholder="Pickup Location"
              defaultValue={`Plot No.5, Brindavan Nagar, Valasaravakkam, Chennai, Tamil Nadu 600087`}
              placeholderTextColor="#555"
            />
          </View>
          {data.map(item => (
            <View key={item.id} style={styles.cardView}>
              <View style={{width: '35%'}}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <Text>{item.name1}</Text>
              <View style={{width: '40%'}}>
                <Text style={styles.age}>{item.name2}</Text>
              </View>
            </View>
          ))}
          <View
            style={{
              marginLeft: 10,
              margin: 10,
              backgroundColor: '#F2F2F2',
              padding: 10,
              borderRadius: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Contact Person</Text>
              <Text>Contact Number</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text>Muthu Kumar</Text>
              <Text>+91 7539039402</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Image source={row} style={styles.icon1} />
            <Text style={styles.buttonText}>Track Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  row1: {flexDirection: 'row'},
  textInput: {
    marginLeft: 20,
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
  icon: {width: 20, height: 20, color: '#fff'},

  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  location: {marginLeft: 2, fontSize: 16, fontWeight: 'bold', color: '#828282'},
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
  name: {
    fontSize: 14,
    color: '#333',
  },
  age: {
    fontSize: 14,
    color: '#666',
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    // textAlign: 'center',
    marginLeft: 4,
  },
});

export default OrderTrack;
