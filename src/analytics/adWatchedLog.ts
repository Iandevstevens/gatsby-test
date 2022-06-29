const { GATSBY_API_URL } = process.env

export const recordAdWatched = (adID: string) => {
  const pageViewed = window.location.pathname
  fetch(`${GATSBY_API_URL}/adWatchedLog`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ adID, pageViewed }),
  })
}
