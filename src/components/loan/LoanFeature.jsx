
const LoanFeature = () => {
  return (
    <div className=" mx-auto p-6 bg-gray-100">

      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">FINSYS LOAN FEATURE</h2>
        <p className="text-lg md:text-xl text-gray-600 mt-4">Instant Loans Tailored to Your Savings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-4">Loan Details</h3>
          <ul className="space-y-4 text-sm md:text-md text-gray-700">
            <li><strong>Loan Amount:</strong> Borrow up to 80% of your total savings balance.</li>
            <li><strong>Loan Tenure:</strong> Choose between 26 weeks (6 months) or 52 weeks (1 year) for repayment.</li>
            <li><strong>Interest Rate:</strong> The loan interest rate is 0.0137 higher than your existing generated profit rate.</li>
          </ul>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-4">Repayment Terms</h3>
          <ul className="space-y-4 text-sm md:text-md text-gray-700">
            <li><strong>Weekly EMI:</strong> Repay the loan in easy weekly installments.</li>
            <li><strong>Missed Payment Policy:</strong>
              <ul className="list-inside pl-4 space-y-2">
                <li>1st Missed Payment: Profit withdrawal will be temporarily suspended.</li>
                <li>2nd Consecutive Missed Payment: Profit generation will be stopped.</li>
                <li>3rd Consecutive Missed Payment: Your account will be suspended, and FINSYS reserves the right to adjust the outstanding loan amount (including interest) from your savings balance and profit balance.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 shadow-lg rounded-xl mt-8">
        <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-4">Additional Terms</h3>
        <p className="text-gray-700 text-sm md:text-md">
          <strong>Savings Withdrawal Restriction:</strong> During an active loan period, savings funds cannot be withdrawn to ensure loan security.
        </p>
      </div>

  
      <div className="bg-blue-900 text-white p-6 mt-8 rounded-xl">
        <h3 className="text-lg md:text-xl font-bold mb-4">Why Choose FINSYS Loans?</h3>
        <ul className="space-y-4 text-sm md:text-md text-gray-300">
          <li>Instant access to funds when you need them the most.</li>
          <li>Flexible tenure options designed to suit your financial plans.</li>
          <li>Transparent policies to ensure a fair borrowing experience.</li>
        </ul>
      </div>

      <div className="text-center mt-12">
        <p className="text-md md:text-lg text-gray-600">Start managing your finances smarter with FINSYS Loans today! For more details, <a href="mailto:support@finsys.com" className="text-blue-600 underline">contact our support team.</a></p>
      </div>
    </div>
  );
};

export default LoanFeature;
