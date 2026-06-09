import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notificationApi";
import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";

export default function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchNotifications(
          page,
          10,
          type
        );

        setNotifications(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, [page, type]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Notifications</h1>

      <FilterBar
        type={type}
        setType={setType}
      />

      <br />

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          notification={item}
        />
      ))}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() =>
            setPage((p) => Math.max(1, p - 1))
          }
        >
          Previous
        </button>

        <span>Page {page}</span>

        <button
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}