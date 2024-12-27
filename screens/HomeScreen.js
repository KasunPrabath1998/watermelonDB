import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import database from '../database/database';
import TaskList from '../components/TaskList';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await database.get('tasks').query().fetch();
      setTasks(tasks);
    };

    fetchTasks();
  }, []);

  return (
    <View>
      <Text>Task List</Text>
      <TaskList tasks={tasks} />
    </View>
  );
};

export default HomeScreen;
