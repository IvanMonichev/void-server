export const getSample = (req, res) => {
  const code = `function task(x) {return x * (this ** 2);}`.trim()
  res.send(code)
}
