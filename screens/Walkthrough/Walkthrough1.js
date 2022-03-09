import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {constants, SIZES} from '../../constants';
import {FlatList} from 'react-native-gesture-handler';

const ITEM_WIDTH = 120;
const Walkthrough1 = () => {
  // Row 1
  const [row1Images, setRow1Images] = useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_01_images,
  ]);
  const [currentPosition, setCurrentPosition] = useState(0);
  // Row 2
  const [row2Images, setRow2Images] = useState([
    ...constants.walkthrough_01_02_images,
    ...constants.walkthrough_01_02_images,
  ]);
  const [row2CurrentPosition, setRow2CurrentPosition] = useState(0);

  // refs
  const row1FlatListRef = useRef();
  const row2FlatListRef = useRef();

  useEffect(() => {
    let positionTimer;

    const timer = () => {
      positionTimer = setTimeout(() => {
        //   Increment position with each interval

        // Slider 1
        setCurrentPosition(prevPosition => {
          const position = Number(prevPosition) + 1;

          row1FlatListRef?.current?.scrollToOffset({
            offset: position,
            animated: false,
          });
          const maxOffset =
            constants.walkthrough_01_01_images.length * ITEM_WIDTH;

          if (prevPosition > maxOffset) {
            const offset = prevPosition - maxOffset;
            row1FlatListRef?.current?.scrollToOffset({offset, animated: false});

            return offset;
          } else {
            return position;
          }
        });

        // Slider 2

        timer();
      }, 32);
    };

    timer();

    return () => {
      clearTimeout(positionTimer);
    };
  }, []);

  return (
    <View>
      {/* Slider 1 */}
      <FlatList
        ref={row1FlatListRef}
        data={row1Images}
        horizontal
        showsHorizontalScrollIndicator={false}
        listKey="Slider1"
        keyExtractor={(_, index) => `Slider1-${index}`}
        scrollEnabled={false}
        decelerationRate="fast"
        renderItem={({item, inex}) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={item} style={{width: 110, height: 110}} />
            </View>
          );
        }}
      />

      {/* Slider 2 */}
      <FlatList
        ref={row2FlatListRef}
        data={row2Images}
        horizontal
        showsHorizontalScrollIndicator={false}
        listKey="Slider2"
        scrollEnabled={false}
        keyExtractor={(_, index) => `Slider2-${index}`}
        decelerationRate="fast"
        renderItem={({item, inex}) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                marginTop: SIZES.padding,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={item} style={{width: 110, height: 110}} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Walkthrough1;

const styles = StyleSheet.create({});
