import React from "react";
import Header from "../components/Header";
import News from "../components/news/News";

const WorldPage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800  min-h-screen">
      <Header currentPage="world" />

      <main className="flex flex-col justify-center items-center font-bold w-full md:max-w-4xl py-2 md:py-6 flex-1">
        <img src="/world-banner.svg" className="w-6/12 pb-4 relative" />
        <p className="font-bold text-gray-600 text-xl md:text-2xl mt-4 mb-1">
          Trang này chưa có nội dung
        </p>
        <p className=" text-sm md:text-md text-gray-500 ">
          Bạn lòng quay lại sau nhé!
        </p>
      </main>
    </div>
  );
};

export default WorldPage;
