import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
	const dispatch = useDispatch();
	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = () => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	};

	return (
		<div className="w-[250px] p-4 bg-white/5 bg-opacity-80 flex flex-col backdrop-blur-sm animate-slideup rounded-xl cursor-pointer">
			<div className="relative w-full h-56 group">
				<div
					className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
						activeSong?.title === song.title
							? "flex bg-black bg-opacity-70"
							: "hidden"
					}`}
				>
					<PlayPause
						song={song}
						handlePause={handlePauseClick}
						handlePlay={handlePlayClick}
						isPlaying={isPlaying}
						activeSong={activeSong}
					/>
				</div>
				<img alt="song_img" src={song.images?.coverart} />
			</div>
			<div className="mt-4 flex flex-col">
				<p className="font-semibold text-lg text-lime-100 truncate">
					<Link to={`/songs/${song?.key}`}>{song.title}</Link>
				</p>
				<p className="font-light text-sm text-lime-100 truncate">
					<Link
						to={
							song.artists
								? `/artists/${song?.artists[0]?.adamid}`
								: "/top-artists"
						}
					>
						{song.subtitle}
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SongCard;
