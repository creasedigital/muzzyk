import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		navigate(`/search/${searchTerm}`);
	};

	return (
		<form
			onSubmit={handleSubmit}
			autoComplete="off"
			className="p-2 text-gray-200 focus-within:text-gray-600"
		>
			<label htmlFor="search-field" className="sr-only">
				Search all songs
			</label>
			<div className="flex justify-start items-center flex-row">
				<MdSearch className="w-5 h-5 ml-4 cursor-pointer" />
				<input
					name="search-field"
					autoComplete="off"
					id="search-field"
					placeholder="Search"
					type="search"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="flex-1 bg-transparent border-none outline-none placeholder-gray-100 text-base text-white p-4"
				/>
			</div>
		</form>
	);
};

export default Searchbar;
