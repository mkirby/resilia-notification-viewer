import React from "react";
import { connect } from "react-redux";
import { userActions } from "../_actions/userActions";

class UserSelector extends React.Component {
  state = {
    user: this.props.currentUser ? this.props.currentUser : {},
    users: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((users) => {
        if (Object.keys(this.state.user).length === 0) {
          this.setState({ users: users, user: users[0] });
        } else {
          this.setState({ users });
        }
      });
  }

  renderUserOptions = (users) => {
    if (users.length === 0) {
      return <option>Loading</option>;
    }
    return users.map((user) => (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ));
  };

  handleUserChange = (e) => {
    let newId = parseInt(e.target.value);
    let newUser = this.state.users.find((user) => user.id === newId);
    this.setState({ user: newUser }, () => {
      this.props.changeUser(newId);
    });
  };

  render() {
    return (
      <select value={this.state.user.id} onChange={this.handleUserChange}>
        {this.renderUserOptions(this.state.users)}
      </select>
    );
  }
}

function mapStateToProps(state) {
  const currentUser = state.user;
  return { currentUser };
}

const actionCreators = {
  changeUser: userActions.changeUser,
};

export default connect(mapStateToProps, actionCreators)(UserSelector);
