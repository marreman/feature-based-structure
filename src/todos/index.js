import Todos from './components/todos';
import reducer from './reducer';
import * as types from './types';
import * as actions from './actions';

export default {
  name: "todos",
  component: Todos,
  reducer,
  types,
  actions
};
