

const SavingsCard = ({ title, minDeposit, maxDeposit, dailyProfit, profitWithdrawal, loanEligibility, referralBonus, referralBonusWithdrawal, savingsBalanceWithdrawal, idealFor }) => {
  return (
    <div className="bg-white shadow-xl rounded-xl p-6">
      <h3 className="text-xl font-bold text-blue-900 mb-4">{title}</h3>
      <ul className="text-gray-600 text-sm md:text-md ">
        <li><strong>Minimum Deposit:</strong> ${minDeposit}</li>
        <li><strong>Maximum Deposit:</strong> ${maxDeposit}</li>
        <li><strong>Daily Profit Ratio:</strong> {dailyProfit}</li>
        <li><strong>Profit Withdrawal:</strong> {profitWithdrawal}</li>
        <li><strong>Loan Eligibility:</strong> {loanEligibility}% of savings balance</li>
        <li><strong>Referral Bonus:</strong> {referralBonus}% of the referred customer’s first deposit</li>
        <li><strong>Referral Bonus Withdrawal:</strong> {referralBonusWithdrawal}</li>
        <li><strong>Savings Balance Withdrawal:</strong> {savingsBalanceWithdrawal}</li>
      </ul>
      <p className="mt-4 text-gray-600 text-sm md:text-lg"><strong>Ideal for:</strong> {idealFor}</p>
    </div>
  );
};

export default SavingsCard;
