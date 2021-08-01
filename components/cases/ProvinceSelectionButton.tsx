import { motion } from "framer-motion";
import React from "react";
type ButtonProps = {
  province: string;
  setProvince: (province: string) => void;
  name: string;
};

const ProvinceSelectionButton = ({
  province,
  setProvince,
  name,
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className={
        province == name
          ? `rounded-full w-full dark:bg-gray-800 p-1 px-3
        font-bold text-sm ring-2 dark:text-red-400 ring-red-500 text-red-500`
          : `rounded-full bg-white dark:text-gray-200 dark:bg-gray-700 border-2 dark:border-gray-700 p-1 w-full px-3 text-sm `
      }
      onClick={() => {
        setProvince(name);
      }}
    >
      {name}
    </motion.button>
  );
};

export default ProvinceSelectionButton;
