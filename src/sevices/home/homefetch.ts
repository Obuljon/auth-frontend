export default async function homeFetch() {
  const token = localStorage.getItem("access_token") || "";
  const headers = new Headers();
  headers.append("access_token", token);
  headers.append("Content-Type", "application/json");
  return await fetch("http://localhost:3030/auth/home", {
    method: "get",
    headers,
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.statusCode == 401) {
        window.localStorage.clear();
        return [false, [res.message]];
      }
      return [true, res];
    })
    .catch((err) => [false, ["server error !"]]);
}
