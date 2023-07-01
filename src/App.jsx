import { Provider } from 'react-redux';
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import store from './redux/store';
import PostList from './components/PostList';

function App() {
  return (
    <Provider store={store}>
      <PostList />
    </Provider>
  );
}

export default App
