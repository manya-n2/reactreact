import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notificationApi";
import { getTopNotifications } from "../stage1/priorityInbox";
import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";

export default function PriorityInbox() {
  const [notifications, setNotifications] =
    useState([]);

  const [type, setType] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchNotifications(
          1,
          50,
          type
        );

        const top10 =
          getTopNotifications(data, 10);

        setNotifications(top10);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, [type]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Priority Inbox</h1>

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
    </div>
  );
}