import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/AntDesign'; 

const NewOrder = () => {
  const [value, setValue] = useState(null);
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const data = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Book New Order</Text>
        </View>
       
        <Text style={styles.headertext1}>Area</Text>
        <TextInput
          style={styles.input}
          placeholder="Valasaravakkam, Chennai"
          value={text}
          onChangeText={setText}
        />
        <Text style={styles.headertext1}>Street</Text>
        <TextInput
          style={styles.input}
          placeholder="Vivekananda St"
          value={text1}
          onChangeText={setText1}
        />
        <Text style={styles.headertext1}>Buildings/Apartments/Flat</Text>
        <TextInput
          style={styles.input}
          placeholder="Brindavan Homes"
          value={text2}
          onChangeText={setText2}
        />
        <Text style={styles.headertext1}>Block</Text>
        <TextInput
          style={styles.input}
          placeholder="A block"
          value={text3}
          onChangeText={setText3}
        />
        <Text style={styles.headertext1}>Floor</Text>
        <TextInput
          style={styles.input}
          placeholder="1st Floor"
          value={text4}
          onChangeText={setText4}
        />
        <Text style={styles.headertext1}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="9493490284"
          value={text4}
          onChangeText={setText4}
        />
        
        <Text style={styles.headertext1}>Preferred Date</Text>
        <View style={styles.calendarInputContainer}>
          <TextInput
            style={[ { flex: 1 }]}
            placeholder="Select Date"
            value={date.toDateString()}
            editable={false} 
          />
          <TouchableOpacity style={styles.iconContainer} onPress={() => setOpen(true)}>
            <Icon name="calendar" size={24} color="red" />
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
         <Text style={styles.headertext1}>Time</Text>
        <View style={styles.calendarInputContainer}>
          <TextInput
            style={[ { flex: 1 }]}
            placeholder="Select Date"
            value={date.toDateString()}
            editable={false} 
          />
          <TouchableOpacity style={styles.iconContainer} onPress={() => setOpen(true)}>
            <Icon name="clockcircle" size={24} color="red" />
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /><View style={{ flexDirection:'row', width:'89%',marginTop:10, marginLeft:20}}>
         <Icon name="clockcircle" size={15} color="#000" />
         <Text style={styles.headertext2}>Please double check the info you mentioned above and submit your order...</Text></View>
         <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit New Booking</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { marginTop: '10%', marginLeft: 10 },
  headerText: { fontSize: 18, fontWeight: 'bold' },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '89%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
  },
  headertext1: {
    marginLeft: 23,
    fontSize: 15,
    color: '#828282',
    marginTop: 15,
  },
  headertext2:{  fontSize: 15,
    color: '#828282',
  marginLeft:5},
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '89%',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  calendarInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '89%',
    alignSelf: 'center',
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor:'#fff'
  },
  iconContainer: {
    padding: 10,  
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
    justifyContent:'center',
    backgroundColor:'#2A4084',
    marginBottom:15
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign:'center',
    
  },
});

export default NewOrder;
