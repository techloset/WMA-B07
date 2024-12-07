import { View, Text, StyleSheet } from 'react-native'

export default function Card({title}:{title:string}) {
  return (
    <View>
      <Text style={styles.card}>Card - {title}</Text>
    </View>
  )
}

const styles = StyleSheet.create( {
    card: {
        backgroundColor: 'red'
    }
} )

