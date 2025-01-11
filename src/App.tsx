import { Header } from "./components/UI/Header/Header";
import { LoginPage } from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="container">
          <LoginPage />
        </div>
      </div>
    </>
  );
}

export default App;
