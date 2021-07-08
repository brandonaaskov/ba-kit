const isSingleDigit = (value) => {
  if (!isNumber(value)) { return false }
  return value >= 0 && value < 10
}

const formatVideoTime = (value) => {
  let hours = Math.floor(value / 3600)
  let minutes = Math.floor(value % 3600 / 60)
  let seconds = Math.floor(value % 3600 % 60)

  hours = isSingleDigit(hours) ? `0${hours}` : hours
  minutes = isSingleDigit(minutes) ? `0${minutes}` : minutes
  seconds = isSingleDigit(seconds) ? `0${seconds}` : seconds

  return `${hours}:${minutes}:${seconds}`
}

export {
  formatVideoTime,
  isSingleDigit
}
