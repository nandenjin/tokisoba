import express from 'express'
import { ShieldResponse } from './types'

const PORT = process.env.PORT || 3000

const DAY_MS = 1000 * 60 * 60 * 24,
  WEEK_MS = DAY_MS * 7,
  MONTH_MS = DAY_MS * 30,
  YEAR_MS = DAY_MS * 365

const app = express()
app.get('/', (_, res) => {
  res.redirect('https://nandenjin.github.io/tokisoba')
})

/**
 * Create error response body
 * @param message
 * @returns
 */
const createError = (message: string): ShieldResponse => ({
  schemaVersion: 1,
  label: 'error',
  message,
  isError: true,
  color: 'gray',
})

/**
 * Parse string as date expression
 * @param date
 * @returns parsed `Date` or null if invalid
 */
const parseDate = (date: string): Date | null => {
  const parsed = new Date(date)
  if (isNaN(parsed.getTime())) {
    return null
  }
  return parsed
}

/**
 * Decide duration unit
 * @param duration in Unix time
 * @returns
 */
const getDurationUnit = (
  duration: number
): 'day' | 'week' | 'month' | 'year' => {
  if (duration < WEEK_MS) {
    return 'day'
  } else if (duration < MONTH_MS) {
    return 'week'
  } else if (duration < YEAR_MS) {
    return 'month'
  } else {
    return 'year'
  }
}

const getDurationString = (duration: number): string => {
  const unit = getDurationUnit(duration)
  switch (unit) {
    case 'day':
      return `${Math.floor(duration / DAY_MS)}d`
    case 'week':
      return `${Math.floor(duration / WEEK_MS)}w`
    case 'month':
      return `${Math.floor(duration / MONTH_MS)}m`
    case 'year':
      return `${Math.floor(duration / YEAR_MS)}y`
  }
}

const getColorByDuration = (duration: number): string => {
  if (duration <= 0) {
    return 'red'
  } else if (duration < DAY_MS * 3) {
    return 'orange'
  } else if (duration < WEEK_MS) {
    return 'yellow'
  } else if (duration < MONTH_MS) {
    return 'green'
  } else {
    return 'blue'
  }
}

app.get('/v1/count', (req, res) => {
  const { target } = req.query

  if (target === undefined) {
    res.status(400).json(createError('target is required'))
    return
  }

  const parsedTarget = parseDate(target.toString())
  if (parsedTarget === null) {
    res.status(400).json(createError('invalid target'))
    return
  }

  const now = new Date()
  const diff = parsedTarget.getTime() - now.getTime()

  const badgeResponse: ShieldResponse = {
    schemaVersion: 1,
    label: 'remains',
    message: getDurationString(diff),
    color: getColorByDuration(diff),
  }

  res.json(badgeResponse)
})

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})
