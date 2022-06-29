export const recordSms = (status: string) => {
  fetch("http://localhost:4000/smsLog", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ status }),
  })
}
