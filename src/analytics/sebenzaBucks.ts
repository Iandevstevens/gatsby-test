const { GATSBY_API_URL } = process.env

export const recordSebenzaBucks = (reason: string, amount: number) => {
  fetch(`${GATSBY_API_URL}/sebenzaBucksLog`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ reason, amount }),
  })
}
