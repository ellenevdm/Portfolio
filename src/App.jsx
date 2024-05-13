// import "./App.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/Projects";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "about", element: <AboutPage /> },

			{ path: "projects", element: <ProjectsPage /> },

			{ path: "projects/:projectId", element: <ProjectDetailPage /> },
		],
	},
]);
function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
