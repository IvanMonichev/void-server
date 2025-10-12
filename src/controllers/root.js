export const getRootPage = (req, res) => {
  res.text('index', { title: 'Void Server' })
}

export const getName = (req, res) => {
  res.send('ivan_monichev')
}

export const getHash = (req, res) => {
  res.send('6ed6f825-864d-4b50-8d8f-ec3bf589ae03')
}
