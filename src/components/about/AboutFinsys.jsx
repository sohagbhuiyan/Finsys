
import { FaPiggyBank, FaMoneyBillWave, FaChartLine, FaLock, FaHandHoldingUsd, FaMobileAlt } from 'react-icons/fa';

const AboutFinsys = () => {
  return (
    <div className=" mx-auto p-6 bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-6 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">ABOUT FINSYS</h2>
        <p className="text-md md:text-lg text-gray-600 mt-2">Your Ultimate Financial Growth and Security Platform</p>
      </div>

      {/* Introduction */}
      <div className="bg-white p-8 shadow-lg rounded-xl mb-12">
        <p className="text-md md:text-xl text-gray-600 leading-relaxed">
          <strong>FINSYS</strong> is an innovative financial platform designed to help you <strong>save, grow, and access</strong> your money like never before.
          With unmatched features, advanced fund management strategies, and a commitment to security, <strong>FINSYS</strong> is transforming how you manage your finances.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature Card */}
        <div className="bg-white p-6 shadow-md rounded-xl text-center">
          <FaPiggyBank className="text-4xl text-blue-900 mx-auto mb-4" />
          <h3 className="text-lg md:text-xl font-bold text-blue-900">Save & Earn Daily</h3>
          <p className="text-gray-600 mt-2 text-md md:text-lg">
            Earn <strong>1% daily revenue</strong> on your savings, creating a steady passive income stream.
          </p>
        </div>

        {/* Feature Card */}
        <div className="bg-white p-6 shadow-md rounded-xl text-center">
          <FaMoneyBillWave className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-lg md:text-xl font-bold text-blue-900">Daily Withdrawals</h3>
          <p className="text-gray-600 mt-2 text-md md:text-lg">
            Withdraw your profits <strong>every day</strong>—no restrictions, just financial freedom.
          </p>
        </div>

        {/* Feature Card */}
        <div className="bg-white p-6 shadow-md rounded-xl text-center">
          <FaHandHoldingUsd className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-lg md:text-xl font-bold text-blue-900">Instant Loans</h3>
          <p className="text-gray-600 mt-2 text-md md:text-lg">
            Get up to <strong>80% of your savings</strong> as an instant loan—no paperwork, no delays.
          </p>
        </div>

        {/* Feature Card */}
        <div className="bg-white p-6 shadow-md rounded-xl text-center">
          <FaChartLine className="text-4xl text-purple-600 mx-auto mb-4" />
          <h3 className="text-lg md:text-xl font-bold text-blue-900">Smart Investments</h3>
          <p className="text-gray-600 mt-2 text-md md:text-lg">
            Your money is managed using <strong>high-potential stock markets</strong> and secure financial strategies.
          </p>
        </div>

        {/* Feature Card */}
        <div className="bg-white p-6 shadow-md rounded-xl text-center">
          <FaLock className="text-4xl text-red-600 mx-auto mb-4" />
          <h3 className="text-lg md:text-xl font-bold text-blue-900">Unmatched Security</h3>
          <p className="text-gray-600 mt-2 text-md md:text-lg">
            Advanced <strong>risk management</strong> ensures your funds are <strong>safe and secure</strong>.
          </p>
        </div>

        {/* Feature Card */}
        <div className="bg-white p-6 shadow-md rounded-xl text-center">
          <FaMobileAlt className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-lg md:text-xl font-bold text-blue-900">Easy to Use</h3>
          <p className="text-gray-600 mt-2 text-md md:text-lg">
            Manage your savings, earnings, and loans with just a few clicks—<strong>anytime, anywhere</strong>.
          </p>
        </div>
      </div>

      {/* Why Choose FINSYS */}
      <div className="bg-white p-8 shadow-lg rounded-xl mt-12">
        <h3 className="text-xl md:text-2xl font-bold text-blue-900 text-center mb-6">Why Choose FINSYS?</h3>
        <ul className="space-y-4 text-sm md:text-lg text-gray-600">
          <li>✅ <strong>Guaranteed Daily Revenue:</strong> Earn a steady <strong>1% return</strong> on your savings.</li>
          <li>✅ <strong>Instant Cash Access:</strong> Withdraw daily profits or secure loans without hassle.</li>
          <li>✅ <strong>Smart Investments:</strong> Your savings are managed using <strong>high-growth financial strategies</strong>.</li>
          <li>✅ <strong>Flexibility & Security:</strong> Your money is <strong>always accessible and protected</strong>.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 bg-blue-900 text-white shadow-xl p-6 rounded-xl">
        <h3 className="text-xl md:text-2xl font-bold">FINSYS: Where Your Money Grows & Opportunities Flow!</h3>
        <p className="text-md md:text-lg mt-2">Start saving today and experience a smarter way to grow your wealth.</p>
      </div>
    </div>
  );
};

export default AboutFinsys;
