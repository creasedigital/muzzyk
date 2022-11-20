import SongBar from "./songBar";

const RelatedSongs = ({
	data,
	isPlaying,
	activeSong,
	handlePlayClick,
	handlePauseClick,
}) => {
	return (
		<div className="flex flex-col">
			<h1 className="text-3xl text-white font-semibold">Songs:</h1>
			<div className="flex flex-col w-full mt-6">
				{data?.map((song, i) => (
					<SongBar
						key={`${song.key}-${artistId}`}
						song={song}
						isPlaying={isPlaying}
						activeSong={activeSong}
						handlePlayClick={handlePlayClick}
						handlePauseClick={handlePauseClick}
					/>
				))}
			</div>
		</div>
	);
};

export default RelatedSongs;
