type ReactMarkdownComponentProps = Record<string, any>;

export default function ImgComponent(props: ReactMarkdownComponentProps) {
    return `![${props.node.properties.alt}](${props.node.properties.src})`;
}
