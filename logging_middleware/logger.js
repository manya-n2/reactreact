import axios from "axios";
const ACCESS_TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYW55YS4yM2IxNTMxMDI5QGFiZXMuYWMuaW4iLCJleHAiOjE3ODA5ODc1OTMsImlhdCI6MTc4MDk4NjY5MywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImNjYWIyMzIzLTI1OWEtNGIxMy04ZTgzLWY4MDZlYmFiZGJlOSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im1hbnlhIG5pZ2FtIiwic3ViIjoiZGRlZjM3YzgtNWI2Ni00NmIzLWJjOWUtYTNlYzRhZGFlN2Y1In0sImVtYWlsIjoibWFueWEuMjNiMTUzMTAyOUBhYmVzLmFjLmluIiwibmFtZSI6Im1hbnlhIG5pZ2FtIiwicm9sbE5vIjoiMjMwMDMyMTUzMDExNSIsImFjY2Vzc0NvZGUiOiJjWHVxaHQiLCJjbGllbnRJRCI6ImRkZWYzN2M4LTViNjYtNDZiMy1iYzllLWEzZWM0YWRhZTdmNSIsImNsaWVudFNlY3JldCI6ImdQUnNZdXJ3U2FHaGpaZGcifQ.tLkXGbazblwRbeK8Sa1txotNHmtRRaFmOYInYxXY0_w";
export const Log = async (
  stack,
  level,
  packageName,
  message
) => {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Log Created:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Logging Error:",
      error.response?.data || error.message
    );
  }
};