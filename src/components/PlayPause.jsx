import { MdPlayCircleFilled } from "react-icons/md";
import { MdPauseCircle } from "react-icons/md";

const PlayPause = ({ song, handlePause, handlePlay, isPlaying, activeSong }) =>
	isPlaying && activeSong?.title === song.title ? (
		<MdPauseCircle size={42} color="white" onClick={handlePause} />
	) : (
		<MdPlayCircleFilled size={42} color="#d9f99d" onClick={handlePlay} />
	);

export default PlayPause;
