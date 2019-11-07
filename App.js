import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DrawerNavigator from './components/DrawerNavigator';




export default class App extends React.Component{
  

 render(){
  return (
    <View style={styles.view} >
      <DrawerNavigator />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,    
  },
  
})



