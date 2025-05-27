
import WikiTemplate from "./WikiTemplate";

const ITProcedures = () => {
  return (
    <WikiTemplate 
      title="IT Procedures" 
      lastModified="23 mei 2025"
      category="IT"
    >
      {/* Inhoudsopgave */}
      <div className="bg-blue-50 border border-blue-200 p-4 mb-6 inline-block">
        <h3 className="font-bold mb-2">Inhoudsopgave</h3>
        <ol className="list-decimal pl-4 space-y-1">
          <li><a href="#wachtwoord-reset" className="text-blue-600 underline">Wachtwoord Reset</a></li>
          <li><a href="#nieuwe-gebruiker" className="text-blue-600 underline">Nieuwe Gebruiker Aanmaken</a></li>
          <li><a href="#software-installatie" className="text-blue-600 underline">Software Installatie</a></li>
          <li><a href="#backup-procedures" className="text-blue-600 underline">Backup Procedures</a></li>
        </ol>
      </div>

      {/* Secties */}
      <div className="space-y-8">
        <section id="wachtwoord-reset">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">
            1. Wachtwoord Reset Procedure
          </h2>
          <div className="pl-4">
            <h3 className="text-lg font-semibold mb-2">Stappen:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Verificeer de identiteit van de gebruiker</li>
              <li>Open Active Directory Users and Computers</li>
              <li>Zoek de gebruiker op naam of gebruikersnaam</li>
              <li>Klik rechts op de gebruiker → "Reset Password"</li>
              <li>Voer een tijdelijk wachtwoord in</li>
              <li>Vink "User must change password at next logon" aan</li>
              <li>Informeer de gebruiker over het nieuwe tijdelijke wachtwoord</li>
            </ol>
            
            <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300">
              <strong>Belangrijk:</strong> Gebruik altijd een veilig tijdelijk wachtwoord en zorg dat de gebruiker dit bij de eerste login wijzigt.
            </div>
          </div>
        </section>

        <section id="nieuwe-gebruiker">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">
            2. Nieuwe Gebruiker Aanmaken
          </h2>
          <div className="pl-4">
            <h3 className="text-lg font-semibold mb-2">Vereiste informatie:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Volledige naam</li>
              <li>Afdeling</li>
              <li>Functietitel</li>
              <li>Manager</li>
              <li>Gewenste gebruikersnaam</li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-2 mt-4">Procedure:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Maak nieuwe gebruiker aan in Active Directory</li>
              <li>Voeg toe aan juiste groepen o.b.v. afdeling</li>
              <li>Configureer email account in Exchange</li>
              <li>Stel home directory in</li>
              <li>Test login en email functionaliteit</li>
            </ol>
          </div>
        </section>

        <section id="software-installatie">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">
            3. Software Installatie
          </h2>
          <div className="pl-4">
            <p className="mb-4">Alle software installaties moeten worden goedgekeurd door de IT manager.</p>
            
            <h3 className="text-lg font-semibold mb-2">Goedgekeurde software lijst:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Microsoft Office 365</li>
              <li>Adobe Acrobat Reader</li>
              <li>Google Chrome</li>
              <li>TeamViewer (alleen voor IT)</li>
              <li>Antivirus software (Bitdefender)</li>
            </ul>
          </div>
        </section>

        <section id="backup-procedures">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">
            4. Backup Procedures
          </h2>
          <div className="pl-4">
            <h3 className="text-lg font-semibold mb-2">Dagelijkse backups:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Server backups om 02:00</li>
              <li>Database backups om 03:00</li>
              <li>Email backups om 04:00</li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-2 mt-4">Wekelijkse controles:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Verificeer backup logs</li>
              <li>Test restore procedure</li>
              <li>Update backup scripts indien nodig</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Zie ook sectie */}
      <div className="mt-8 p-4 bg-gray-100 border border-gray-300">
        <h3 className="font-bold mb-2">Zie ook:</h3>
        <ul className="list-disc pl-4">
          <li><a href="/wiki/emergency-procedures" className="text-blue-600 underline">Emergency Procedures</a></li>
          <li><a href="/help" className="text-blue-600 underline">Help Guide</a></li>
        </ul>
      </div>
    </WikiTemplate>
  );
};

export default ITProcedures;
