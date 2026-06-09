import { fetchNotifications } from "./fetchData.js";
import { getTopNotifications } from "./priorityInbox.js";
import { Log } from "../../logging_middleware/logger.js";
const token = "YOUR_ACCESS_TOKEN";
async function run() {
  try {
    await Log(
      "frontend",
      "info",
      "api",
      "Fetching notifications"
    );
const notifications =
      await fetchNotifications(token);
const top10 =
      getTopNotifications(notifications);
console.log(top10);
await Log(
      "frontend",
      "info",
      "api",
      "Top notifications generated"
    );
  } catch (error) {
    await Log(
      "frontend",
      "error",
      "api",
      error.message
    );
  }
}
run();