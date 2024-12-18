import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"posts">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  
  const { title, pubDatetime, modDatetime, description, readingTime } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-xl font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
        <a
          href={href}
          className="inline-block text-xl font-bold text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0 mb-2"
        >
          {secHeading ? (
            <h2 {...headerProps}>{title}</h2>
          ) : (
            <h3 {...headerProps}>{title}</h3>
          )}
        </a>
        <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} readingTime={readingTime} />
        <p>{description}</p>
    </li>
  );
}
