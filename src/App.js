import React, { Suspense, lazy } from 'react';
import './assets/fonts.css';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { UserContext } from './context/userContext';
const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));

/* App Component */
const AppComponent = () => {
	return (
		<div className="app">
			<UserContext.Provider value="User 1">
				<Header />
				<Outlet />
			</UserContext.Provider>
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppComponent />,
		children: [
			{
				path: '/',
				element: <Body />,
			},
			{
				path: '/about',
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<About />
					</Suspense>
				),
			},
			{
				path: '/contact',
				element: <ContactUs />,
			},
			{
				path: '/restaurant/:resId',
				element: <RestaurantMenu />,
			},
			{
				path: '/grocery',
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<Grocery />
					</Suspense>
				),
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
