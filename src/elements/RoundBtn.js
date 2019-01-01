import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Font } from 'expo';
import fontAwesome from '../../assets/fonts/fa-regular-400.ttf';

class RoundBtn extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color } = this.props;

    let bgColor = '#e0537e';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#e0537e';
    }

    return (
      <View style={[styles.RoundBtn, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.RoundBtnText, { color: textColor }]}>
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
