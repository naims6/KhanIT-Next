import { Stat } from "@/types/stats";
import Image from "next/image";
import React from "react";

export default function StatsCard({ stat }: { stat: Stat }) {
  return (
    <div
      key={stat.label}
      className="py-8 px-6 flex flex-col items-center justify-center text-center shadow-sm bg-white/80 border border-[#EBECF0] rounded-2xl hover:-translate-y-0.5 transition-all duration-300"
    >
      <div
        className={`size-16 ${stat.bgColor} rounded-2xl flex items-center justify-center`}
      >
        <Image
          src={`/assets/images/stats/${stat.image}.png`}
          alt={stat.label}
          width={32}
          height={32}
        />
      </div>
      <div>
        <h2
          className="leading-14 text-5xl font-bold mt-6 mb-1"
          style={{ color: stat.color }}
        >
          {stat.value}
        </h2>
        <p className="text-sm text-[#65758B] leading-5 font-extralight">
          {stat.label}
        </p>
      </div>
    </div>
  );
}
