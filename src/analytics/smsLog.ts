const { GATSBY_API_URL } = process.env

export const recordSms = (status: string) => {
  fetch(`${GATSBY_API_URL}/smsLog`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ status }),
  })
}
