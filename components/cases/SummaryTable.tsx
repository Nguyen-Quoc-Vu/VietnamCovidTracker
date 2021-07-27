import moment from "moment";
import React from "react";
import {
  formatNumber,
  timeConverter,
  timeSince,
} from "../../utils/dataFormatter";
import { CovidCasesProps, CovidDataVnexpress } from "../../utils/interfaces";
import Cases from "./Cases";
import SummaryTableFrom2020 from "./SummaryTableFrom2020";

type CasesChartProps = {
  covidCases: CovidCasesProps;
  province: string;
  allCovidCaseByVnexpress: CovidDataVnexpress;
  lastUpdated: number;
};

function getUpdatedTime(time: number) {
  return timeConverter(time);
}

const SummaryTable = ({
  covidCases = {
    cases: [
      {
        x: "2021-04-29",
        y: 0,
      },
    ],
    toDay: 0,
    total: 0,
    lastUpdated: 0,
  },
  province,
  lastUpdated = 0,
  allCovidCaseByVnexpress = [
    {
      date: "10/7",
      community: 0,
      totalCommunity: 0,
      deaths: 0,
      recovered: 0,
      cases: 0,
      totalCase: 0,
      totalDeath: 0,
      totalRecovered: 0,
      totalRecovered2020: 0,
      totalDeath2020: 0,
      totalCases2020: 0,
      activeCases: 0,
    },
  ],
}: CasesChartProps) => {
  return (
    <div className="flex w-full items-center pb-4 flex-col space-y-4">
      <div className="p-2.5 w-full md:w-8/12 lg:w-1/2 grid grid-cols-1 flex items-center justify-center  bg-white rounded-xl shadow-sm">
        <div className="bg-gray-100 p-2 rounded-xl">
          <p className=" font-bold text-lg md:text-xl ">
            Số liệu Covid-19 tại Việt Nam
          </p>
          <p className="text-xs sm:text-xs font-semibold text-gray-500 mb-1">
            Nguồn dữ liệu từ Zing News & VnExpress
          </p>
          <p className="text-xs sm:text-xs font-semibold text-gray-500 ">
            Cập nhật:{" "}
            <a className="  ">{timeSince(lastUpdated.toString()) + " trước"}</a>
          </p>
        </div>
        <SummaryTableFrom2020
          allCovidCaseByVnexpress={allCovidCaseByVnexpress}
        />
      </div>
      <Covid4thWave covidCases={covidCases} />
    </div>
  );
};

const Covid4thWave = ({ covidCases }) => (
  <div className="py-4 px-9 w-full md:w-8/12 lg:w-6/12 shadow-sm  grid grid-cols-1 flex items-center justify-center  bg-white rounded-lg ">
    <p className=" text-md md:text-lg pb-4 font-bold text-red-600">
      Đợt bùng phát dịch từ ngày 27/4
    </p>
    <div className="grid grid-cols-2 gap-5">
      <div className="flex flex-col">
        <p className="pb-2 relative text-2xl md:text-4xl font-bold text-yellow-500 duration-100 ease-in-out">
          {covidCases.total == 0 ? "-" : covidCases.total.toLocaleString()}
        </p>
        <p className=" bg-yellow-100 p-1 text-yellow-500 rounded-md font-semibold text-sm text-center">
          Ca nhiễm
        </p>
      </div>
      <div className="flex flex-col">
        <p className="pb-2 text-2xl md:text-4xl font-bold text-red-500">
          {covidCases.toDay == 0
            ? "-"
            : "+" + covidCases.toDay.toLocaleString()}
        </p>
        <p className="text-sm bg-red-100  text-red-500 font-semibold text-center p-1 rounded-md">
          Hôm nay
        </p>
      </div>
    </div>
  </div>
);
export default SummaryTable;
