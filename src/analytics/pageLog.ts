export const recordPage = (
  pageViewed: string,
  pageFrom: string,
  search: string
) => {
  fetch("http://localhost:4000/pageLog", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ pageViewed, pageFrom, search }),
  })
}
