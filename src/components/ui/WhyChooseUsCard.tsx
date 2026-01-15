import { WhyChooseUs } from "@/types/whyChooseUs";
import Image from "next/image";
import React from "react";

export default function WhyChooseUsCard({ item }: { item: WhyChooseUs }) {
  return (
    <div
      key={item.number}
      className={`bg-[#3399FF]/5 hover:bg-[#3399FF]/10 hover:border-[#0271E8]/70 px-6 py-9 rounded-[20px] shadow-sm border transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-0.5 ${
        item.active
          ? "border-[#0271E8]/70 bg-[#3399FF]/10"
          : "border-[#F8FAFC]/10"
      }`}
    >
      <div className="bg-[#0271E8]/15 rounded-xl size-14 flex items-center justify-center">
        <Image
          src={`/assets/images/chose-us/${item.image}.png`}
          alt={item.title}
          width={32}
          height={32}
        />
      </div>

      <h2 className="mt-6 mb-3 text-white leading-7.5 text-2xl font-semibold">
        {item.title}
      </h2>

      <p className="text-[#CBD5E1] font-extralight leading-[150%] text-base">
        {item.description}
      </p>
    </div>
  );
}
