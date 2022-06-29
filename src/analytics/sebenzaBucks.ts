export const recordSebenzaBucks = (reason: string, amount: number) => {
  fetch("http://localhost:4000/sebenzaBucksLog", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ reason, amount }),
  })
}
