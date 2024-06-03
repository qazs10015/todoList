import Header from './components/Header';
import TodoList from './components/TodoList';
import { TodoAppContextProvider } from './context/todoContext';


function App() {
  return (
    <TodoAppContextProvider>
      <Header ></Header>
      <TodoList></TodoList>
    </TodoAppContextProvider>

  )
}

export default App
