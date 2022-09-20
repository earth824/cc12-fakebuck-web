import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Header from '../layouts/header/Header';
import FriendPage from '../pages/FriendPage';
import LoginPage from '../pages/LoginPage';
import PostPage from '../pages/PostPage';
import ProfilePage from '../pages/ProfilePage';

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<Header />} />
          <Route path="/friend" element={<FriendPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </>
      ) : (
        <Route path="/" element={<LoginPage />} />
      )}
    </Routes>
  );
}

export default Router;
