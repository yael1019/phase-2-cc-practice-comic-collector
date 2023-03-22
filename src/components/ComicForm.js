function ComicForm({ form, setForm, comics, setComics }) {
  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})
  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:8004/comics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(resp => resp.json())
      .then(data => setComics([...comics, data]))
    setForm({
      image_url: '',
      title: '',
      issue: ''
    })
  }
  return (

    <form className="comic-form" onSubmit={ handleSubmit }>

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input name="image_url" value={ form.image_url } onChange={ handleChange } />

      <label htmlFor="title">Title: </label>
      <input name="title" value={ form.title } onChange={ handleChange } />

      <label htmlFor="issue">Issue Number: </label>
      <input name="issue" type="number" value={ form.issue } onChange={ handleChange } />

      {/* <label htmlFor="description">Description: </label>
      <input name="description" /> */}

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
