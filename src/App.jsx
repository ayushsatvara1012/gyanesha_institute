import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Faculties from './pages/Faculties';
import Contact from './pages/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
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
