import Action from './components/Action';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { TodoAppContextProvider } from './context/todoContext';


function App() {
  return (
    <section className="todoapp">
      <TodoAppContextProvider>
        <Header ></Header>
        <TodoList></TodoList>
        <Action></Action>
      </TodoAppContextProvider>
    </section>

  )
}

export default App
