import {View, Text, Image, StyleSheet} from 'react-native';
import {about} from '../Constants/appImage';

const AboutUs = () => {
  return (
    <View>
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
});

export default AboutUs;
