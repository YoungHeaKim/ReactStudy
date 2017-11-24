import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Button( { iconName, onPress } ) {
  return(
    <TouchableOpacity onPressOut={onPress} >
      <FontAwesome name = {iconName} size = {80} color = "white" />
    </TouchableOpacity>
  )
}

Button.PropTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Button;