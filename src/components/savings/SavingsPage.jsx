
import SavingsCard from './SavingsCard';

const SavingsPage = () => {
  const savingsPlans = [
    {
      title: "Starter Savings Plan",
      minDeposit: 1,
      maxDeposit: 100,
      dailyProfit: "0.022%",
      profitWithdrawal: "Daily",
      loanEligibility: 80,
      referralBonus: 5,
      referralBonusWithdrawal: "After 30 days",
      savingsBalanceWithdrawal: "After 30 days of the first deposit",
      idealFor: "Beginners who want to start small and explore regular savings with a steady profit."
    },
    {
      title: "Growth Savings Plan",
      minDeposit: 101,
      maxDeposit: 1000,
      dailyProfit: "0.033%",
      profitWithdrawal: "Daily",
      loanEligibility: 80,
      referralBonus: 5,
      referralBonusWithdrawal: "After 30 days",
      savingsBalanceWithdrawal: "After 20 days of the first deposit",
      idealFor: "Individuals looking to grow their savings with a moderate deposit range and quick access to their funds."
    },
    {
      title: "Premium Savings Plan",
      minDeposit: 1001,
      maxDeposit: 5000,
      dailyProfit: "0.044%",
      profitWithdrawal: "Daily",
      loanEligibility: 80,
      referralBonus: 10,
      referralBonusWithdrawal: "After 30 days",
      savingsBalanceWithdrawal: "After 10 days of the first deposit",
      idealFor: "Those with higher savings goals who want to enjoy increased profits and a faster withdrawal timeline."
    },
    {
      title: "Elite Savings Plan",
      minDeposit: 5001,
      maxDeposit: 50000000,
      dailyProfit: "0.055%",
      profitWithdrawal: "Daily",
      loanEligibility: 80,
      referralBonus: 15,
      referralBonusWithdrawal: "After 30 days",
      savingsBalanceWithdrawal: "After 7 days of the first deposit",
      idealFor: "Serious savers who want the highest returns, exclusive benefits, and fast access to funds."
    }
  ];

  return (
    <div className=" bg-gray-100 p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-900 mb-6">SAVINGS PLANS</h2>
      <div className="grid grid-cols-1 p-2 md:p-10 sm:grid-cols-2 gap-6">
        {savingsPlans.map((plan, index) => (
          <SavingsCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default SavingsPage;
