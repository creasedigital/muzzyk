import {
	MdOutlineHeadset,
	MdOutlineHome,
	MdOutlineCameraswitch,
	MdOutlinePeople,
} from "react-icons/md";

export const genres = [
	{ title: "Afro beats", value: "AFRO_BEATS" },
	{ title: "Country", value: "COUNTRY" },
	{ title: "Worldwide", value: "WORLDWIDE" },
	{ title: "Reggae", value: "REGGAE_DANCE_HALL" },
	{ title: "Pop", value: "POP" },
	{ title: "Hip-Hop", value: "HIP_HOP_RAP" },
	{ title: "Dance", value: "DANCE" },
	{ title: "Electronic", value: "ELECTRONIC" },
	{ title: "Soul", value: "SOUL_RNB" },
	{ title: "Alternative", value: "ALTERNATIVE" },
	{ title: "Rock", value: "ROCK" },
	{ title: "Latin", value: "LATIN" },
	{ title: "Film", value: "FILM_TV" },
	{ title: "House", value: "HOUSE" },
	{ title: "K-Pop", value: "K_POP" },
];

export const links = [
	{ name: "Discover", to: "/", icon: MdOutlineHome },
	{ name: "Around You", to: "/around-you", icon: MdOutlineCameraswitch },
	{ name: "Top Artists", to: "/top-artists", icon: MdOutlinePeople },
	{ name: "Top Charts", to: "/top-charts", icon: MdOutlineHeadset },
];
