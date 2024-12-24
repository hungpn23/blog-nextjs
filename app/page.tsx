import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.jpg";

export default function Home() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mb-12 flex flex-col items-center gap-4">
        <Image
          src={logo}
          alt="Profile photo"
          width={200}
          height={200}
          className="rounded-md"
          priority
        />
        <h1 className="text-center text-3xl font-semibold">Phạm Ngọc Hùng</h1>
        <p className="text-center text-primary">Backend Developer</p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Skill set</h2>
          <p className="mb-4">
            I genuinely find everything about programming interesting. I
            specialize in <span className="text-primary">Web Development </span>
            and I love solving problems across the entire stack.
          </p>
          <p className="mb-4">Over the years, I have worked with:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              <span className="text-primary">JavaScript, </span>
              <span className="text-primary">TypeScript, </span>
              <span className="text-primary">Angular, </span>
              <span className="text-primary">React, </span>
              <span className="text-primary">Next.js, </span>
              <span className="text-primary">Vue.js, </span>
              <span className="text-primary">RxJS, </span>
              <span className="text-primary">webpack</span>
            </li>
            <li>
              <span className="text-primary">Node.js, </span>
              <span className="text-primary">NestJS, </span>
              <span className="text-primary">SQL, </span>
              <span className="text-primary">Docker</span>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="mb-2 text-xl font-semibold">
            What I'd like to get more acquainted with in the future:
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>Cloud computing</li>
            <li>Golang</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
          <p>
            I guess there could be many ways to do that, but the most common
            ones would be via{" "}
            <Link
              href="mailto:example@email.com"
              className="text-primary hover:underline hover:underline-offset-4"
            >
              email
            </Link>{" "}
            or{" "}
            <Link
              href="https://linkedin.com"
              className="text-primary hover:underline hover:underline-offset-4"
            >
              LinkedIn
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">
            A few other things about me
          </h2>
          <ul className="list-inside list-disc space-y-4">
            <li>
              I like to go beyond the abstractions offered by the tools I'm
              using; hence, exploring the source code is something that I find
              fun and fulfilling
            </li>
            <li>
              I love sharing my knowledge with other developers; the ways I'm
              currently doing that is via{" "}
              <Link
                href="https://youtube.com"
                className="text-primary hover:underline"
              >
                YouTube
              </Link>
              ,{" "}
              <Link
                href="https://stackoverflow.com"
                className="text-primary hover:underline"
              >
                Stack Overflow
              </Link>{" "}
              and{" "}
              <Link href="/blog" className="text-primary hover:underline">
                writing articles
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
