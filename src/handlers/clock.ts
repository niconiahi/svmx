import { eventHandler } from "vinxi/http";

export default eventHandler(async (event) => {
  const date = new Date()
  return `${date.toISOString()}-${event.method}`
});
