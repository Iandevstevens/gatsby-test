export const recordAdWatched = (adID: string) => {
  const pageClicked = window.location.pathname
  fetch("http://localhost:4000/adClickedLog", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ adID, pageClicked }),
  })
}
