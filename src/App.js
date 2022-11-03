
import { useEffect, useState } from 'react';
import Notice from './Components/Notice';
import NoticeUI from './Notices/NoticeUI';
import RegisterUI from './Register/RegisterUI';

function App() {
  const [user, setUser] = useState();

  // useEffect(() => {
  //   tokenFetch(setUser);
  // }, [user])

  const handleLogout = () => {
    setUser();
  }
  console.log("testing user state in app.js" + user);
  return (
    <div>
      {/* { !user ? <RegisterUI setUser = { setUser } user = { user } /> :
      <h1>hi</h1>} */}
      {/* <NoticeUI /> */}
      <Notice />
    </div>
  );
}

export default App;
