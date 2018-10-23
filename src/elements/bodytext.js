import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#999',
    backgroundColor: '#f9f9f9',
  },
});

export default BodyText;
