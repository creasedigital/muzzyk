import React from "react";
import { MdVolumeUp, MdVolumeOff, MdVolumeDown } from "react-icons/md";

const VolumeBar = ({ value, min, max, onChange, setVolume }) => (
	<div className="hidden lg:flex flex-1 items-center justify-end">
		{value === 0 ? (
			<MdVolumeOff
				size={25}
				color="lime--400"
				onClick={() => setVolume(1)}
			/>
		) : (
			<MdVolumeDown size={25} color="#FFF" onClick={() => setVolume(1)} />
		)}
		<input
			type="range"
			step="any"
			value={value}
			min={min}
			max={max}
			onChange={onChange}
			className="2xl:w-40 lg:w-32 md:w-32 h-1 mx-4 2xl:mx-6 rounded-lg appearance-none bg-lime-400"
		/>
		<MdVolumeUp size={25} color="#FFF" onClick={() => setVolume(0)} />
	</div>
);

export default VolumeBar;
