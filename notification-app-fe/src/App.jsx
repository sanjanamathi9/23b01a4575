import { useEffect, useState } from "react";
import { fetchNotifications } from "./api/notifications";

export default function App() {
  const [notifications, setNotifications] = useState([]);
  const [status, setStatus] = useState("Loading...");

  const loadData = async () => {
    try {
      const notificationsData = await fetchNotifications();

      if (notificationsData && notificationsData.length > 0) {
        // Priority order: High -> Medium -> Low
        const priorityOrder = {
          High: 1,
          Medium: 2,
          Low: 3,
        };

        const sortedNotifications = [...notificationsData].sort(
          (a, b) =>
            (priorityOrder[a.Priority] || 999) -
            (priorityOrder[b.Priority] || 999)
        );

        setNotifications(sortedNotifications);
        setStatus("");
      } else {
        setStatus("No notifications available.");
      }
    } catch (error) {
      setStatus("Unable to fetch notifications.");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notifications App</h1>

      {status && <p>{status}</p>}

      {notifications.map(({ ID, Type, Message, Timestamp, Priority }) => (
        <section
          key={ID}
          style={{
            border: "1px solid #ddd",
            marginBottom: "12px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <strong>{Type}</strong>
          <p>{Message}</p>
          <p>
            <strong>Priority:</strong> {Priority}
          </p>
          <small>{Timestamp}</small>
        </section>
      ))}
    </div>
  );
}