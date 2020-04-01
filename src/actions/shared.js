import API from 'goals-todos-api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  };
};

export function handleInitialData() {
  return (dispatch) => {
    Promise.all([
      API.fetchTodos(),
      API.fetchGoals()
    ]).then(([todos, goals]) => {
      console.group('Todos: ');
      console.log(todos);
      console.groupEnd();

      console.group('Goals: ');
      console.log(goals);
      console.groupEnd();

      dispatch(receiveData(todos, goals));
    });
  };
};