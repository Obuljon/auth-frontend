export default function signupFetch(data) {
  return fetch("http://localhost:3030/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.statusCode == 400) {
        return [false, res.message];
      }
      return [true, res.message];
    })
    .catch((err) => [false, ["server error !"]]);
}
