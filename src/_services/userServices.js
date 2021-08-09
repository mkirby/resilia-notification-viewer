const apiUrl = "http://localhost:3000/api/v1";

export const userServices = { changeUser };

function changeUser(id) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`${apiUrl}/users/${id}`, requestOptions)
    .then((response) => response.json())
    .then((user) => {
      // once the new user has been fetched, set local storage to that users stringified data
      localStorage.setItem("user", JSON.stringify(user));
      // return the user data to the userAction
      return user;
    });
}
