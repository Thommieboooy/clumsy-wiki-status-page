
import WikiContent from "../../components/WikiContent";
import { Link } from "react-router-dom";

const WikiIndex = () => {
  const wikiPages = [
    {
      title: "IT Procedures",
      description: "Standaard procedures voor IT gerelateerde taken",
      url: "/wiki/it-procedures",
      category: "IT",
      lastModified: "23 mei 2025"
    },
    {
      title: "Meeting Rooms",
      description: "Informatie over vergaderruimtes en reserveringen",
      url: "/wiki/meeting-rooms",
      category: "Faciliteiten",
      lastModified: "20 mei 2025"
    },
    {
      title: "Emergency Procedures",
      description: "Noodprocedures en evacuatieplanning",
      url: "/wiki/emergency-procedures",
      category: "Veiligheid",
      lastModified: "18 mei 2025"
    }
  ];

  const categories = [...new Set(wikiPages.map(page => page.category))];

  return (
    <WikiContent>
      <div className="pb-4 mb-6 border-b border-gray-300">
        <h2 className="text-2xl font-bold mb-2" style={{ color: "#00008B" }}>
          Company Wiki
        </h2>
        <p>Welkom bij onze interne kennisbank. Hier vind je alle belangrijke bedrijfsinformatie.</p>
      </div>

      {/* Categories */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {categories.map(category => (
          <div key={category} className="border-2 border-gray-300 p-4">
            <h3 className="text-lg font-bold mb-2 text-center bg-gray-200 p-1">
              {category}
            </h3>
            <ul className="space-y-2">
              {wikiPages
                .filter(page => page.category === category)
                .map(page => (
                  <li key={page.url}>
                    <Link to={page.url} className="text-blue-600 underline hover:text-blue-800">
                      {page.title}
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      {/* All pages list */}
      <div className="bg-gray-100 border border-gray-300 p-4">
        <h3 className="text-lg font-bold mb-4">Alle Wiki Pagina's</h3>
        <div className="space-y-3">
          {wikiPages.map(page => (
            <div key={page.url} className="flex justify-between items-center border-b border-gray-300 pb-2">
              <div>
                <Link to={page.url} className="text-blue-600 underline hover:text-blue-800 font-semibold">
                  {page.title}
                </Link>
                <p className="text-sm text-gray-600">{page.description}</p>
              </div>
              <div className="text-sm text-gray-500">
                {page.lastModified}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Admin notice */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300">
        <h3 className="text-lg font-bold mb-2">Voor Administrators</h3>
        <p className="text-sm">
          Om nieuwe wiki pagina's toe te voegen of bestaande te bewerken, neem contact op met Bob van IT (ext. 4545).
          In de toekomst wordt er een admin interface toegevoegd voor eenvoudig beheer.
        </p>
      </div>
    </WikiContent>
  );
};

export default WikiIndex;
