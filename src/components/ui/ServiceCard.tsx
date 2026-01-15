import { Service } from "@/types/Service";
import Image from "next/image";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      key={service.title}
      className={`service-card border hover:-translate-y-0.5 ${
        service.active ? "border-[#0271E8]! bg-[#f0f7ff]" : "border-[#E8EAED]"
      }`}
    >
      <Image
        src={`/assets/images/services/${service.image}.png`}
        alt={service.title}
        width={80}
        height={80}
      />

      <h2 className="font-dm-sans mt-6 mb-3 text-[#060606] leading-7.5 text-2xl font-semibold">
        {service.title}
      </h2>

      <p className="sub-title text-base">{service.description}</p>
    </div>
  );
}
