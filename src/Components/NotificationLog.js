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
  return <div>{renderNotifications(props.currentUser.notifications)}</div>;
}

function mapStateToProps(state) {
  const currentUser = state.user;
  return { currentUser };
}

export default connect(mapStateToProps)(NotificationLog);
