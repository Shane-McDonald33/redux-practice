import Counter from './Components/Counter'
import Auth from './Components/Auth'
import { Fragment } from 'react'
import Header from './Components/Header'
import UserProfile from './Components/UserProfile';
import { useSelector } from 'react-redux'

function App() {
const auth = useSelector((state) => state.auth.isAuthed)
  return (
  <Fragment>
    <Header/>
    {!auth && <Auth />}
    {auth && <UserProfile/>}
    <Counter/>
  </Fragment> 
  );
}

export default App;
