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
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
}
