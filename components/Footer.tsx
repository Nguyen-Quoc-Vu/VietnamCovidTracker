import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center  dark:text-gray-200 md:pb-0 justify-center w-full h-24">
      <div className="flex-col">
        <a
          className="flex items-center justify-center text-sm hover:text-blue-500"
          href="https://quocvu.tech"
          target="_blank"
        >
          Powered by&nbsp;
          <div className="font-bold text-md">Vu Nguyen</div>
        </a>
        <div className="text-center text-xs">
          Nguồn dữ liệu Covid-19 từ Zing News & VnExpress
        </div>
      </div>
    </footer>
  );
};

export default Footer;
