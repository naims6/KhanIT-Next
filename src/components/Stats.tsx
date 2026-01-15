import { statsData } from "@/data/stats";
import Container from "./Container";
import Title from "./ui/Title";
import StatsCard from "./ui/StatsCard";

export default function Stats() {
  return (
    <section id="stats" className="bg-[#F1F5F9] py-24">
      <Container>
        <Title
          tag="Proven Results"
          title="Results That Speak for Themselves"
          description=" We focus on measurable outcomes that directly impact your bottom line."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {statsData.map((stat, ind) => (
            <StatsCard key={ind} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
