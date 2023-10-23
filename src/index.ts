import express from 'express'
import { ShieldResponse } from './types'

const PORT = process.env.PORT || 3000

const app = express()
app.get('/', (_, res) => {
  res.redirect('https://nandenjin.github.io/tokisoba')
})

app.get('/v1/count', (req, res) => {
  const badgeResponse: ShieldResponse = {
    schemaVersion: 1,
    label: 'tokisoba',
    message: 'count',
    color: 'blue',
  }

  res.json(badgeResponse)
})

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})
