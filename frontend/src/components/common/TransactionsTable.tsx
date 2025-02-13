// components/TransactionsTable.tsx

import React from "react";
import { SlArrowDown } from "react-icons/sl";


// Пример "данных" для таблицы
interface Transaction {
  fromIcon: string; // путь к иконке (например, "/icons/bnb.png")
  fromAddress: string;
  gasFee: string;
  sumIcon: string;
  sum: string;
  toAddress: string;
  time: string;
  date: string; 
  profit: string;
}

const mockTransactions: Transaction[] = [
  {
    fromIcon: "/icons/Lifi.png",
    fromAddress: "0x5624...9778",
    gasFee: "0.0001ETH ($0.83)",
    sumIcon: "/icons/ETH.png",
    sum: "-0.002 ETH",
    profit: "($6.88)",
    toAddress: "0x92d9...36dd",
    time: "12:00:53",
    date: "8hrs 20mins ago",
  },
  {
    fromIcon: "/icons/bnb.png",
    fromAddress: "0x1234...9778",
    gasFee: "0.0001ETH ($0.83)",
    sumIcon: "/icons/Polygon.png",
    sum: "-20 MATIC",
    profit: "($5.88)",
    toAddress: "0x329d...363c",
    time: "13:01:34",
    date: "3hrs 1mins ago",
  },
  // ... Добавьте остальные строки по аналогии
];

const TransactionsTable: React.FC = () => {
  return (
    <div className=" m-4 text-sm text-neutral-200">
      {/* Шапка таблицы с пагинацией/кнопками “Back | 1 2 3 4 5… | Latest” и иконкой поиска */}
      <div className="flex items-center space-x-4 mb-2">
        <div className="text-[#656565] text-[11px] ml-auto space-x-1">
          <button className="hover:text-white">Back</button>
          <span>|</span>
          <button className="hover:text-white">1 2 3 4 5...</button>
          <span>|</span>
          <button className="hover:text-white">Latest</button>
        </div>
        <div className="relative">
          <input
            type="text"
            className="w-[25em] bg-[#101010] border border-[#373737] text-white text-[11px] px-3 py-1 focus:outline-none"
          />
          <span className="absolute top-1.5 right-2 text-neutral-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 
                   7.5 0 10-10.6 0 7.5 7.5 0 
                   0010.6 0z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="overflow-y-auto">
        <table className="min-w-full text-left border-separate [border-spacing:0_5px]">
          {/* Заголовки столбцов */}
          <thead>
            <tr className="text-neutral-400 border-neutral-700">
              <th className="py-2 text-left text-[#2F2F2F] text-[11px]">From</th>
              <th className="py-2 text-left text-[#2F2F2F] text-[11px]">Gas Fee</th>
              <th className="py-2 text-left text-[#2F2F2F] text-[11px]">Sum</th>
              <th className="py-2 text-left text-[#2F2F2F] text-[11px]">To</th>
              <th className="py-2 text-left text-[#2F2F2F] text-[11px]">Time</th>
            </tr>
          </thead>
          {/* Тело таблицы */}
          <tbody>
            {mockTransactions.map((tx, idx) => (
              <TransactionRow key={idx} transaction={tx} />
            ))}
          </tbody>
        </table>
      </div>
    </div>  
  );
};


interface TransactionRowProps {
    transaction: Transaction;
  }
  
  const TransactionRow: React.FC<TransactionRowProps> = ({ transaction }) => {
    const { fromIcon, fromAddress, gasFee, sumIcon, sum, toAddress, time, date, profit } = transaction;
  
    return (
      <tr className="bg-[#0F0F0F] hover:bg-[#191919] transition-colors">
        <td className="py-2 px-2">
          <div className="flex items-center text-[#CBCBCB] text-[11px] space-x-2">
            <img
              src={fromIcon}
              alt="icon"
              className="w-5 h-5 object-contain"
            />
            <span>{fromAddress}</span>
          </div>
        </td>
  
        <td className="py-2 text-[9px] text-[#A3A3A3]">{`Gas Fee. ${gasFee}`}</td>
  
        <td className="py-2">
          <div className="flex items-center text-[#CBCBCB] text-[11px] space-x-2">
            <img
              src={sumIcon}
              alt="icon"
              className="w-5 h-5 object-contain"
            />
            <span>{sum}</span>
            <span className="text-[#8AE06C]">{profit}</span>
          </div>
        </td>
  
        <td className="py-2 text-[#CBCBCB] text-[11px]">{toAddress}</td>
  
        <td className="py-2">
          <div className="flex flex-col text-[#CBCBCB] text-[11px]">
          
            <span className="text-[#CBCBCB] text-[11px]">{time}</span>
          </div>
        </td>
  
        {/* Столбец с раскрыть*/}
        <td className="py-2 text-right pr-4">
          <button className="text-neutral-400 hover:text-neutral-200">
          <SlArrowDown />
          </button>
        </td>
      </tr>
    );
  };

export default TransactionsTable;
