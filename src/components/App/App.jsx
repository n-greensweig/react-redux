import BookForm from '../BookForm/BookForm';
import BookList from '../BookList/BookList';
// We use useSelector to pull info 
// out of our Redux store.
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import ListName from '../ListName/ListName';
import Axios from 'axios';
import { useEffect } from 'react';

function App() {

  // Connect a local  variable to our reducer
  const count = useSelector(store => store.count);
  const listName = useSelector(store => store.listName);

  // We use dispatch to send data to Redux
  const dispatch = useDispatch();

  const increaseCount = () => {
    // Send data to Redux using dispatch
    const action = { type: 'INCREASE' };
    console.log(count);
    dispatch(action);
  };

  const decreaseCount = () => {
    // Send data to Redux using dispatch
    const action = { type: 'DECREASE' };
    console.log(count);
    dispatch(action);
  };

  // TODO - GET Book List from server
  const getBookList = () => {

    Axios.get('/books')
      .then(response => {
        const action = { type: 'SET_BOOK_LIST', payload: response.data };
        dispatch(action);
      })
      .catch(error => {
        console.error('Error getting book list', error);
        alert('Something went wrong.');
      });

  };

  useEffect(() => {
    getBookList();
  }, []);

  return (
    <div className="App">
      <header><h1>{listName}</h1></header>
      <div>
        <button onClick={increaseCount}>Increase count</button>
        <button onClick={decreaseCount}>Decrease count</button>
      </div>
      <div>Count: {count}</div>
      <h4>Name Your Book List</h4>
      <ListName />
      <main>
        <BookForm getBookList={getBookList} />
        <BookList />
      </main>
    </div>
  );
}

export default App;
