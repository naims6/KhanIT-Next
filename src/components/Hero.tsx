import Image from "next/image";
import Container from "./Container";

export default function Hero() {
  return (
    <section id="home" className="py-20 lg:mt-36">
      <Container>
        <div className="h-full flex flex-col lg:flex-row gap-16 min-[1023px]:justify-between min-[1023px]:items-center mt-10 lg:mt-0">
          {/* left side  */}
          <div className="flex-1 lg:-translate-y-10">
            <div className="text-4xl md:text-5xl xl:text-6xl font-bold font-dm-sans leading-[120%] lg:leading-[130%] tracking-[-0.18px]">
              <span>
                Digital Marketing
                <Image
                  className="inline w-10 lg:w-16 -translate-4 lg:-translate-y-8 -ml-1 lg:-ml-4"
                  src="/assets/images/highlight.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </span>
              <br />
              <span>Agency in</span>
              <br />
              <span>Bangladesh</span>
            </div>

            <p className="max-w-xl mt-4 mb-8 lg:mt-6 lg:mb-14 text-[#65758B] font-extralight text-lg leading-[150%]">
              Khan IT (led by SEO expert Md Faruk Khan) helps businesses get
              150% more leads and 2.5x higher conversions through integrated
              digital marketing and web design.
            </p>

            <button className="primary-btn">Book Your Free Consultation</button>
          </div>
          {/* right side */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:mt-10 lg:mt-0">
            <div className="flex flex-col gap-6 md:-translate-y-9">
              <Image
                className="w-full"
                src="/assets/images/hero1.png"
                alt="Hero Image 1"
                width={300}
                height={400}
              />
              <Image
                className="w-full"
                src="/assets/images/hero3.png"
                alt="Hero Image 3"
                width={300}
                height={400}
              />
            </div>
            <div className="flex flex-col gap-6">
              <Image
                className="w-full"
                src="/assets/images/hero2.png"
                alt="Hero Image 2"
                width={300}
                height={400}
              />
              <Image
                className="w-full"
                src="/assets/images/hero4.png"
                alt="Hero Image 4"
                width={300}
                height={400}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
