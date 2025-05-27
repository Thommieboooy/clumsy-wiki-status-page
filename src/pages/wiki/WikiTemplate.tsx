
import WikiContent from "../../components/WikiContent";
import { Link } from "react-router-dom";

interface WikiTemplateProps {
  title: string;
  lastModified: string;
  category?: string;
  children: React.ReactNode;
}

const WikiTemplate = ({ title, lastModified, category, children }: WikiTemplateProps) => {
  return (
    <WikiContent>
      <div className="bg-white border border-gray-300">
        {/* Wiki header */}
        <div className="bg-gray-100 border-b border-gray-300 p-4">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-3xl font-bold" style={{ fontFamily: "Times New Roman, serif" }}>
              {title}
            </h1>
            <div className="text-sm text-gray-600">
              <Link to="/wiki" className="text-blue-600 underline hover:text-blue-800">
                ← Terug naar Wiki
              </Link>
            </div>
          </div>
          {category && (
            <div className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Categorie:</span> {category}
            </div>
          )}
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Laatst bijgewerkt:</span> {lastModified}
          </div>
        </div>

        {/* Wiki content */}
        <div className="p-6">
          {children}
        </div>

        {/* Wiki footer */}
        <div className="bg-gray-50 border-t border-gray-300 p-4 text-sm text-gray-600">
          <p>
            Deze pagina is onderdeel van de Company Wiki. 
            Voor wijzigingen neem contact op met de IT afdeling (ext. 4545).
          </p>
        </div>
      </div>
    </WikiContent>
  );
};

export default WikiTemplate;
