import { Route, Routes } from 'react-router-dom';
import FriendPage from './FriendPage';
import Header from './Header';
import LoginPage from './LoginPage';
import PostPage from './PostPage';
import ProfilePage from './ProfilePage';

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Header />}>
        <Route path="" element={<PostPage />} />
        <Route path="friend" element={<FriendPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default Router;
