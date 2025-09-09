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
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CertificationCard } from "@/components/certification-card";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex gap-14 min-h-[100dvh] flex-col md:flex-row">
      <div className="flex flex-col space-y-5 md:w-2/5 md:sticky top-24 h-full">
        <section id="hero">
          <div className="mx-auto w-full space-y-2">
            <div className="pr-5 flex justify-between items-center">
              <div className="flex-col flex space-y-1.5 ">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-xl font-bold  xl:text-2xl/none "
                  text={`Eaí, me chamo `}
                />
                <BlurFadeText
                  className="text-2xl font-bold  xl:text-3xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.name.split(" ")[0]}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-24 ">
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="object-cover object-left-bottom "
                  />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
            <BlurFadeText
              className="max-w-[600px] "
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h2 className="text-xl font-bold">Sobre mim</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
             <div className="gap-2 flex pt-2 items-center">

                <img src="/eua.png" alt="eua" width={30}/>
                <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                  C1: Inglês Avançado, TOEIC 870/990 Pts
                </Markdown>
              </div>
          </BlurFade>
        </section>
        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-xl font-bold">Contato</h2>
            <div className=" flex justify-between pr-4">
              <div className="gap-2 flex pt-2">
                {Object.entries(DATA.contact.social)
                  .filter(([_, social]) => social.navbar)
                  .map(([name, social]) => (
                    <Link
                      key={name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "default", size: "icon" }),
                        "size-6 rounded-md"
                      )}
                    >
                      <social.icon className="size-4 " />
                    </Link>
                  ))}
              </div>
              <ModeToggle />
            </div>
          </BlurFade>
        </section>
       
      </div>
      <div className="md:w-3/5 space-y-10">
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Formação Acadêmica</h2>
            </BlurFade>
            {DATA.academic.map((ac, id) => (
              <BlurFade
                key={ac.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={ac.company}
                  logoUrl={ac.logoUrl}
                  altText={ac.company}
                  title={ac.company}
                  subtitle={ac.title}
                  badges={ac.badges}
                  period={`${ac.start} - ${ac.end ?? "Present"}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Experiência Profissional</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
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
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Hard Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1 cursor-pointer">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="space-y-3 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <h2 className="text-xl font-bold">Projetos</h2>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="certifications">
          <div className="space-y-3 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <h2 className="text-xl font-bold">Certificações</h2>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.certifications.map((certification, id) => (
                <BlurFade
                  key={certification.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <CertificationCard
                    href={certification.href}
                    key={certification.title}
                    title={certification.title}
                    description={certification.description}
                    dates={certification.dates}
                    image={certification.image}
                    organizationName={certification.organizationName}

                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
