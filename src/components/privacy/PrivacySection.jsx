

const PrivacySection = () => {
  return (
    <div className="mx-auto p-6 bg-gray-100">
 
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">PRIVACY POLICY FOR FINSYS</h2>
        <p className="text-md md:text-lg text-gray-600 mt-2">Effective Date: <span className="font-semibold">1st February 2025</span></p>
        <p className="text-md md:text-xl text-gray-700 mt-4">
          At FINSYS, we are committed to protecting your personal information and ensuring transparency in how we collect, use, and safeguard your data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-md md:text-xl font-bold text-blue-900 mb-4">1. Information We Collect</h3>
          <ul className="space-y-4 text-sm md:text-md text-gray-600">
            <li><strong>Personal Information:</strong> Name, phone number, email, government-issued ID (NID, passport).</li>
            <li><strong>Financial Information:</strong> Bank details, transaction history, savings, and loan data.</li>
            <li><strong>Device Information:</strong> IP address, device type, OS, and app usage for security.</li>
            <li><strong>Location Information:</strong> Used to verify transactions and enhance services.</li>
          </ul>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-md md:text-xl font-bold text-blue-900 mb-4">2. How We Use Your Information</h3>
          <ul className="space-y-4 text-sm md:text-md text-gray-600">
            <li>Facilitate savings, withdrawals, and loan processing.</li>
            <li>Provide financial updates and daily revenue calculations.</li>
            <li>Ensure account security and prevent unauthorized access.</li>
            <li>Conduct identity verification and fraud detection.</li>
            <li>Offer customer support and improve user experience.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-md md:text-xl font-bold text-blue-900 mb-4">3. Information Sharing</h3>
          <ul className="space-y-4 text-sm md:text-md text-gray-600">
            <li><strong>With Service Providers:</strong> Trusted partners for financial services and app maintenance.</li>
            <li><strong>For Legal Compliance:</strong> If required by law or government authorities.</li>
            <li><strong>With Your Consent:</strong> Only when you authorize specific sharing.</li>
          </ul>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-md md:text-xl font-bold text-blue-900 mb-4">4. Data Security</h3>
          <ul className="space-y-4 text-sm md:text-md text-gray-600">
            <li>End-to-end encryption for sensitive information.</li>
            <li>Secure servers and firewalls to prevent unauthorized access.</li>
            <li>Regular system audits and security updates.</li>
          </ul>
          <p className="mt-4 text-gray-600 text-sm">
            While we take all necessary measures, no system is 100% secure.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-md md:text-xl font-bold text-blue-900 mb-4">5. Your Rights</h3>
          <ul className="space-y-4 text-sm md:text-md text-gray-600">
            <li>Access and update your personal data.</li>
            <li>Request deletion of your data (subject to legal obligations).</li>
            <li>Opt-out of marketing communications.</li>
            <li>Lodge complaints regarding data privacy violations.</li>
          </ul>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-md md:text-xl font-bold text-blue-900 mb-4">6. Data Retention</h3>
          <p className="text-gray-600 text-sm md:text-md">
            We retain your data only as long as necessary for service delivery and legal compliance. Inactive accounts may be deleted in accordance with policy.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-md md:text-xl font-bold text-blue-900 mb-4">7. Cookies and Tracking</h3>
          <p className="text-gray-600 text-sm md:text-md">
            FINSYS uses cookies to enhance user experience, analyze app usage, and personalize services. Users can manage cookie preferences in device settings.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-md md:text-xl font-bold text-blue-900 mb-4">8. Third-Party Links</h3>
          <p className="text-gray-600 text-sm md:text-md">
            Our app and website may contain links to third-party services. We are not responsible for their privacy policies or content. Please review their policies before sharing data.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 shadow-lg rounded-xl mt-8">
        <h3 className="text-md md:text-xl font-bold text-blue-900 mb-4">9. Updates to This Policy</h3>
        <p className="text-gray-600 text-sm md:text-md">
          We may update this Privacy Policy periodically to reflect service or legal changes. Users will be notified of major updates via email or app notifications.
        </p>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-lg md:text-xl font-bold text-blue-900"> Contact Us</h3>
        <p className=" text-gray-600 ">
          If you have any questions or concerns, please contact:
        </p>
        <p className="text-lg text-blue-600 font-semibold">
          <a href="mailto:support@finsys.com" className="underline">support@finsys.com</a>
        </p>
      </div>

      <div className="text-center mt-8 bg-blue-900 text-white p-4 rounded-lg">
        <p className="text-sm md:text-md lg:text-lg font-medium">
          Your trust is our priority. By using FINSYS, you agree to this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacySection;
