import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const KeyboardAvoidingView = props => (
  <View {...props} style={[styles.container, props.styles]} />
);

export default KeyboardAvoidingView;
