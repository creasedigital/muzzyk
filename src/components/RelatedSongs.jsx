import SongBar from "./songBar";

const RelatedSongs = ({
	data,
	isPlaying,
	activeSong,
	handlePlayClick,
	handlePauseClick,
	artistId,
}) => {
	return (
		<div className="flex flex-col">
			<h1 className="text-3xl text-white font-semibold">
				Related Songs:
			</h1>
			<div className="flex flex-col w-full mt-6">
				{data?.map((song, i) => (
					<SongBar
						key={`${song.key}${i}-${artistId}`}
						song={song}
						i={i}
						isPlaying={isPlaying}
						activeSong={activeSong}
						handlePlayClick={handlePlayClick}
						handlePauseClick={handlePauseClick}
						artistId={artistId}
					/>
				))}
			</div>
		</div>
	);
};

export default RelatedSongs;
