import React, { useEffect, useState } from "react";

function Dashboard() {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("jwtToken"));
  }, []);

  return (
    <div>
      <iframe
        title="dashboards"
        width={"100%"}
        style={{ height: "100vh" }}
        src={`https://dashboard.linkgraph.io/?jwtToken=${token}`}
      >
        Dashboard
      </iframe>
    </div>
  );
}

export default Dashboard;
