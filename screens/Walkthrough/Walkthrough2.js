import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {constants, SIZES, images} from '../../constants';
import {useDynamicAnimation, MotiImage} from 'moti';

const Walkthrough2 = ({animte}) => {
  const motiImage1 = useDynamicAnimation(() => ({
    top: '30%',
    left: '25%',
  }));
  const motiImage2 = useDynamicAnimation(() => ({
    top: '45%',
    left: '15%',
  }));
  const motiImage3 = useDynamicAnimation(() => ({
    top: '58%',
    left: '25%',
  }));
  const motiImage4 = useDynamicAnimation(() => ({
    top: '62%',
    left: '40%',
  }));
  const motiImage5 = useDynamicAnimation(() => ({
    top: '27%',
    left: '50%',
  }));
  return (
    <View>
      <Text>Walkthrough2</Text>
    </View>
  );
};

export default Walkthrough2;

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: 86,
    height: 112,
    zIndex: 0,
    borderRadius: SIZES.radius,
  },
});
