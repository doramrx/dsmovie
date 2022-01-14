import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from './pages/Listing';
import Form from './pages/Form';
import Navbar from "./components/Navbar";

/*
O React busca redirecionar o usuário para todas as rotas que contenham um determinado caminho.
Por exemplo, se você cria uma rota /, ele direciona o usuário para todas as rotas com /
É o que ta acontecendo ali.
Ele acha que esse "/"form faz parte da rota "/"
*/

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Listing />} />
        <Route path="form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
