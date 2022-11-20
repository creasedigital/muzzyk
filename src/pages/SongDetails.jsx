import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
	useGetSongDetailsQuery,
	useGetSongRelatedQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
	const dispatch = useDispatch();
	const { songid } = useParams();

	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = (song, i) => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	};

	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const {
		data: songData,
		error,
		isFetching: isFetchingSongDetails,
	} = useGetSongDetailsQuery({ songid });

	const { data: relatedSongData, isFetching: isFetchingRelatedSongs } =
		useGetSongRelatedQuery({ songId });

	if (isFetchingRelatedSongs || isFetchingSongDetails)
		return <Loader title="loading song details" />;

	if (error) return <Error />;

	return (
		<div className="flex flex-col">
			<DetailsHeader artistId="" songData={songData} />
			<div className="mb-10">
				<h2 className="font-bold text-white text-3xl">Lyrics</h2>
				<div className="mt-5">
					{songData?.sections[1].type === "LYRICS" ? (
						songData?.sections[1].text.map((line, i) => (
							<p className="text-gray-200 text-base my-1">
								{line}
							</p>
						))
					) : (
						<p className="text-gray-200 text-base my-1">
							No lyrics found!
						</p>
					)}
				</div>
			</div>

			<RelatedSongs
				data={relatedSongData}
				isPlaying={isPlaying}
				activeSong={activeSong}
				handlePlayClick={handlePlayClick}
				handlePauseClick={handlePauseClick}
			/>
		</div>
	);
};

export default SongDetails;
