import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native';

const Cat = (props) => {

    const [isHungry, setIsHungry] = useState(true);
    const [name, setName] = useState('');

    return (
    <View>
        <Text>Hello, I am your cat! I am {isHungry ? 'hungry' : 'full'}. </Text>
        <Text>{name ? 'My name is ' + name: 'I do not have a name :('} </Text>
        <Button
            onPress={() => {
                setIsHungry(!isHungry);
            }}
   
            title={isHungry ? 'Pour me some milk, please' : 'Thank you!'}
        />
        <TextInput
            placeholder='Enter my name!'
            defaultValue={name}
            onSubmitEditing={name => setName(name.nativeEvent.text)}
        />
    </View>)
}

export default Cat;