import * as React from "react";

type ReactMarkdownComponentProps = Record<string, any>;

function AutolinkedAnchor(props: ReactMarkdownComponentProps) {
    return <a {...props.node.properties}>{props.children}</a>;
}

function NonAutolinkedAnchor(props: ReactMarkdownComponentProps) {
    return (
        <span className="whitespace-pre-wrap">
            [{props.children}](
            <a {...props.node.properties} href={props.href}>
                {props.node.properties?.href}
            </a>
            )
        </span>
    );
}

export default function AComponent(props: ReactMarkdownComponentProps) {
    const linkText = props.children[0];
    const offsetDistance = props.node.position.end.offset - props.node.position.start.offset;
    const isAutolinkedAnchor = linkText.length === offsetDistance;

    return isAutolinkedAnchor ? <AutolinkedAnchor {...props} /> : <NonAutolinkedAnchor {...props} />;
}
