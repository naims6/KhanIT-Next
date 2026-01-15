import Link from "next/link";
import Container from "./Container";

export default function CTA() {
  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-gray-200">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Thank You for Reviewing
          </h2>

          <p className="text-gray-600 mb-8 max-w-150 mx-auto">
            This project demonstrates a clean, responsive implementation of the
            provided Figma design using Next.js, TypeScript, and Tailwind CSS.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://naims-dev.vercel.app/"
              target="_blank"
              className="px-5 py-3 rounded-lg bg-[#0271E8] text-white hover:bg-[#025dc0] transition"
            >
              Portfolio
            </Link>

            <Link
              href="https://github.com/naims6"
              target="_blank"
              className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              GitHub
            </Link>

            <Link
              href="https://linkedin.com/in/naims6"
              target="_blank"
              className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              LinkedIn
            </Link>

            <Link
              href="https://drive.google.com/file/d/1EGxi6iC1su5iH-L3CnQweru5nM_86tZZ/view?usp=sharing"
              target="_blank"
              className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Resume
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
