const { GATSBY_API_URL } = process.env

export const recordLogin = (
  auto: boolean,
  isNewUser: boolean,
  isCaptiveLogin: boolean
) => {
  fetch(`${GATSBY_API_URL}/loginLog`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ auto, isNewUser, isCaptiveLogin }),
  })
}
