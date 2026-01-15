import React from "react";

export default function Title({
  title,
  description,
  tag,
  variant = "light",
}: {
  title: string;
  description: string;
  tag: string;
  variant?: string;
}) {
  return (
    <div className="text-center mb-16">
      <span
        className={`${
          variant === "dark" && "bg-[#0271E8]/20! 1text-[#0271E8]!"
        } text-primary font-medium text-base px-4 py-2 bg-[#f0f7ff] rounded-full inline-block`}
      >
        {tag}
      </span>
      <h2
        className={`${
          variant === "dark" && "text-white!"
        } text-[36px] leading-10.5 text-[#060606] font-bold lg:text-5xl lg:leading-14 font-dm-sans mt-6 mb-4`}
      >
        {title}
      </h2>
      <p
        className={`${
          variant === "dark" && "text-[#CBD5E1]"
        } text-[#65758b] font-extralight leading-[150%] text-lg max-w-174.25 mx-auto`}
      >
        {description}
      </p>
    </div>
  );
}
