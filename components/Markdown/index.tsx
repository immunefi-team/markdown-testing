import * as React from "react";
import cx from "classnames";
import ReactMarkdown from "react-markdown";
import externalLinks from "remark-external-links";

import AComponent from "./AComponent";
import ImgComponent from "./ImgComponent";
import autolink from "../../lib/remark-autolink";

type MarkdownProps = {
  content: string;
  className?: string;
};

export default function Markdown({
  content,
  className,
  ...rest
}: MarkdownProps): JSX.Element {
  return (
    <ReactMarkdown
      className={cx("max-w-none prose-sm prose break-words", className)}
      components={{
        a: AComponent,
        img: ImgComponent,
      }}
      remarkPlugins={[
        autolink,
        [externalLinks, { target: "_blank", rel: ["noreferrer noopener"] }],
      ]}
      {...rest}
    >
      {content}
    </ReactMarkdown>
  );
}
