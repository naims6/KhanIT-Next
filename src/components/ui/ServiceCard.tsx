import { Service } from "@/types";
import Image from "next/image";

export default function ServiceCard({ service }: { service: Service }) {
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
