import { Container, Text, Title } from "./style";

interface IBlogCardProps {
  title: string;
  content: string;
}

function BlogCard({ title, content }: IBlogCardProps): JSX.Element {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{content}</Text>
    </Container>
  );
}

export { BlogCard };
