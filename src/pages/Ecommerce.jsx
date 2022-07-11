import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

import { Stacked, Pie, Button, SparkLine } from "../components";

import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
  stackedPrimaryXAxis,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-100 rounded-xl h-44 w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-300">Earnings</p>
              <p className="text-2xl text-gray-800">$63,448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              size="md"
              color="white"
              bgColor="blue"
              text="download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap m-3 gap-1 text-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56  p-4 pt-9 rounded-2xl"
            >
              <button
                className="text-xl p-4 hover:drop-shadow-md opacity-0.9 rounded-full"
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              >
                {item.icon}
              </button>
              <p className="mt-3 ">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor}  ml-3`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center ">
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 md:w-780 w-full m-3 p-4 rounded-2xl ">
          <div className="flex justify-between">
            <p className="font-semibold text-sm">Revenue updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 hover:drop-shadow-md text-gray-500 text-sm">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 hover:drop-shadow-md text-green-500 text-sm">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <span className="text-2xl font-semibold ">$93,438</span>
                <span className="text-xs text-white ml-3 bg-green-400 rounded-full p-1.5 cursor-pointer hover:drop-shadow-xl hover:">
                  23%
                </span>
                <p className="text-gray-400 text-sm">Budget</p>
              </div>
              <div className="mt-8">
                <span className="text-2xl font-semibold ">$48,438</span>
                <p className="text-gray-400 text-sm">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor="blue"
                  color="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  text="Download Report"
                  bgColor="blue"
                  borderRadius="10px"
                />
              </div>
            </div>
            <Stacked width="300px" height="340px" id="stacked-chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
