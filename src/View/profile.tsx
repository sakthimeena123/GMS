import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  about,
  Book,
  edit,
  Ellipse,
  flat,
  help,
  Icons,
  Privacy,
} from '../Constants/appImage';

const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: '10%',
          backgroundColor: '#fff',
          margin: 20,
          width: '90%',
          borderRadius: 10,
        }}>
        <Image source={Ellipse} style={styles.image} />
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>Suresh Kumar</Text>
          <Text>+91 7953845925</Text>
        </View>
        <Image source={edit} style={styles.image1} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          backgroundColor: '#fff',
          margin: 20,
          width: '90%',
          borderRadius: 10,
          padding: 5,
          justifyContent: 'space-between',
        }}>
        <Image source={about} style={styles.imageColum} />
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20}}>About Us</Text>
        </View>
        <Image source={Icons} style={styles.image1} />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 10,
          padding: 10,
        }}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image source={Book} style={{width: 30, height: 30}} />
          <Text
            style={{
              marginLeft: 10,
              marginTop: 5,
              fontSize: 16,
              marginBottom: 20,
            }}>
            Terms & Conditions
          </Text>
        </View>
        <View style={styles.divider} />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Image source={Privacy} style={{width: 30, height: 30}} />
          <Text style={{marginLeft: 10, fontSize: 16, marginBottom: 20}}>
            Privacy Policy
          </Text>
        </View>
        <View style={styles.divider} />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Image source={help} style={{width: 30, height: 30}} />
          <Text style={{marginLeft: 10, marginTop: 3, fontSize: 16}}>
            Help & Support
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginTop: 10,
          backgroundColor: '#fff',
          margin: 20,
          width: '90%',
          borderRadius: 10,
          paddingVertical: 25,
        }}>
        <Image source={flat} style={styles.imageColum1} />

        <Text style={{fontSize: 20, marginLeft: 10}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: 80, height: 80},
  image1: {width: 30, height: 30, marginLeft: '35%', marginTop: 13},
  imageColum: {width: 50, height: 50},
  imageColum1: {width: 30, height: 30, marginLeft: 15},
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
    width: '90%',
    alignSelf: 'center',
  },
});

export default Profile;
