const { API_URL } = process.env

export const recordSurvey = (questionID: string, answer: string) => {
  fetch(`${API_URL}/surveysLog`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ questionID, answer }),
  })
}
