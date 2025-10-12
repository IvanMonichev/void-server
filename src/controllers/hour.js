export const getHour = (req, res) => {
  const now = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' })
  )
  const hour = String(now.getHours()).padStart(2, '0')
  res.send(hour)
}
