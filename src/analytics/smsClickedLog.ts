const { API_URL } = process.env

export const recordSmsClicked = () => {
  fetch(`${API_URL}/smsClicked`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({}),
  })
}
