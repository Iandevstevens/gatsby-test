const { GATSBY_API_URL } = process.env

export const recordAdWatched = (adID: string) => {
  const pageClicked = window.location.pathname
  fetch(`${GATSBY_API_URL}/adClickedLog`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ adID, pageClicked }),
  })
}
