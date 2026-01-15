import { whyChooseData } from "@/data/whyChoseUs";
import Container from "./Container";
import Title from "./ui/Title";
import { WhyChooseUsCard } from "./ui/card";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-[#121C39]">
      <Container>
        <Title
          variant="dark"
          tag="Why Choose Us"
          title=" Why 100+ Businesses Choose Khan IT"
          description=" You have options. So why do so many businesses in Bangladesh choose
            Khan IT? Simple — we deliver real results, not buzzwords."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseData.map((item) => (
            <WhyChooseUsCard key={item.number} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
