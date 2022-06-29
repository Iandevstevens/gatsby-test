const { GATSBY_API_URL } = process.env

export const recordSurvey = (questionID: string, answer: string) => {
  fetch(`${GATSBY_API_URL}/surveysLog`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify({ questionID, answer }),
  })
}
