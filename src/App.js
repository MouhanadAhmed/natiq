import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// const Layout = lazy(()=> import('./components/Layout/Layout.jsx'))
// const Home = lazy(()=> import('./components/Home/Home.jsx'));
// const Natiq = lazy(()=> import('./components/Natiq/Natiq.jsx'));
// const About = lazy(()=> import('./components/About/About.jsx'));
// const Loading = lazy(()=> import('./utils/Loading/Loading.jsx'));
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Natiq from './components/Natiq/Natiq.jsx';
import About from './components/About/About.jsx';
import NotFound from './utils/NotFound/NotFound.jsx';
// import Loading from './components/Loading/Loading.jsx';

function App() {
  const queryClient = new QueryClient()
  const routes = createBrowserRouter([
    {
      path:"",
      element: <Layout /> ,
      children:[
        {index:true, element: <Home/> },
        {path:'natiq', element: <Natiq/> },
        {path:'about', element: <About/> },
        {path:"*", element:<NotFound/>},
      ]

    }
  ]);

  return (
<>
<QueryClientProvider client={queryClient}>
{/* <Suspense fallback={<Loading></Loading>}> */}
    <RouterProvider  router={routes}></RouterProvider>
    {/* </Suspense> */}
    </QueryClientProvider>
</>
  );
}

export default App;
