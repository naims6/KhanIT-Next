import Image from "next/image";
import { WhyChooseUs } from "@/types";
import { Service } from "@/types";
import { Stat } from "@/types";

// service card
export function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      key={service.title}
      className={`p-6 rounded-[20px] transition-all duration-300 ease-in-out cursor-pointer  hover:-translate-y-0.5 bg-white border border-[#E8EAED] hover:border-[#0271E8]! hover:bg-[#f0f7ff]!  ${
        service.active ? "border-[#0271E8]! bg-[#f0f7ff]!" : "border-[#E8EAED]"
      }`}
    >
      <Image
        src={`/assets/images/services/${service.image}.png`}
        alt={service.title}
        width={56}
        height={56}
      />

      <h2 className="font-dm-sans mt-6 mb-3 text-[#060606] leading-7.5 text-2xl font-semibold">
        {service.title}
      </h2>

      <p className="text-base text-[#65758B]">{service.description}</p>
    </div>
  );
}

// why choose us card
export function WhyChooseUsCard({ item }: { item: WhyChooseUs }) {
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

// stats card
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
