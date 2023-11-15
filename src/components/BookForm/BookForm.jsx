import Axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function BookForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    console.log(`Adding book`, { title, author });

    // TODO - axios request to server to add book
    // let action = { type: 'ADD_BOOK', payload: { title, author } };
    // dispatch(action);
    Axios.post('/books', { title, author })
      .then(response => {
        
        // TODO: Call getBookList via props
        props.getBookList();

      })
      .catch(error => {
        console.error('Error posting a book', error);
        alert('Something went wrong.')
      });

  };

  return (
    <section>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          required
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          required
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </section>
  );
}

export default BookForm;
