import React from 'react';

const RevenueChart = () => {
  const chartHeight = 320;
  const linePath =
    "M10 150 C 150 10, 300 170, 450 70 S 650 20, 800 100 S 1000 50, 1190 150";

  return (
    <div className="mt-6 lg:mt-28">
      <svg
        width="100%"
        height={chartHeight}
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <line
          x1="10"
          y1="160"
          x2="1190"
          y2="160"
          stroke="#eee"
          strokeWidth="1"
        />
        <path
          d={linePath}
          fill="none"
          stroke="#ff6b00"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="flex -mt-16 justify-between text-xs text-gray-400 ">
        <span>Apr 1, 2022</span>
        <span>Apr 30, 2022</span>
      </div>
    </div>
  );
};

export default RevenueChart;