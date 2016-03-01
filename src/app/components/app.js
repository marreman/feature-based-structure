import React from "react";

import todos from "../../todos";

class App extends React.Component {
  render() {
    return (
      <div>
        <todos.component />
      </div>
    );
  }
}

export default App;
