export function formatTime(ms) {
  const seconds = Number(Math.floor(ms / 1000).toFixed(0))
  const minutes = Number(Math.floor(seconds / 60).toFixed(0))
  const hours = Number(Math.floor(minutes / 60).toFixed(0))
  const days = Number(Math.floor(hours / 24).toFixed(0))

  return { seconds, minutes, hours, days }
}