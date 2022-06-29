export const recordLogin = (
  auto: boolean,
  isNewUser: boolean,
  isCaptiveLogin: boolean
) => {
  fetch("http://localhost:4000/loginLog", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ auto, isNewUser, isCaptiveLogin }),
  })
}
