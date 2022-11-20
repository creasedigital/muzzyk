import { useState } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

import { logo } from "../assets";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => (
	<div className="mt-10">
		{links.map((lnk) => (
			<NavLink
				key={lnk.name}
				className="flex flex-row justify-start items-center my-8 text-sm font-medium text-[gold] hover:text-lime-200"
				to={lnk.to}
				onClick={() => handleClick && handleClick()}
			>
				<lnk.icon className="w-6 h-6 mr-2" />
				{lnk.name}
			</NavLink>
		))}
	</div>
);

const Sidebar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<>
			<div className="md:flex hidden flex-col py-10 px-4 bg-slate-900">
				<img
					src={logo}
					alt="logo"
					className="w-full object-contain h-14"
				/>
				<NavLinks />
			</div>
			<div className="absolute block md:hidden top-6 right-3">
				{mobileMenuOpen ? (
					<MdClose
						onClick={() => setMobileMenuOpen(false)}
						className="w-6 h-6 mr-2 text-white"
					/>
				) : (
					<MdOutlineMenu
						onClick={() => setMobileMenuOpen(true)}
						className="w-6 h-6 mr-2 text-white"
					/>
				)}
			</div>
			<div
				className={`absolute top-0 h-screen bg-gradient-to-tr from-white/10 to-lime-800 backdrop-blur-lg
      z-10 p-6 md:hidden smooth-transition ${
			mobileMenuOpen ? "left-0" : "-left-full"
		}`}
			>
				<img
					src={logo}
					alt="logo"
					className="w-full object-contain h-14"
				/>
				<NavLinks handleClick={() => setMobileMenuOpen(false)} />
			</div>
		</>
	);
};

export default Sidebar;
