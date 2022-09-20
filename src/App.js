import Router from './route/Router';
import { ToastContainer } from 'react-toastify';
import { useLoading } from './contexts/LoadingContext';
import Spinner from './components/ui/Spinner';

function App() {
  const { loading } = useLoading();

  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer autoClose="2500" theme="colored" />
    </>
  );
}

export default App;
