
import {Text, Platform, View,TextInput, Button, Alert} from 'react-native'
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import Card from '@/components/card/Card';

export default function HomeScreen() {
  const [text, setText] = useState('');
  const router = useRouter();
  const goToExplore = () => {
    Alert.alert("clicked here")
    router.push('/explore');
  }
  return (
    <View>
      <Text style={{marginTop: Platform.OS == "android" ? 20: 50}}>Hello World</Text>
      <Text>{Platform.OS} - {text}</Text>
      
      <Link href={"/explore"}>Explore</Link>
      <Link href={"/profile"}>Profile</Link>

      <Button title="Go to Explore" onPress={goToExplore} />
      
       <Card title="hello card" />
      <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={val => setText(val)}
          value={text}
          />
    </View>  
  )
}
