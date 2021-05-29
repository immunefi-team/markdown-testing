import * as React from "react";
import Markdown from "../components/Markdown";

export default function Home() {
  const [content, setContent] = React.useState(
    "[XSS ATTACK](javascript:prompt(document.cookie))"
  );

  return (
    <div>
      <textarea
        style={{ width: "100vw" }}
        rows={20}
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
      />
      <hr />
      <Markdown content={content} />
    </div>
  );
}
