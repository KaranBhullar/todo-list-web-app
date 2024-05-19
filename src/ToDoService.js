import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

class ToDoService {
  getLists() {
    return axios.get(API_URL + '/lists');
  }

  createList(name) {
    return axios.post(API_URL + '/lists', { name });
  }

  //... methods for handling tasks
}

export default new ToDoService();
