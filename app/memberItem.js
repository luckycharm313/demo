import React from 'react';
import styles from './styles';

import { View, Image, Dimensions, TouchableOpacity} from 'react-native';
var delIcon = require('./assets/delete-icon.png');
const memberItem = ({url, width, height, onHandleDelete}) => {
  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: fullWidth / 3 - 30,
      height: 150,
    },
  ];

  return (
    <View style={styles.containerCardItem}>
      <Image source={{uri: url}} style={imageStyle} />
      <TouchableOpacity style={styles.deleteStyle} onPress={onHandleDelete}>
        <Image source={delIcon} style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default memberItem;
