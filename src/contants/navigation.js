import { FaHome } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md"
import { BiMoviePlay } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

export const navigation = [
    {
        label: "TV Shows",
        href: "tv",
        icon:<MdOutlineLiveTv />
    },
    {
        label: "Movies",
        href: "movie",
        icon:<BiMoviePlay />
    }
]

export const mobileNavigation=[
    {
        label:"Home",
        href:"/",
        icon: <FaHome />
    },
    
    ...navigation,
    {
        label:"search",
        href:"/search",
        icon:<FaSearch/>
    }
]