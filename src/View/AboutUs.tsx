import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {about} from '../Constants/appImage';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const AboutUs = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
       <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack('Profile')}>
          <Icon1 name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>AboutUs</Text>
      </View>
      <View style={{alignSelf: 'center', marginTop: '10%'}}>
        <Image source={about} style={styles.imageColum} />
      </View>
      <View style={{margin: 20}}>
        <Text style={{fontSize: 19, fontWeight: 'bold'}}>
          What is Lorem Ipsum?
        </Text>
        <Text style={{marginLeft: 4, marginTop: 4}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text style={{fontSize: 19, fontWeight: 'bold', marginTop:10}}>
          Why does we use it?
        </Text>
        <Text style={{marginLeft: 4, marginTop: 4}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageColum: {width: 250, height: 250},
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
});

export default AboutUs;
