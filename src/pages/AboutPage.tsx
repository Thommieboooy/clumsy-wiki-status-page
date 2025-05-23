
import WikiContent from "../components/WikiContent";

const AboutPage = () => {
  return (
    <WikiContent>
      <div className="pb-4 mb-6 border-b border-gray-300">
        <h2 className="text-2xl font-bold mb-2" style={{ color: "#00008B" }}>About This Wiki</h2>
        <p>Information about our company's internal wiki system.</p>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white p-4 border-2 border-gray-300">
          <h3 className="text-lg font-bold mb-2 bg-gray-200 p-1">Wiki Purpose</h3>
          <p>This wiki was created to provide employees with easy access to important company information, documentation, and resources. It serves as our central knowledge repository.</p>
        </div>
        
        <div className="bg-white p-4 border-2 border-gray-300">
          <h3 className="text-lg font-bold mb-2 bg-gray-200 p-1">History</h3>
          <p>This wiki was established in January 2024 by the IT Department. It replaced our previous system of shared network drives and email updates.</p>
          <p className="mt-2">The wiki is maintained by Bob from IT and department representatives who update their respective sections.</p>
        </div>
        
        <div className="bg-white p-4 border-2 border-gray-300">
          <h3 className="text-lg font-bold mb-2 bg-gray-200 p-1">Technical Information</h3>
          <div className="pl-4">
            <p><b>Server:</b> Internal Server #5</p>
            <p><b>Software:</b> Custom Wiki Engine v1.2</p>
            <p><b>Last Updated:</b> May 23, 2025</p>
            <p><b>Backup Schedule:</b> Daily at 2AM</p>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 border-2 border-yellow-300 mt-8">
          <h3 className="text-lg font-bold mb-2">Contributing to the Wiki</h3>
          <p>If you would like to contribute content or make corrections to the wiki, please contact Bob from IT at ext. 4545 or email <span className="text-blue-600">bob@company.com</span></p>
          <p className="mt-2">Department managers can request edit access for their team members.</p>
        </div>
        
        <div className="text-center mt-8">
          <img 
            src="https://placeholder.pics/svg/250x150/DEDEDE/555555/Wiki%20Diagram" 
            alt="Wiki System Diagram" 
            className="inline-block border-2 border-gray-400"
          />
          <p className="text-sm mt-2 italic">Simplified Wiki Infrastructure Diagram</p>
        </div>
      </div>
    </WikiContent>
  );
};

export default AboutPage;
