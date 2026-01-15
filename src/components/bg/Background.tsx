import Image from "next/image";

export default function Background() {
  return (
    <div className="hidden absolute w-full top-0 left-0 right-0 bottom-0 lg:flex">
      <div>
        <Image
          className="w-full h-full object-cover"
          src="/assets/images/bg-left.png"
          alt="Background Image LEFT"
          width={800}
          height={1200}
        />
      </div>
      <div>
        <Image
          className="w-full h-full object-cover"
          src="/assets/images/bg-right.png"
          alt="Background Image RIGHT"
          width={800}
          height={1200}
        />
      </div>
    </div>
  );
}
