
const NomineePolicy = () => {
  return (
    <div className=" p-6 bg-gray-100">
  
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">NOMINEE AND UNCLAIMED FUNDS POLICY</h2>
        <p className="text-sm md:text-lg text-gray-600 mt-4">At FINSYS, we prioritize transparency and accountability in managing your savings and profits.</p>
      </div>

      <div className="grid grid-cols-1 text-sm md:text-md md:grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-md md:text-xl font-bold text-blue-900 mb-4">Unclaimed Funds Policy</h3>
          <ul className="space-y-4  text-gray-700">
            <li><strong>1. Definition of Unclaimed Funds:</strong> Savings and profit funds in a user’s account are considered unclaimed if there is no activity or claim by the user for over 90 consecutive days.</li>
            <li><strong>2. Steps to Contact the User:</strong>
              <ul className="list-inside pl-4 space-y-2">
                <li><strong>Initial Contact:</strong> After 90 days of inactivity, FINSYS will contact the user via the email address and phone number provided during registration.</li>
                <li><strong>Follow-Up Contact:</strong> If the user does not respond within 15 working days after the initial contact, FINSYS will send a second follow-up email to the user.</li>
                <li><strong>Final Attempt:</strong> If there is no response from the user within 7 additional working days after the second email, FINSYS will proceed to contact the nominee.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 text-sm md:text-md shadow-lg rounded-xl">
          <h3 className="text-md md:text-xl font-bold text-blue-900 mb-4">Nominee Notification and Fund Disbursement</h3>
          <ul className="space-y-4 text-gray-700">
            <li><strong>1. Role of the Nominee:</strong> The nominee, designated by the user during registration, serves as the beneficiary in case the user cannot be reached.</li>
            <li><strong>2. Contacting the Nominee:</strong>
              <ul className="list-inside pl-4 space-y-2">
                <li>After the unsuccessful attempts to contact the user, FINSYS will reach out to the nominee using the contact information provided by the user.</li>
                <li>The nominee will be informed of the unclaimed funds and guided on the steps for verification.</li>
              </ul>
            </li>
            <li><strong>3. Verification Process:</strong>
              <ul className="list-inside pl-4 space-y-2">
                <li>The nominee must provide proof of identity and credentials to claim the funds. This may include a government-issued ID and other documents as requested by FINSYS.</li>
                <li>The verification process will be conducted within 30 days to ensure accuracy and prevent unauthorized access.</li>
              </ul>
            </li>
            <li><strong>4. Fund Disbursement:</strong>
              <ul className="list-inside pl-4 space-y-2">
                <li>Upon successful verification, FINSYS will discharge the unclaimed savings and profit funds to the nominee as per the user’s recorded instructions.</li>
                <li><strong>Note:</strong> FINSYS will not share the user’s account credentials or login information with the nominee under any circumstances.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 shadow-lg rounded-xl  mt-8">
        <h3 className="text-md md:text-xl font-bold text-blue-900 mb-4">Important Notes</h3>
        <ul className="space-y-4 text-sm md:text-lg text-gray-700">
          <li>Users are responsible for keeping their nominee’s contact details and identity information up to date in the FINSYS system.</li>
          <li>FINSYS reserves the right to decline disbursement to the nominee if the verification process fails or if the nominee cannot provide the necessary documents.</li>
          <li>Any disputes regarding the unclaimed funds or nominee will be resolved in accordance with applicable laws and FINSYS terms and conditions.</li>
        </ul>
      </div>

      <div className="text-center mt-12">
        <p className="text-sm md:text-xl text-gray-600">For any questions or to update your nominee details, please contact FINSYS Customer Support at <a href="mailto:support@finsys.com" className="text-blue-600 underline">support@finsys.com</a>.</p>
      </div>
    </div>
  );
};

export default NomineePolicy;
