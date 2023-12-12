import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Button, View, FlatList } from 'react-native';
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoal] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoal((currentCoursegoal) => [
      ...currentCoursegoal,
      { text: enteredGoalText, id: Math.random().toString }]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoal(currentCoursegoal => {
      return currentCoursegoal.filter((goal) => goal.id !== id);
    });
  }

  return (

    <StatusBar style='light'>
      <View style={styles.container}>
        <Button title="Add new Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler} />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceHorizontal={false}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDelete={deleteGoalHandler} />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }} />
        </View>

      </View>
    </StatusBar>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 3,
  },

});
