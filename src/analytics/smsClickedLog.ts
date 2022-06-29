export const recordSmsClicked = () => {
  fetch("http://localhost:4000/smsClicked", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({}),
  })
}
