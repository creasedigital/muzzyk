import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";

const TopChartCard = ({
	song,
	i,
	isPlaying,
	activeSong,
	handlePauseClick,
	handlePlayClick,
}) => (
	<div className="w-full flex flex-row items-center hover:bg-[#0d0d27] py-2 p-4 rounded-lg cursor-pointer mb-2">
		<h3 className="text-white text-base mr-3 font-bold">{i + 1}.</h3>
		<div className="flex flex-1 flex-row justify-between items-center">
			<img
				className="w-20 h-20 rounded-lg"
				src={song?.images?.coverart}
				alt={song?.title}
			/>
			<div className="flex flex-1 flex-col justify-center mx-3">
				<Link to={`/songs/${song.key}`}>
					<p className="text-lg font-semibold text-white">
						{song.title}
					</p>
				</Link>
				<Link to={`/artists/${song?.artists[0].adamid}`}>
					<p className="text-sm font-semibold text-gray-300 mt-1">
						{song?.subtitle}
					</p>
				</Link>
			</div>
		</div>
		<PlayPause
			isPlaying={isPlaying}
			activeSong={activeSong}
			song={song}
			handlePause={handlePauseClick}
			handlePlay={handlePlayClick}
		/>
	</div>
);

const TopPlay = () => {
	const dispatch = useDispatch();
	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const { data } = useGetTopChartsQuery();
	const divRef = useRef(null);

	useEffect(() => {
		divRef.current.scrollIntoView({ behavior: "smooth" });
	});

	const topPlays = data?.slice(0, 5);

	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = (song, i) => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	};

	return (
		<div
			ref={divRef}
			className="xl:ml-6 ml-0 xl:mb-6 flex-1
  xl:max-w-[500px] max-w-full flex flex-col"
		>
			<div className="flex flex-col w-full ">
				<div className="flex flex-row items-center justify-between">
					<h2 className="text-white font-bold">Top Charts</h2>
					<Link to="/top-charts">
						<p className="text-gray-300 text-base cursor-pointer">
							See more
						</p>
					</Link>
				</div>
				<div className="flex flex-col gap-1 mt-4">
					{topPlays?.map((song, i) => (
						<TopChartCard
							song={song}
							i={i}
							key={song.key}
							isPlaying={isPlaying}
							activeSong={activeSong}
							handlePauseClick={handlePauseClick}
							handlePlayClick={() => handlePlayClick(song, i)}
						/>
					))}
				</div>
			</div>
			<div className="flex flex-col w-full mt-8">
				<div className="flex flex-row items-center justify-between">
					<h2 className="text-white font-bold">Top Artists</h2>
					<Link to="/top-artists">
						<p className="text-gray-300 text-base cursor-pointer">
							See more
						</p>
					</Link>
				</div>
				<Swiper
					slidesPerView="auto"
					spaceBetween={15}
					freeMode
					centeredSlides
					centeredSlidesBounds
					modules={[FreeMode]}
					className="mt-4"
				>
					{topPlays?.map((song, i) => (
						<SwiperSlide
							song={song}
							i={i}
							key={song?.key}
							style={{ width: "25%", height: "auto" }}
							className="shadow-lg rounded-full animate-slideright"
						>
							<Link to={`artists/${song?.artists[0].adamid}`}>
								<img
									src={song?.images.background}
									alt="artist image"
									className="w-full rounded-full object-cover"
								/>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default TopPlay;
