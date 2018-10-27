import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class RoundBtn extends React.Component {
  render() {
    return (
      <View style={styles.RoundBtn}>
        <Text style={styles.RoundBtnText}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  RoundBtn: {
    position: 'absolute',
    right: 34,
    bottom: 34,
    width: 50,
    height: 50,
    backgroundColor: '#e0537e',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RoundBtnText: {
    fontSize: 34,
    color: '#fff',
    lineHeight: 34,
  },
});

export default RoundBtn;
