import { useEffect } from "react";
import { fetchData } from "./stage1/fetchData";
import { getTopNotifications } from "./stage1/priorityInbox";

function App() {
  useEffect(() => {
    async function runStage1() {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYW55YS4yM2IxNTMxMDI5QGFiZXMuYWMuaW4iLCJleHAiOjE3ODA5OTEwNjcsImlhdCI6MTc4MDk5MDE2NywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImNhNzA5YTNjLTQ2NWQtNDEwNS05NGM5LTZmODU4MWJmYTBjNyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im1hbnlhIG5pZ2FtIiwic3ViIjoiZGRlZjM3YzgtNWI2Ni00NmIzLWJjOWUtYTNlYzRhZGFlN2Y1In0sImVtYWlsIjoibWFueWEuMjNiMTUzMTAyOUBhYmVzLmFjLmluIiwibmFtZSI6Im1hbnlhIG5pZ2FtIiwicm9sbE5vIjoiMjMwMDMyMTUzMDExNSIsImFjY2Vzc0NvZGUiOiJjWHVxaHQiLCJjbGllbnRJRCI6ImRkZWYzN2M4LTViNjYtNDZiMy1iYzllLWEzZWM0YWRhZTdmNSIsImNsaWVudFNlY3JldCI6ImdQUnNZdXJ3U2FHaGpaZGcifQ.Kib_1JTNnE_Pp41F_oh8UYUOA57TjJTtnMUzZ0YVxlY";

        const notifications = await fetchData(token);
        console.log("Notifications:", notifications);

        const top10 = getTopNotifications(
          notifications,
          10
        );

        console.log("TOP 10 NOTIFICATIONS");
        console.table(top10);
      } catch (error) {
        console.error(error);
      }
    }

    runStage1();
  }, []);

  return (
    <div>
      <h1>Stage 1 Running</h1>
    </div>
  );
}

export default App;