
import WikiTemplate from "./WikiTemplate";

const EmergencyProcedures = () => {
  return (
    <WikiTemplate 
      title="Emergency Procedures" 
      lastModified="18 mei 2025"
      category="Veiligheid"
    >
      <div className="space-y-6">
        <div className="bg-red-100 border-2 border-red-300 p-4">
          <h3 className="font-bold text-red-800 mb-2">🚨 NOODGEVALLEN</h3>
          <p className="text-red-700">
            Bij direct gevaar: bel 112 (politie, brandweer, ambulance)
            <br />
            Beveiligingspost: ext. 911
          </p>
        </div>

        <section>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">
            Evacuatieprocedure
          </h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Bij het horen van het brandalarm:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Stop onmiddellijk met je werkzaamheden</li>
                <li>Verlaat rustig je werkplek</li>
                <li>Gebruik NOOIT de lift tijdens evacuatie</li>
              </ul>
            </li>
            <li>
              <strong>Evacuatieroute:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Volg de groene evacuatieborden</li>
                <li>Gebruik de dichtstbijzijnde nooduitgang</li>
                <li>Help collega's indien nodig</li>
              </ul>
            </li>
            <li>
              <strong>Verzamelpunt:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Verzamel op het parkeerterrein (aangewezen gebied)</li>
                <li>Wacht op instructies van BHV'ers</li>
                <li>Ga NIET terug het gebouw in zonder toestemming</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">
            BHV Contactpersonen
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-300 p-4">
              <h3 className="font-semibold">Jan Pietersen (Hoofdcoördinator)</h3>
              <p>Ext. 2001 | Mobiel: 06-12345678</p>
              <p>Locatie: 2e verdieping</p>
            </div>
            <div className="border border-gray-300 p-4">
              <h3 className="font-semibold">Sarah de Vries</h3>
              <p>Ext. 2002 | Mobiel: 06-87654321</p>
              <p>Locatie: 1e verdieping</p>
            </div>
            <div className="border border-gray-300 p-4">
              <h3 className="font-semibold">Mike Johnson</h3>
              <p>Ext. 2003 | Mobiel: 06-11223344</p>
              <p>Locatie: 3e verdieping</p>
            </div>
            <div className="border border-gray-300 p-4">
              <h3 className="font-semibold">Lisa Chen</h3>
              <p>Ext. 2004 | Mobiel: 06-99887766</p>
              <p>Locatie: Begane grond</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">
            Specifieke Noodsituaties
          </h2>
          
          <div className="space-y-4">
            <div className="border border-gray-300 p-4">
              <h3 className="font-semibold mb-2">🔥 Brand</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Activeer brandalarm indien nog niet actief</li>
                <li>Evacueer onmiddellijk</li>
                <li>Sluit deuren achter je</li>
                <li>Bel 112 zodra je veilig buiten bent</li>
              </ul>
            </div>
            
            <div className="border border-gray-300 p-4">
              <h3 className="font-semibold mb-2">🏥 Medische Noodgevallen</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Bel onmiddellijk 112 bij ernstige situaties</li>
                <li>Waarschuw de dichtstbijzijnde BHV'er</li>
                <li>Verleen eerste hulp alleen als je hiertoe bevoegd bent</li>
                <li>EHBO-koffer bevindt zich bij de receptie</li>
              </ul>
            </div>
            
            <div className="border border-gray-300 p-4">
              <h3 className="font-semibold mb-2">💻 IT Security Incident</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Meld onmiddellijk bij IT Security (ext. 4545)</li>
                <li>Koppel het betreffende systeem los van het netwerk</li>
                <li>Documenteer wat er gebeurd is</li>
                <li>Verander geen bestanden of instellingen</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">
            Plattegrond Nooduitgangen
          </h2>
          <div className="text-center">
            <img 
              src="https://placeholder.pics/svg/400x300/DEDEDE/555555/Evacuatie%20Plattegrond" 
              alt="Evacuatie Plattegrond" 
              className="inline-block border-2 border-gray-400"
            />
            <p className="text-sm mt-2 italic">Evacuatieplattegrond - Bekijk de fysieke plattegronden bij elke uitgang</p>
          </div>
        </section>
      </div>
    </WikiTemplate>
  );
};

export default EmergencyProcedures;
