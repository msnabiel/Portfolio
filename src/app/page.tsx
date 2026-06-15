"use client";

import { useEffect, useState } from "react";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [progress, setProgress] = useState(1);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
  let lastBuzzed = 0;

  const interval = setInterval(() => {
    setProgress((prev) => {
      const next = prev + 1;

      if (next % 20 === 0 && next !== lastBuzzed && "vibrate" in navigator) {
        navigator.vibrate(10); // subtle tick
        lastBuzzed = next;
      }

      if (next >= 100) {
        clearInterval(interval);
        setTimeout(() => setShowLoader(false), 300);

        // Final celebratory haptic
        if ("vibrate" in navigator) {
          navigator.vibrate([20, 30, 40, 30, 20]); // fancy burst
        }

        return 100;
      }

      return next;
    });
  }, 18); // Loading speed

  return () => clearInterval(interval);
}, []);
  if (showLoader) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-6xl font-mono tracking-widest z-50 transition-opacity duration-500">
        {String(progress).padStart(3, "0")}
      </div>
    );
  }

  return (
    <>
      {/* Loader Overlay */}
      {showLoader && (
        <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground transition-opacity duration-500 ${progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <span className="text-xl font-semibold mb-4">Loading... {progress}%</span>
          <div className="h-2 w-64 bg-muted rounded overflow-hidden">
            <div
              className="h-full bg-foreground transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        {/* Hero */}
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>

        {/* Work Experience */}
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <ResumeCard
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                  <ProjectCard {...project} />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Hackathons */}
        <section id="hackathons">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Hackathons
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    I like building things
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    During my present time in university, I attended{" "}
                    {DATA.hackathons.length}+ hackathons. People from around the
                    country would come together and build incredible things in 2-3
                    days. It was eye-opening to see the endless possibilities
                    brought to life by a group of motivated and passionate
                    individuals.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCard {...project} />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <h2 className="text-xl font-bold">Achievements</h2>
            </BlurFade>
            {DATA.achievements.map((achievement, id) => (
              <BlurFade key={achievement.title} delay={BLUR_FADE_DELAY * 17 + id * 0.05}>
                <div className="flex flex-col space-y-1.5 rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold leading-none">{achievement.title}</h3>
                    <time className="text-xs text-muted-foreground">{achievement.date}</time>
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <h2 className="text-xl font-bold">Certifications</h2>
            </BlurFade>
            {DATA.certifications.map((cert, id) => (
              <BlurFade key={cert.title} delay={BLUR_FADE_DELAY * 19 + id * 0.05}>
                <div className="flex flex-col space-y-1.5 rounded-lg border p-4">
                  <h3 className="font-semibold leading-none">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 20}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me a dm{" "}
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    className="text-blue-500 hover:underline"
                  >
                    with a direct question on LinkedIn
                  </Link>{" "}
                  and I&apos;ll respond whenever I can. I will ignore all
                  soliciting.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </>
  );
}
