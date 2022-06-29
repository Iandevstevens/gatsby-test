export const recordAdWatched = (adID: string) => {
  const pageViewed = window.location.pathname
  fetch("http://localhost:4000/adWatchedLog", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ adID, pageViewed }),
  })
}
