
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AppBar extends React.Component {
  render() {
    return (
      <View style={styles.appBar}>
        <View>
          <Text style={styles.appBarText}>MEMOT</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    backgroundColor: '#555',
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 2,
  },
  appBarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppBar;
