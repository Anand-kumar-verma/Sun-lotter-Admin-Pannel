import React from "react";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GavelIcon from "@mui/icons-material/Gavel";
import MoneyIcon from "@mui/icons-material/Money";
import { useQuery } from "react-query";
import { dashboard_counter_function } from "../../Services";
import { CircularProgress } from "@mui/material";
const Dashboard = () => {
  const { isLoading, data: dashboard_data } = useQuery(
    ["dashboard"],
    () => dashboard_counter_function(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const dashboard_new_data = dashboard_data?.data?.data;
  const data = [
    {
      id: 1,
      item: "Total Game",
      icon: (
        <SportsVolleyballIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: dashboard_new_data?.totalgames || 0,
    },
    {
      id: 2,
      item: "Total Player",
      icon: (
        <SportsKabaddiIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: dashboard_new_data?.totalplayer || 0,
    },
    {
      id: 3,
      item: "Active User",
      icon: (
        <PersonPinCircleIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: dashboard_new_data?.activeuser || 0,
    },
    {
      id: 4,
      item: "Total Recharge",
      icon: (
        <CurrencyExchangeIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: dashboard_new_data?.trecharge || 0,
    },
    {
      id: 5,
      item: "Today Deposit",
      icon: (
        <MonetizationOnIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: dashboard_new_data?.todaydeposit || 0,
    },
    {
      id: 6,
      item: "Today Withdrawl Approval",
      icon: <PriceCheckIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: dashboard_new_data?.todaydeposit || 0,
    },
    {
      id: 7,
      item: "Today Withdrawl Pending",
      icon: (
        <CurrencyRubleIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />
      ),
      count: dashboard_new_data?.todaydeposit || 0,
    },
    {
      id: 8,
      item: "Total Deposit",
      icon: <AddBusinessIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: dashboard_new_data?.totaldeposit || 0,
    },
    {
      id: 9,
      item: "Total Withdrawl Approval",
      icon: <CreditScoreIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: dashboard_new_data?.totaldeposit || 0,
    },
    {
      id: 10,
      item: "Total Withdrawl Pending",
      icon: <CreditCardIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: dashboard_new_data?.totaldeposit || 0,
    },
    {
      id: 11,
      item: "Total Bets",
      icon: <GavelIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: dashboard_new_data?.totalbet || 0,
    },
    {
      id: 12,
      item: "Total Commision",
      icon: <MoneyIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: dashboard_new_data?.commissions || 0,
    },
    {
      id: 13,
      item: "Today Turnover",
      icon: <GavelIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: dashboard_new_data?.todayturnover || 0,
    },
    {
      id: 14,
      item: "Total Turnover",
      icon: <MoneyIcon className="!h-[5rem] !w-[5rem] !text-[#2a2785]" />,
      count: dashboard_new_data?.total_turnover || 0,
    },
  ];
  if (isLoading)
    return (
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  return (
    <div className="grid lg:!grid-cols-4 md:!grid-cols-3 sm:grid-cols-1 p-5 gap-[2%] gap-y-4 ">
      {data?.map((i, index) => {
        return (
          <div
            key={index}
            className="!text-center !bg-white !bg-opacity-50 !rounded-lg !py-5 !cursor-pointer "
          >
            <div className="!text-lg !font-bold">{i?.icon}</div>
            <p className="!font-bold">{i?.item}</p>
            <p className="!font-extrabold !text-blue-700 !text-lg">
              {i?.count}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
