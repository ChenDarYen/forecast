export default function (date) {
  date = new Date(date * 1000)
  const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours())
  const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
  return `${h}:${m}`
}
