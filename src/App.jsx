import { useEffect } from "react";
import { Log } from "../logging_middleware/logger";
function App() {
  useEffect(() => {
    Log(
      "frontend",
      "info",
      "component",
      "Application started"
    );
  }, []);
return (
    <div>
      <h1>Logger Test</h1>
    </div>
  );
}
export default App;