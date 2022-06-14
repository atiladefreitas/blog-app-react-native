import { Container, Text, CardContainer, Wrapper, Title } from "./style";

interface IBlogCardProps {
  title: string;
  content: string;
}

function BlogCard({ title, content }: IBlogCardProps): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <CardContainer>
          <Title>{title}</Title>
          <Text>{content}</Text>
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export { BlogCard };
