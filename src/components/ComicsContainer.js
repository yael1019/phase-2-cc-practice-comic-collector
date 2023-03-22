import { useEffect } from 'react'
import Comic from "./Comic"

function ComicsContainer({ comics, setComics }) {
  useEffect(() => {
    fetch('http://localhost:8004/comics')
      .then(res => res.json())
      .then(data => setComics(data))
  }, [])

  const handleRemove = (comicId) => {
    fetch(`http://localhost:8004/comics/${comicId}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .then(() => setComics(comics.filter(comic => comic.id !== comicId)))
  }

  const comicsDisplay = comics.map(com => <Comic key={ com.id } com={ com } handleRemove={ handleRemove } />)

  return (
    <>
      { comicsDisplay }
    </>
  )

}

export default ComicsContainer
