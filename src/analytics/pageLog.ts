const { API_URL } = process.env

export const recordPage = (
  pageViewed: string,
  pageFrom: string,
  search: string
) => {
  fetch(`${API_URL}/pageLog`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ pageViewed, pageFrom, search }),
  })
}
