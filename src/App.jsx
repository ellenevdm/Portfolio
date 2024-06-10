// import "./App.scss";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import ContactModal from "./components-new/contact/ContactModal";
import Footer from "./components-new/layout/Footer";
import HomePage from "./pages/HomePage";
import MainNavigation from "./components-new/layout/MainNavigation";
import { ModalProvider } from "./context/ModalContext";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectModal from "./components-new/project/ProjectModal";
import { ProjectProvider } from "./context/ProjectContext";
import { useState } from "react";

// import RootLayout from "./pages -old/Root";

function App() {
	return (
		<ModalProvider>
			<ProjectProvider>
				<Router>
					<MainNavigation />
					<main>
						<Routes>
							<Route
								exact
								path="/"
								element={<HomePage />}
							/>
							<Route
								path="/about"
								element={<AboutPage />}
							/>
							<Route
								exact
								path="/projects"
								element={<ProjectListPage />}
							/>
							<Route
								path="/projects/:id"
								element={<ProjectDetailPage />}
							/>
						</Routes>
					</main>
					<Footer />
					<ContactModal />
					<ProjectModal />
				</Router>
			</ProjectProvider>
		</ModalProvider>
	);
}

export default App;
