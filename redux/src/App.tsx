import Footer from './pages/Footer'
import Header from './pages/Header'
import TodoList from './pages/TodoList'

function App() {
  return (
    <>
      <section className="todoapp">
        <Header></Header>
        <TodoList></TodoList>
        <Footer></Footer>
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>

        <p>
          Template by
          <a href="http://sindresorhus.com">Sindre Sorhus</a>
        </p>

        <p>
          Created by
          <a href="https://github.com/qazs10015/todoList_React"> qazs10015</a>
        </p>
        <p>
          Part of
          <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  )
}

export default App
