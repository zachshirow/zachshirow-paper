import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    const readingTimeMsg = Math.ceil(readingTime.minutes) + " دقیقه مطالعه"
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"



    data.astro.frontmatter.minutesRead = readingTimeMsg;
  };
}