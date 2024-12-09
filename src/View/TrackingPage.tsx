import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {cash, check, Group, round} from '../Constants/appImage';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const Track = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
       <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack('loginPage')}>
          <Icon1 name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>TrackOrder</Text>
      </View>
      <View style={styles.viewtext}>
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
            <Text style={{marginLeft: 4, fontSize: 18, fontWeight: 'bold'}}>
              GMS392OD90I0
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginLeft: 4, fontSize: 18, fontWeight: 'bold'}}>
              ₹1,233
            </Text>
          </View>
        </View>

        <View style={styles.divider} />
        <View style={styles.card}>
          <View style={styles.row1}>
            <Text style={{marginLeft: 5}}>Contact Person</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginLeft: 3}}>Contact Number</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.row1}>
            <Text style={{marginLeft: 4, fontSize: 18, fontWeight: 'bold'}}>
              Muthu Kumar
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginLeft: 4, fontSize: 18, fontWeight: 'bold'}}>
              +91 7539039402
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.viewcontainer}>
        <View style={{width: '90%'}}>
          <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 15}}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>Chennai</Text>
            <View
              style={{
                width: '13%',
                alignSelf: 'center',
                backgroundColor: '#FF9800',
                borderRadius: 10,
                padding: 1,
                marginLeft: 5,
              }}>
              <Text style={{fontSize: 11, color: '#fff', textAlign: 'center'}}>
                Pickup
              </Text>
            </View>
          </View>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 7,
              marginBottom: 15,
              fontSize: 15,
            }}>
            Sunday, Mar 02
          </Text>
          <View style={styles.divider1} />
          <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 15}}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>Pondicherry</Text>
          </View>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 7,
              marginBottom: 15,
              fontSize: 15,
            }}>
            Sunday, Mar 02
          </Text>
          <View style={styles.divider1} />
          <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 15}}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>Chidambaram</Text>
          </View>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 7,
              marginBottom: 15,
              fontSize: 15,
            }}>
            Monday, Mar 03
          </Text>
          <View style={styles.divider1} />
          <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 15}}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>Nagapattinam</Text>
            <View
              style={{
                width: '13%',
                alignSelf: 'center',
                backgroundColor: '#4CAF50',
                borderRadius: 10,
                padding: 1,
                marginLeft: 5,
              }}>
              <Text style={{fontSize: 11, color: '#fff', textAlign: 'center'}}>
                Drop
              </Text>
            </View>
          </View>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 7,
              marginBottom: 15,
              fontSize: 15,
            }}>
            Tuesday, Mar 04
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <Image source={check} style={{width: 25, height: 25}} />
          <View style={styles.divider2} />

          <Image source={check} style={{width: 25, height: 25}} />
          <View style={styles.divider2} />

          <Image source={round} style={{width: 25, height: 25}} />
          <View style={styles.divider2} />

          <Image source={round} style={{width: 25, height: 25}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginTop: 10,
    marginLeft: 5,
  },
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
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
    width: '90%',
    alignSelf: 'center',
  },
  viewcontainer: {
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
  },
  row1: {flexDirection: 'row'},
  icon1: {width: 20, height: 20},
  viewtext: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 5,
    borderRadius: 10,
  },
  divider1: {
    height: 2,
    backgroundColor: '#DDF0F4',
    marginVertical: 7,
    width: '80%',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  divider2: {
    height: '16%',
    backgroundColor: '#000',
    // alignSelf: 'flex-start',
    marginLeft: 11,

    width: 2,
  },
});

export default Track;
