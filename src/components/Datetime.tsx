import { LOCALE, SITE } from "@config";
import type { CollectionEntry } from "astro:content";

interface DatetimesProps {
  pubDatetime: string | Date;
  modDatetime: string | Date | undefined | null;
}

interface EditPostProps {
  editPost?: CollectionEntry<"posts">["data"]["editPost"];
  postId?: CollectionEntry<"posts">["id"];
}

interface ReadingTimeProps {
  readingTime: String;
}

interface Props extends DatetimesProps, EditPostProps, ReadingTimeProps {
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({
  pubDatetime,
  modDatetime,
  size = "sm",
  className = "",
  editPost,
  postId,
  readingTime,
}: Props) {
  return (
    <div
      className={`flex items-center space-x-2 opacity-80 ${className}`.trim()}
    >
      {modDatetime && modDatetime > pubDatetime ? (
        <span className={`sr-only ${size === "sm" ? "text-sm" : "text-base"}`}>ویرایش شده: </span>
      ) : (
        <span className="sr-only">منتشر شده: </span>
      )}
      <span className={`${size === "sm" ? "text-sm" : "text-base"}`}>
        <FormattedDatetime
          pubDatetime={pubDatetime}
          modDatetime={modDatetime}
        />
        <TimeRead readingTime={readingTime} />
        {/* {size === "lg" && <EditPost editPost={editPost} postId={postId} />} */}
      </span>
    </div>
  );
}

const FormattedDatetime = ({ pubDatetime, modDatetime }: DatetimesProps) => {
  const myDatetime = new Date(
    modDatetime && modDatetime > pubDatetime ? modDatetime : pubDatetime
  );

  const date = myDatetime.toLocaleDateString(LOCALE.langTag, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // const time = myDatetime.toLocaleTimeString(LOCALE.langTag, {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });

  return (
    <>
      <time dateTime={myDatetime.toISOString()}>{date}</time>
      {/* <span aria-hidden="true"> | </span>
      <span className="sr-only">&nbsp;at&nbsp;</span>
      <span className='text-nowrap'>{time}</span> */}
    </>
  );
};

const TimeRead = ({readingTime, size = "sm",}: {readingTime: String | undefined; size?: "sm" | "lg"}) => {

  return(
    <>
        {readingTime && <>
          <span aria-hidden="true"> | </span>
          <span className={` text-nowrap ${size === "sm" ? "text-sm" : "text-base"}`}>{readingTime}</span>
        </>}
    </>
  )
}

const EditPost = ({ editPost, postId }: EditPostProps) => {
  let editPostUrl = editPost?.url ?? SITE?.editPost?.url ?? "";
  const showEditPost = !editPost?.disabled && editPostUrl.length > 0;
  const appendFilePath =
    editPost?.appendFilePath ?? SITE?.editPost?.appendFilePath ?? false;
  if (appendFilePath && postId) {
    editPostUrl += `/${postId}`;
  }
  const editPostText = editPost?.text ?? SITE?.editPost?.text ?? "Edit";

  return (
    showEditPost && (
      <>
        <span aria-hidden="true"> | </span>
        <a
          className="space-x-1.5 hover:opacity-75"
          href={editPostUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icons-tabler-outline icon-tabler-edit inline-block !scale-90 fill-skin-base"
            aria-hidden="true"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
            <path d="M16 5l3 3" />
          </svg>
          <span className="text-base">{editPostText}</span>
        </a>
      </>
    )
  );
};
