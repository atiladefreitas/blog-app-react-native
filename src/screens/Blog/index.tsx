import { Container, Header, Logo } from "./style";
import { StatusBar } from "expo-status-bar";
import logo from "../../assets/Logo.png";
import { BlogCard } from "../../components/BlogCard";

function Blog(): JSX.Element {
  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>
      <BlogCard
        title="id minus libero illum nam ad officiis"
        content="earum voluptatem facere provident blanditiis velit laboriosam npariatur accusamus odio saepe ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
      />
      <StatusBar style="dark" />
    </Container>
  );
}

export { Blog };
