// Import necessary React components and hooks for the Navbar component
import React from "react";
import { NavLink } from "react-router-dom";

// Define the Navbar component
const Navbar = () => {
	return (
		// Header section containing navigation links
		<header className="header">
			{/* Home link with a circular background and bold, centered text */}
			<NavLink
				to="/"
				className="w-10 h-10 rounded-lg bg-white items-center
      justify-center flex font-bold  shadow-md"
			>
				{/* Text with a blue gradient effect */}
				<p className="blue-gradient_text">SO</p>
			</NavLink>

			{/* Navigation links for About and Projects */}
			<nav className="flex text-lg gap-7 font-medium">
				{/* NavLink for the About page, with conditional styling based on isActive */}
				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive ? "text-blue-500" : "text-black"
					}
				>
					About
				</NavLink>

				{/* NavLink for the Projects page, with conditional styling based on isActive */}
				<NavLink
					to="/projects"
					className={({ isActive }) =>
						isActive ? "text-blue-500" : "text-black"
					}
				>
					Projects
				</NavLink>
			</nav>
		</header>
	);
};

// Export the Navbar component as the default export
export default Navbar;
