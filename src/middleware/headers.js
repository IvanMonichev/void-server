const headers = (req, res, next) => {
  res.setHeader('X-Author', '6ed6f825-864d-4b50-8d8f-ec3bf589ae03')
  res.setHeader("Content-Type", "text/plain; charset=UTF-8");
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
}

export default headers
