import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYW55YS4yM2IxNTMxMDI5QGFiZXMuYWMuaW4iLCJleHAiOjE3ODA5OTY1MDAsImlhdCI6MTc4MDk5NTYwMCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImY1NWVlYTEyLTQ5MTItNGYzYS04ZmIwLTA1ZWE3YjU0MDIxMCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im1hbnlhIG5pZ2FtIiwic3ViIjoiZGRlZjM3YzgtNWI2Ni00NmIzLWJjOWUtYTNlYzRhZGFlN2Y1In0sImVtYWlsIjoibWFueWEuMjNiMTUzMTAyOUBhYmVzLmFjLmluIiwibmFtZSI6Im1hbnlhIG5pZ2FtIiwicm9sbE5vIjoiMjMwMDMyMTUzMDExNSIsImFjY2Vzc0NvZGUiOiJjWHVxaHQiLCJjbGllbnRJRCI6ImRkZWYzN2M4LTViNjYtNDZiMy1iYzllLWEzZWM0YWRhZTdmNSIsImNsaWVudFNlY3JldCI6ImdQUnNZdXJ3U2FHaGpaZGcifQ.VGgwQ-RugtdRqZFQ-Tw5ZE6aC5UXu7dJ52XQttCXLig";

export const fetchNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      params: {
        page,
        limit,
        notification_type: type || undefined,
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  return response.data.notifications;
};