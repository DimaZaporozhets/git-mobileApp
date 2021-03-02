import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {Button} from '../components/Button';

export const Example = ({navigation}) => {
  const onBack = () => navigation.goBack();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 30,
      }}>
      <Button title="Back" onPress={onBack} />
      <View style={{alignItems: 'center'}}>
        <Text>Hello, Vova!</Text>
        <Text>One more time</Text>
        <Image
          source={{
            url:
              'data:image/jpeg;base64,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',
          }}
          style={{
            width: 200,
            height: 200,
          }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'blue',
          borderWidth: 1,
        }}
        defaultValue
      />
    </View>
  );
};
