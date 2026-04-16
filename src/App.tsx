import topImage from "./assets/TopTodoImage.png";
import TodoList from "./components/features/TodoList";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

const App: React.FC = () => {

  return (
      <div className="flex flex-col gap-8">
        <Header />
        <img src={topImage} alt="Todoのトップ画像" />
        <TodoList />
        <Footer />
      </div>
  );
};

export default App;
