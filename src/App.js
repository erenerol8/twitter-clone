import Siderbar from "./layout/Sidebar";
import Container from "./layout/Container";
import Content from "./layout/Content";
import Widgets from "./layout/Widgets";

function App() {
  return (
    <Container>
      <Siderbar />
      <Content />
      <Widgets />
    </Container>
  );
}

export default App;
