export default async function signinFetch(data) {
  try {
    return await fetch("http://localhost:3030/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (typeof res.message == "string") res.message = [res.message];
        if (res.statusCode == 400) {
          return [false, res.message];
        }
        return [true, res];
      })
      .catch((err) => [false, ["server error !"]]);
  } catch (error) {
    return [false, ["server error"]];
  }
}
