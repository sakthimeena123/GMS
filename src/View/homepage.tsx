import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Frameicon, Group, home, cash, Ellipse, about } from '../Constants/appImage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const homePage = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: '1',
      title: 'Item 1',
      text1: 'Order ID#',
      text2: 'Cost',
      num1: 'GMS392OD90I0',
      num2: '₹1,233',
      src: Group,
      src1: cash,
      text3: 'No. of Items',
      text4: 'Kg',
      num4: '4',
      num5: '2,458',
    },
    {
      id: '2',
      title: 'Item 2',
      text1: 'Order ID#',
      text2: 'Cost',
      num1: 'GMS392OD90I0',
      num2: '₹1,233',
      src: Group,
      src1: cash,
      text3: 'No. of Items',
      text4: 'Kg',
      num4: '4',
      num5: '2,458',
    },
  ];

  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: '#fff',
        marginTop: 10,
        margin: 20,
        alignSelf: 'center',
        borderRadius: 6,
        padding: 5,
      }}>
      <View style={styles.card}>
        <View style={styles.row1}>
          <Image source={item.src} style={styles.icon1} />
          <Text style={{ marginLeft: 5 }}>{item.text1}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={item.src1} style={styles.icon1} />
          <Text style={{ marginLeft: 3 }}>{item.text2}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.num}>{item.num1}</Text>
        <View>
          <Text style={styles.num}>{item.num2}</Text>
        </View>
      </View>
      <View style={styles.card2}>
        <Text>{item.text3}</Text>
        <Text>{item.text4}</Text>
      </View>
      <View style={styles.card3}>
        <Text>{item.num4}</Text>
        <Text>{item.num5}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderTrack')}>
        <Text style={styles.buttonText}>Track Order</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <>
          <View style={styles.topBar}>
            <Image source={about} style={{ height: 33, width: 33 }} />
            <TouchableOpacity style={styles.topBarTitle} onPress={() => { }}>
              <Icon name="bell-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              alignSelf: 'center',
            }}>
            <Image source={home} style={styles.image1} />
          </View>
          <TouchableOpacity style={styles.textView} onPress={() => navigation.navigate('NewOrder')}>
            <Image source={Frameicon} style={styles.icon} />
            <Text style={styles.text1}>Book New Order</Text>
          </TouchableOpacity>
          <View style={styles.textView1}>
            <Text style={styles.text2}>Your Previous Orders</Text>
            <Text style={styles.text3}>3 on list</Text>
          </View>
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  image1: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    alignSelf: 'center',
    paddingHorizontal: '30%',
    backgroundColor: '#2A4084',
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 10,
    height: 50,
  },
  text1: {
    marginLeft: 5,
    fontSize: 18,
    color: '#435D9C',
  },
  card: { flexDirection: 'row', justifyContent: 'space-between', width: '95%' },
  textView: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 1,
    padding: 15,
    width: '84%',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  textView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginLeft: 3,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#2A4084',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  topBarTitle: {
    flex: 1,
    marginLeft: '80%',
    color: '#fff',
  },
  card2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginTop: 25,
    marginLeft: 3,
  },
  text2: { fontSize: 20, fontWeight: 'bold', marginLeft: '8%' },
  text3: { fontSize: 15, marginRight: '8%' },
  icon: { marginTop: 3, width: 20, height: 20, marginLeft: '25%' },
  num: { fontSize: 17, fontWeight: 'bold', color: '#000000' },
  row1: { flexDirection: 'row' },
  icon1: { width: 20, height: 20 },
});

export default homePage;
