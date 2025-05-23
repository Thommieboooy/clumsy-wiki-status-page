
import WikiContent from "../components/WikiContent";

const HelpPage = () => {
  return (
    <WikiContent>
      <div className="pb-4 mb-6 border-b border-gray-300">
        <h2 className="text-2xl font-bold mb-2" style={{ color: "#00008B" }}>Wiki Help Guide</h2>
        <p>How to use our company wiki system - <span className="font-bold">PLEASE READ BEFORE USING</span></p>
      </div>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-bold mb-3 bg-blue-100 p-2 border-l-4 border-blue-500">Navigating the Wiki</h3>
          <p className="mb-3">Use the navigation links at the top of the page to access different sections of the wiki. The main sections are:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li><b>Home</b> - The main page with announcements and quick links</li>
            <li><b>Server Status</b> - Current status of company servers and services</li>
            <li><b>About</b> - Information about this wiki system</li>
            <li><b>Help</b> - This help guide</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-3 bg-blue-100 p-2 border-l-4 border-blue-500">Frequently Asked Questions</h3>
          
          <div className="space-y-4 pl-2">
            <div>
              <p className="font-bold">Q: How do I find information on the wiki?</p>
              <p>A: Currently you need to navigate through the pages manually. Use the navigation links and section headers to find what you need. We plan to add a search function in the future.</p>
            </div>
            
            <div>
              <p className="font-bold">Q: Who can edit the wiki?</p>
              <p>A: Currently only IT staff and designated department representatives have edit access. Contact Bob from IT if you need to update information.</p>
            </div>
            
            <div>
              <p className="font-bold">Q: How often is the wiki updated?</p>
              <p>A: The wiki is updated as needed when new information becomes available. Major updates are usually announced via company email.</p>
            </div>
            
            <div>
              <p className="font-bold">Q: What should I do if I find incorrect information?</p>
              <p>A: Please email <span className="text-blue-600">helpdesk@company.com</span> with the page URL and details of the incorrect information.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 border border-gray-300">
          <h3 className="text-lg font-bold mb-3">Keyboard Shortcuts</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left border border-gray-400">Key Combination</th>
                <th className="p-2 text-left border border-gray-400">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-400">Alt + H</td>
                <td className="p-2 border border-gray-400">Go to Home page</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2 border border-gray-400">Alt + S</td>
                <td className="p-2 border border-gray-400">Go to Server Status page</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-400">Alt + P</td>
                <td className="p-2 border border-gray-400">Print current page</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm mt-2 italic">Note: Shortcuts may not work in all browsers</p>
        </div>
        
        <div className="bg-red-50 p-4 border-2 border-red-200">
          <h3 className="text-lg font-bold mb-2 text-red-800">Troubleshooting</h3>
          <ul className="list-decimal pl-8 space-y-2">
            <li>If pages are not loading, please check your network connection</li>
            <li>Clear your browser cache if you see outdated information</li>
            <li>Use Internet Explorer 6.0 or above for best results <span className="line-through">(Firefox and Chrome also work)</span></li>
            <li>If all else fails, restart your computer and try again</li>
          </ul>
        </div>
        
        <div className="text-center mt-4 pt-4 border-t border-gray-300">
          <p className="text-sm">For additional help, please contact the IT Helpdesk at ext. 4545</p>
          <p className="text-xs mt-2 font-bold" style={{ fontFamily: "Comic Sans MS, cursive" }}>Page created by Bob - Last updated 05/15/25</p>
        </div>
      </div>
    </WikiContent>
  );
};

export default HelpPage;
