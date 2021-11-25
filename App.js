import React, {useState} from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, DialogInput} from 'react-native';
import Task from './components/Task'; 

export default function App() {

  // Set state variables that are used in the program
  const [task, setTask] = useState(); 
  const [taskItems, setTaskItems] = useState([]);
  const [timeItems, setTimeItems] = useState([]);

  // handles adding of a task to the task Items array and clears the input bar
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTimeItems([...timeItems, '']);
    setTask(null);
  } 

  // handles when the user clicks on a task
  const onTaskPress = (index) => {
    Alert.alert(
      'Options',
      'Please select an option',
      [
        {text: 'Delete', onPress: () => deleteItem(index)},
        {text: 'Cancel', onPress: () => console.log('User Canceled'), style: 'cancel'}

      ]
    )
  }

  // Deletes the item from the array of tasks
  const deleteItem = (index) =>{
    let itemsCopy = [...taskItems];
    let timeCopy = [...timeItems];
    itemsCopy.splice(index,1);
    timeCopy.splice(index,1);
    setTaskItems(itemsCopy);
    setTimeItems(timeCopy)
  }

  return (
    <View style={styles.container }>
      
      {/* Todays Tasks*/} 
      <View style = {styles.tasksWrapper}>
        <Text style  = {styles.sectionTitle}>Today's Tasks</Text>

        {/* Task List */} 
        <View style = {styles.items}>
          {/* This is where the tasks will go */}
          {
            taskItems.map((item, index) => {
              
              return (
                <TouchableOpacity key={index} onPress ={() => onTaskPress(index)}>
                  <Task text={item} time = {timeItems[index]}/>
                </TouchableOpacity>
              )
            })
          }
          {/* <Task text={'Task1'}/>
          <Task text={'Task2'}/> */}
        </View>
        
      </View>

      {/* Write a Task Section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style = {styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder= {'Write a task'} value = {task} onChangeText= {text => setTask(text)}/>

        <TouchableOpacity onPress = {() => handleAddTask()}>
          <View style={styles.addwrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },

  addwrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },

  addText: {},

  dateTime: {
    backgroundColor: '#F0F'
  }
});
