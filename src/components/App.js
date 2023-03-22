import { useState } from 'react'
import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"

function App() {
  const [comics, setComics] = useState([]);
  const [form, setForm] = useState({
    image_url: '',
    title: '',
    issue: ''
  })
  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer comics={ comics } setComics={ setComics } />
        </div>

        <div className="sidebar">
          <ComicForm form={ form } setForm={ setForm } comics={ comics } setComics={ setComics } />
        </div>

      </div>


    </div>
  );
}

export default App;
