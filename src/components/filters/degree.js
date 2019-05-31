export default function (num) {
  const n = Number(num) - 273.15
  return `${n.toFixed(1)} °C`
}
