
import WikiContent from "../components/WikiContent";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <WikiContent>
      <h2 className="text-2xl font-bold mb-4" style={{ color: "#00008B" }}>Welcome to the Company Wiki</h2>
      
      <div className="bg-blue-50 border-2 border-blue-200 p-4 mb-4">
        <h3 className="text-lg font-bold mb-2">IMPORTANT ANNOUNCEMENTS:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Office will close early (4PM) this Friday for building maintenance</li>
          <li>New phone system training - Tuesday at 2PM in Conference Room B</li>
          <li>Quarterly reports due by end of month - <span className="text-red-600 font-bold">NO EXTENSIONS</span></li>
        </ul>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border-2 border-gray-300 p-4">
          <h3 className="text-lg font-bold mb-2 text-center bg-gray-200 p-1">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-600 underline">Employee Directory</a></li>
            <li><a href="#" className="text-blue-600 underline">Department Phone List</a></li>
            <li><a href="#" className="text-blue-600 underline">Meeting Room Schedule</a></li>
            <li><a href="#" className="text-blue-600 underline">Holiday Calendar</a></li>
            <li><Link to="/status" className="text-blue-600 underline">Server Status Page</Link></li>
          </ul>
        </div>
        
        <div className="border-2 border-gray-300 p-4">
          <h3 className="text-lg font-bold mb-2 text-center bg-gray-200 p-1">Useful Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-600 underline">Company Policy Manual</a></li>
            <li><a href="#" className="text-blue-600 underline">Expense Claim Forms</a></li>
            <li><a href="#" className="text-blue-600 underline">IT Support Ticket System</a></li>
            <li><a href="#" className="text-blue-600 underline">Building Evacuation Plan</a></li>
            <li><Link to="/help" className="text-blue-600 underline">Wiki Help Guide</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 border border-gray-300">
        <h3 className="text-lg font-bold mb-2">Recent Updates:</h3>
        <div className="space-y-2">
          <div className="flex justify-between border-b border-gray-300 pb-1">
            <span>Server Status Page</span>
            <span className="text-sm text-gray-500">May 23, 2025</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 pb-1">
            <span>New Employee Training Guide</span>
            <span className="text-sm text-gray-500">May 20, 2025</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 pb-1">
            <span>Updated Printer Troubleshooting Guide</span>
            <span className="text-sm text-gray-500">May 18, 2025</span>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <span className="bg-red-100 border border-red-300 p-1 text-sm">This wiki is maintained by the IT Department</span>
      </div>
      
      <div className="mt-8 text-center">
        <img 
          src="https://placeholder.pics/svg/200x100/DEDEDE/555555/Company%20Logo" 
          alt="Company Logo" 
          className="inline-block"
        />
      </div>
    </WikiContent>
  );
};

export default Index;
