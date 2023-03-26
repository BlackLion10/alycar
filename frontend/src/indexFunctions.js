import axios from 'axios';

var body = {
    firstName: 'testName',
    lastName: 'testLastName'
};

axios.post('http://localhost:3001/', body)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });