import { Container } from '../components/Layout/Container';
import { Main } from '../components/Layout/Main';
import ListMovies from '../components/ListMovies';
import NavBar from '../components/Navbar';

const Index = () => {
  return (
    <Container height='100vh'>
      <NavBar search={true} />
      <Main>
        <ListMovies />
      </Main>
    </Container>
  );
};

export default Index;
