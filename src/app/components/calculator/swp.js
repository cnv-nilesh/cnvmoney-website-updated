import React, { useState } from "react";

const SWPCalculator = () => {
  const [investment, setInvestment] = useState(500000);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(500);
  const [expectedReturn, setExpectedReturn] = useState(8);
  const [duration, setDuration] = useState(5);
  const calculateSWP = () => {
    const monthlyInterestRate = expectedReturn / 12 / 100; // Interest rate per month
    const totalMonths = duration * 12; // Convert years to months

    let futureValue = investment;
    let totalWithdrawal = 0;

    for (let i = 0; i < totalMonths; i++) {
      totalWithdrawal += monthlyWithdrawal;
      futureValue -= monthlyWithdrawal;

      futureValue += futureValue * monthlyInterestRate;
    }

    futureValue = Math.max(futureValue, 0); // Ensure final value is non-negative

    futureValue = Math.round(futureValue);
    totalWithdrawal = Math.round(totalWithdrawal);

    return { futureValue, totalWithdrawal };
  };

  const { futureValue, totalWithdrawal } = calculateSWP();

  return (
    <div className='bg-white p-6 drop-shadow-lg rounded flex flex-wrap gap-5 items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
        <div className='w-full lg:w-[500px]'>
          <form className='space-y-6 mt-8'>
            <div className='flex flex-col gap-6'>
              {" "}
              <label>
                investment, setInvestment Amount: ₹
                <input
                  type='number'
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className='w-full border border-gray-300 rounded-lg p-3 text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter total value'
                />
              </label>
            </div>
            <div>
              <label>
                Monthly Withdrawal: ₹
                <input
                  type='number'
                  value={monthlyWithdrawal}
                  onChange={(e) => setMonthlyWithdrawal(Number(e.target.value))}
                  className='w-full border border-gray-300 rounded-lg p-3 text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter total value'
                />
              </label>
            </div>
            <div>
              <label>
                Expected Returns:
                <input
                  type='number'
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className='w-full border border-gray-300 rounded-lg p-3 text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter total value'
                />
              </label>
            </div>
            <div>
              <label>
                Select Duration:
                <input
                  type='number'
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className='w-full border border-gray-300 rounded-lg p-3 text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter total value'
                />
                Years
              </label>
            </div>
          </form>
        </div>
        <div className='space-y-1 text-center mt-28'>
          {" "}
          <div className='flex text-[#E21c1c] text-[16px] space-x-1 font-bold'>
            <span>Invested Amount:</span>{" "}
            <span> ₹{investment.toLocaleString()}</span>
          </div>
          <div className='flex text-green-700 font-bold text-[20px] space-x-1'>
            <span>Total Withdrawal :</span>{" "}
            <span>₹{totalWithdrawal.toLocaleString()}</span>
          </div>{" "}
          <div className='flex text-[#0143a2] text-[24px] font-bold'>
            <span>Final Value : </span>
            <span> ₹{futureValue.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SWPCalculator;
