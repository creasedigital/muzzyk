import React from "react";
import {
	MdSkipNext,
	MdLoop,
	MdSkipPrevious,
	MdPlayArrow,
	MdPause,
	MdShuffle,
} from "react-icons/md";

const Controls = ({
	isPlaying,
	repeat,
	setRepeat,
	shuffle,
	setShuffle,
	currentSongs,
	handlePlayPause,
	handlePrevSong,
	handleNextSong,
}) => (
	<div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
		<MdLoop
			size={20}
			color={repeat ? "red" : "white"}
			onClick={() => setRepeat((prev) => !prev)}
			className="hidden sm:block cursor-pointer"
		/>
		{currentSongs?.length && (
			<MdSkipPrevious
				size={30}
				color="#FFF"
				className="cursor-pointer"
				onClick={handlePrevSong}
			/>
		)}
		{isPlaying ? (
			<MdPause
				size={45}
				color="#FFF"
				onClick={handlePlayPause}
				className="cursor-pointer"
			/>
		) : (
			<MdPlayArrow
				size={45}
				color="#FFF"
				onClick={handlePlayPause}
				className="cursor-pointer"
			/>
		)}
		{currentSongs?.length && (
			<MdSkipNext
				size={30}
				color="#FFF"
				className="cursor-pointer"
				onClick={handleNextSong}
			/>
		)}
		<MdShuffle
			size={20}
			color={shuffle ? "red" : "white"}
			onClick={() => setShuffle((prev) => !prev)}
			className="hidden sm:block cursor-pointer"
		/>
	</div>
);

export default Controls;
