
import { servicesData } from "@/data/Services";
import Title from "./ui/Title";
import Container from "./Container";
import ServiceCard from "./ui/ServiceCard";

export default function Services() {
  return (
    <section id="our-service" className="py-16 lg:py-24">
      <Container>
        <Title
          tag="Our Services"
          title="  Full-stack Digital Marketing Services"
          description=" We manage your complete digital presence so you can focus on your
            core business."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {servicesData.map((service, ind) => (
           <ServiceCard key={ind} service={service}/>
          ))}
        </div>
      </Container>
    </section>
  );
}
