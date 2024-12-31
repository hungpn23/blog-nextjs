import Image from "next/image";
import Link from "next/link";
import { PageBody } from "@/components/layouts/page-body";

export default function Home() {
  return (
    <PageBody>
      <div className="mb-12 flex flex-col items-center gap-4">
        <Image
          src="/logo.jpg"
          alt="Profile photo"
          width={200}
          height={200}
          className="rounded-md"
          priority
        />
        <h1 className="text-center text-3xl font-semibold">Blog</h1>
        <p className="text-center text-primary">Backend Developer</p>
      </div>

      <div className="space-y-12">
        <section aria-labelledby="about-me">
          <h2 id="about-me" className="sr-only">
            About Me
          </h2>
          <p className="mb-4">
            I genuinely find everything about programming interesting. I
            specialize in{" "}
            <span className="text-primary">Backend Development </span>
            and I enjoy building efficient and scalable web applications using
            <span className="text-nodejs"> Node.js</span>
          </p>

          <section aria-labelledby="skill-set">
            <h2 id="skill-set" className="mb-4 text-2xl font-semibold">
              Skill set
            </h2>
            <p className="mb-4">Over the years, I have worked with:</p>

            <ul className="list-inside list-disc space-y-1">
              <li>
                <em>Languagues: </em>

                <span className="text-primary">JavaScript, TypeScript</span>
              </li>
              <li>
                <em>Libraries & frameworks: </em>

                <span className="text-primary">Nest.js, Next.js</span>
              </li>
              <li>
                <em>Databases: </em>
                <span className="text-primary">MySQL, Redis</span>
              </li>
              <li>
                <em>Tools: </em>
                <span className="text-primary">Docker, Git (Github)</span>
              </li>
              <li>
                <em>Cloud services: </em>
                <span className="text-primary">Cloudinary, S3, EC2</span>
              </li>
            </ul>
          </section>
        </section>

        <section aria-labelledby="future-interests">
          <h3 id="future-interests" className="mb-2 text-xl font-medium">
            What I'd like to get more acquainted with in the future:
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>Java (Spring), Golang</li>
            <li>DevOps</li>
          </ul>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact" className="mb-4 text-2xl font-semibold">
            Contact
          </h2>
          <p>
            I guess there could be many ways to do that, but the most common
            ones would be via{" "}
            <Link
              href="#"
              className="text-link hover:underline hover:underline-offset-4"
            >
              email
            </Link>{" "}
            or{" "}
            <Link
              href="#"
              className="text-link hover:underline hover:underline-offset-4"
            >
              Telegram
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="about-me-extra">
          <h2 id="about-me-extra" className="mb-4 text-2xl font-semibold">
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
    </PageBody>
  );
}
