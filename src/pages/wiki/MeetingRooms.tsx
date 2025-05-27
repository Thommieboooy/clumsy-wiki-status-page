
import WikiTemplate from "./WikiTemplate";

const MeetingRooms = () => {
  return (
    <WikiTemplate 
      title="Meeting Rooms" 
      lastModified="20 mei 2025"
      category="Faciliteiten"
    >
      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 p-4">
          <h3 className="font-bold mb-2">Snel Reserveren</h3>
          <p>Bel ext. 1234 voor directe reserveringen of gebruik het online systeem.</p>
        </div>

        <section>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">
            Beschikbare Vergaderruimtes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-300 p-4">
              <h3 className="text-lg font-semibold mb-2">Conference Room A</h3>
              <ul className="text-sm space-y-1">
                <li><strong>Capaciteit:</strong> 12 personen</li>
                <li><strong>Locatie:</strong> 1e verdieping, links</li>
                <li><strong>Faciliteiten:</strong> Beamer, whiteboard, telefoon</li>
                <li><strong>Geschikt voor:</strong> Presentaties, teamvergaderingen</li>
              </ul>
            </div>
            
            <div className="border border-gray-300 p-4">
              <h3 className="text-lg font-semibold mb-2">Conference Room B</h3>
              <ul className="text-sm space-y-1">
                <li><strong>Capaciteit:</strong> 8 personen</li>
                <li><strong>Locatie:</strong> 2e verdieping, rechts</li>
                <li><strong>Faciliteiten:</strong> TV-scherm, whiteboards</li>
                <li><strong>Geschikt voor:</strong> Kleine meetings, interviews</li>
              </ul>
            </div>
            
            <div className="border border-gray-300 p-4">
              <h3 className="text-lg font-semibold mb-2">Boardroom</h3>
              <ul className="text-sm space-y-1">
                <li><strong>Capaciteit:</strong> 20 personen</li>
                <li><strong>Locatie:</strong> 3e verdieping, hoek</li>
                <li><strong>Faciliteiten:</strong> Video conferencing, grote tafel</li>
                <li><strong>Geschikt voor:</strong> Directievergaderingen, belangrijke meetings</li>
              </ul>
            </div>
            
            <div className="border border-gray-300 p-4">
              <h3 className="text-lg font-semibold mb-2">Creative Space</h3>
              <ul className="text-sm space-y-1">
                <li><strong>Capaciteit:</strong> 6 personen</li>
                <li><strong>Locatie:</strong> 1e verdieping, rechts</li>
                <li><strong>Faciliteiten:</strong> Flipcharts, markers, comfortabele stoelen</li>
                <li><strong>Geschikt voor:</strong> Brainstormsessies, workshops</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">
            Reserveringsregels
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reserveringen kunnen maximaal 2 weken van tevoren worden gemaakt</li>
            <li>Minimale reserveringstijd is 30 minuten</li>
            <li>Maximale reserveringstijd is 4 uur per sessie</li>
            <li>Annuleringen moeten minimaal 2 uur van tevoren worden doorgegeven</li>
            <li>Boardroom reserveringen vereisen manager goedkeuring</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">
            Huisregels
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ruim de ruimte op na gebruik</li>
            <li>Eten en drinken alleen in daarvoor bestemde ruimtes</li>
            <li>Zet alle apparatuur uit na gebruik</li>
            <li>Meld technische problemen direct bij IT (ext. 4545)</li>
            <li>Respecteer de tijd van andere gebruikers</li>
          </ul>
        </section>
      </div>
    </WikiTemplate>
  );
};

export default MeetingRooms;
