
import { useState, useEffect } from "react";

interface ServerStatus {
  name: string;
  status: "Online" | "Offline" | "Degraded";
  lastUpdated: string;
  details: string;
}

const ServerStatusTable = () => {
  const [servers, setServers] = useState<ServerStatus[]>([
    {
      name: "Web Server 1",
      status: "Online",
      lastUpdated: "5/23/2025 9:15 AM",
      details: "Operating normally"
    },
    {
      name: "Database Server",
      status: "Degraded",
      lastUpdated: "5/23/2025 8:32 AM",
      details: "Experiencing slow response times"
    },
    {
      name: "Mail Server",
      status: "Online",
      lastUpdated: "5/23/2025 9:05 AM",
      details: "Operating normally"
    },
    {
      name: "Application Server",
      status: "Offline",
      lastUpdated: "5/23/2025 7:45 AM",
      details: "Maintenance in progress"
    },
    {
      name: "File Server",
      status: "Online",
      lastUpdated: "5/23/2025 9:10 AM",
      details: "Operating normally"
    }
  ]);

  // Update time periodically to make it seem active
  useEffect(() => {
    const timer = setInterval(() => {
      // Randomly update a server's last updated time
      if (Math.random() > 0.7) {
        const index = Math.floor(Math.random() * servers.length);
        const updatedServers = [...servers];
        const now = new Date();
        updatedServers[index] = {
          ...updatedServers[index],
          lastUpdated: `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')} ${now.getHours() >= 12 ? 'PM' : 'AM'}`
        };
        setServers(updatedServers);
      }
    }, 30000);

    return () => clearInterval(timer);
  }, [servers]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Online":
        return "bg-green-200 text-green-800";
      case "Offline":
        return "bg-red-200 text-red-800";
      case "Degraded":
        return "bg-yellow-200 text-yellow-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center" style={{ color: "#00008B" }}>SERVER STATUS MONITOR</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-2 border-gray-500">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-500 p-2 text-left">Server Name</th>
              <th className="border border-gray-500 p-2 text-left">Status</th>
              <th className="border border-gray-500 p-2 text-left">Last Updated</th>
              <th className="border border-gray-500 p-2 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {servers.map((server, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border border-gray-500 p-2">{server.name}</td>
                <td className="border border-gray-500 p-2">
                  <span className={`px-2 py-1 rounded ${getStatusColor(server.status)}`}>
                    {server.status}
                  </span>
                </td>
                <td className="border border-gray-500 p-2">{server.lastUpdated}</td>
                <td className="border border-gray-500 p-2">{server.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 text-sm">
        <p><b>Note:</b> If a server is showing as offline, please contact IT support at ext. 4545 or check the maintenance schedule.</p>
      </div>
    </div>
  );
};

export default ServerStatusTable;
