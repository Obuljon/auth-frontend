export default async function getUserToken() {
  const token = window.localStorage.getItem("access_token") || "";
  const headers = new Headers();
  headers.append("access_token", token);
  headers.append("Content-Type", "application/json");
  return fetch("http://localhost:3030/auth/authtest", {
    method: "GET",
    headers,
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.statusCode == 401) return false;
      return res;
    })
    .catch((err) => null);
}
