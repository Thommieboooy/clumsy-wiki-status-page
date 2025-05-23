
import WikiContent from "../components/WikiContent";
import ServerStatusTable from "../components/ServerStatusTable";

const ServerStatus = () => {
  return (
    <WikiContent>
      <div className="pb-4 mb-6 border-b border-gray-300">
        <h2 className="text-2xl font-bold mb-2" style={{ color: "#00008B" }}>Server Status Dashboard</h2>
        <p>This page shows the current status of our company servers and services. Refresh the page to get the latest status updates.</p>
      </div>
      
      <div className="mb-6">
        <ServerStatusTable />
      </div>
      
      <div className="mt-8 space-y-6">
        <div className="border-t border-b border-gray-300 py-4">
          <h3 className="text-lg font-bold mb-2">Planned Maintenance:</h3>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 p-2 text-left">Date</th>
                <th className="border border-gray-400 p-2 text-left">Server</th>
                <th className="border border-gray-400 p-2 text-left">Duration</th>
                <th className="border border-gray-400 p-2 text-left">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">May 25, 2025</td>
                <td className="border border-gray-400 p-2">Mail Server</td>
                <td className="border border-gray-400 p-2">2 hours (10PM-12AM)</td>
                <td className="border border-gray-400 p-2">Email service will be unavailable</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-400 p-2">May 27, 2025</td>
                <td className="border border-gray-400 p-2">Web Server 1</td>
                <td className="border border-gray-400 p-2">1 hour (6AM-7AM)</td>
                <td className="border border-gray-400 p-2">Website may be slow</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-blue-50 p-4 border border-blue-200">
          <h3 className="text-lg font-bold mb-2">Status Legend:</h3>
          <ul className="space-y-2">
            <li><span className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded">Online</span> - Server is functioning normally</li>
            <li><span className="inline-block bg-yellow-200 text-yellow-800 px-2 py-1 rounded">Degraded</span> - Server is experiencing issues but still operational</li>
            <li><span className="inline-block bg-red-200 text-red-800 px-2 py-1 rounded">Offline</span> - Server is not responding or has been taken offline</li>
          </ul>
        </div>
        
        <div className="text-center text-sm">
          <p>If you need immediate assistance with server issues, please call the IT Helpdesk at ext. 4545</p>
          <p className="mt-2">Last full system check: <b>May 22, 2025</b></p>
        </div>
      </div>
    </WikiContent>
  );
};

export default ServerStatus;
