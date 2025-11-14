import React from "react";

interface StatsCardProps {
  title: string;
  count: number;
  timeStamp: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  countColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  count,
  timeStamp,
  bgColor,
  borderColor,
  textColor,
  countColor,
}) => {
  return (
    <div
      className={`${bgColor} ${borderColor} rounded-lg p-4 shadow-sm hover border-2`}
    >
      <h5 className="text-lg font-semibold! text gray-900 mb-4">{title}</h5>
      <p className={`text-xl font-bold ${countColor} mb-4`}>{count} </p>
      <p className={`text-sm font-medium ${textColor}`}>{timeStamp} </p>
    </div>
  );
};

export default StatsCard;
