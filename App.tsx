import React from "react";

import {
View,
Text,
StyleSheet,
useColorScheme
} from "react-native"

function App(){
  const isDarkMode = useColorScheme() === 'light'
  return(

    
    <View style={styles.container}>
  <Text style={isDarkMode ? styles.DarkText : styles.WhiteText}>Hello World!</Text>
    </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  WhiteText: {
    color:"#FFFFFF"
  },
  DarkText: {
    color:"#000000"
  }
})

export default App;