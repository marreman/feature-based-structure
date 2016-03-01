import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class Todos extends React.Component {
  render() {
    return (
      <ul onClick={this.props.add}>
        {this.props.todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    );
  }
}

export default connect(
  state => ({ todos: state.todos }),
  dispatch => ({ add: text => dispatch(actions.add("test2")) })
)(Todos);
