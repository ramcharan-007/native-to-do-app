import { View, TextInput, Modal, Button, Image } from "react-native";
import { StyleSheet } from "react-native-web";
import { useState } from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHanler(enteredText) {
        seetEnteredGoalText(enteredText)
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                 
                <TextInput
                    style={styles.textInput}
                    onChangeText={goalInputHanler}
                    placeholder='Enter your Email'
                    value={enteredGoalText} />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Login'
                            onPress={addGoalHandler}
                            color="#b180f0" />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            onPress={props.onCancel}
                            color="#f3282" />
                    </View>
                </View>

            </View>
        </Modal>

    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
        flex: 1,

    },
    textInput: {
        borderWidth: 2,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color: 'black',
        width: '100%',
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',

    },
    button: {
        width: 100,
        marginHorizontal: 8,

    }
});