import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  link?: string;
  image?: string;
  className?: string;
  organizationName: string;
}

export function CertificationCard({
  title,
  href,
  description,
  dates,
  link,
  image,
  className,
  organizationName,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full max-w-xs",
        className
      )}
    >
      <Link href={href || "#"} className="block cursor-pointer" target="_blank" rel="noopener noreferrer">
        {image && (
          <Image
            src={image}
            alt={title}
            width={(16 / 9) * 300}
            height={300}
            className="aspect-video w-full object-top"
          />
        )}
      </Link>

      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link
              ?.replace("https://", "")
              .replace("www.", "")
              .replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardFooter className="mt-auto px-2 pb-2">
        <p className="text-xs font-medium text-muted-foreground mt-2">
          Órgão Emissor: {organizationName}
        </p>
      </CardFooter>
    </Card>
  );
}
