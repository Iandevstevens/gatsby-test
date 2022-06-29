export const recordSurvey = (questionID: string, answer: string) => {
  fetch("http://localhost:4000/surveysLog", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ questionID, answer }),
  })
}
