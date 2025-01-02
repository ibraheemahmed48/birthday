
import { Routes, Route, useNavigate, } from 'react-router-dom'
import { useEffect } from 'react';
import './App.css'
import Login from './pages/login/login'
import NotFound from './pages/notFound'
import MainPage from './pages/homePage/homePage';
import SecondPage from './pages/secondPage/secondPage';
import ReactPlayer from 'react-player';
import useAppStore from './store/appStore';
import { IMAGE_BASE_URL } from './api';

const App = () => {
  const { isOpenSound, isOpenSecondSound } = useAppStore()

  const navigate = useNavigate();
  const isLogin = localStorage.getItem('isLogin');




  useEffect(() => {
    if (!isLogin || isLogin !== 'true') {
      navigate('/login');
      console.log("Login")
    }
  }, []);

  const routes = [
    { path: '/', element: <Login /> },
    { path: '/login', element: <Login /> },
    { path: '/birthday', element: <MainPage /> },
    { path: '/second', element: <SecondPage /> },
    { path: '*', element: <NotFound /> },
  ];

  return (
    <>
      <ReactPlayer
        url={`${IMAGE_BASE_URL}/happy-birthday-jazz-171120.mp3`}
        playing={isOpenSound}
        loop={true}
        muted={false}
        volume={0.5}
        height={0}
      />
      <ReactPlayer
        url={`${IMAGE_BASE_URL}/happy-birthday-jazz-171120.mp3`}
        playing={!isOpenSecondSound}
        loop={true}
        muted={false}
        volume={0.5}
        height={0}
      />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </>

  )
}

export default App
