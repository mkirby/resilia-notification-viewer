import React from "react";
import { connect } from "react-redux";

function renderNotifications(userNotifications) {
  if (userNotifications.length === 0) {
    return (
      <div>
        <h3>No Notifications</h3>
      </div>
    );
  }
  if (!userNotifications) {
    return (
      <div>
        <h4>Please Select A User</h4>
      </div>
    );
  }
  return userNotifications.map((n) => (
    <>
      <div>
        <h3>{n.subject}</h3>
        <p>{n.message}</p>
      </div>
      <hr />
    </>
  ));
}

function NotificationLog(props) {
  return (
    <div>
      {Object.keys(props.currentUser).length !== 0
        ? renderNotifications(props.currentUser.notifications)
        : renderNotifications(false)}
    </div>
  );
}

function mapStateToProps(state) {
  const currentUser = state.user;
  return { currentUser };
}

export default connect(mapStateToProps)(NotificationLog);
