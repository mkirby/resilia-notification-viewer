import React from "react";
import "./App.css";
import NotificationLog from "./Components/NotificationLog";
import UserSelector from "./Components/UserSelector";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Resilia Notification Viewer</h1>
          <UserSelector />
          <br />
          <NotificationLog />
        </header>
      </div>
    );
  }
}

export default App;
