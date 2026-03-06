import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const Faculties = lazy(() => import('./pages/Faculties'));
const Contact = lazy(() => import('./pages/Contact'));

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<Loader />}>
                <Layout />
            </Suspense>
        ),
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/courses', element: <Courses /> },
            { path: '/faculties', element: <Faculties /> },
            { path: '/contact', element: <Contact /> },
        ],
    },
]);

function App() {
    return (
        <div className="font-sans">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
