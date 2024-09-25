import { useSelector } from "react-redux";
import useTrailerVideo from "../Hooks/useTrailerVideo";

const VideoBackground = () => {
     //console.log(movieId)
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo)
    useTrailerVideo( );
    return (
        <div className="w-screen aspect-auto">
            {/* <iframe
             className="w-screen aspect-video border-none outline-none" 
             src={"https://www.youtube.com/embed/" +trailerVideo?.key+ "?&autoplay=1&mute=1"}
             title="YouTube video player" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe> */}
            <iframe
                className="w-screen aspect-video border-none outline-none bg-transparent"
                src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowtransparency="true"></iframe>
        </div>
    )
}

export default VideoBackground;
// {
//     "id": 365177,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Special Feature - 'Claptrap Interviews Claptrap'",
//         "key": "yTzkISGmd_U",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-08-06T20:06:01.000Z",
//         "id": "66b2c5cf7df273196527c592"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Special Feature - 'Claptrap’s Lost Auditions'",
//         "key": "Qg5hB3Ay4hc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-08-05T19:30:06.000Z",
//         "id": "66b1abfda07e49e82bdc7402"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "360° Behind The Scenes",
//         "key": "8Vv573T0Qjw",
//         "site": "YouTube",
//         "size": 2160,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-08-02T16:41:02.000Z",
//         "id": "66b05361c81d44b0552f3ace"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Final Trailer",
//         "key": "Icnysn53neU",
//         "site": "YouTube",
//         "size": 2160,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-07-24T15:59:52.000Z",
//         "id": "66a13bb034a0e6530da0a861"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Our Pandora",
//         "key": "c9ytRVdG1M4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-07-18T16:04:20.000Z",
//         "id": "66994cd45b4c15b30d4cd6dc"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Special Feature: 'Dysfunctional Family'",
//         "key": "9qXT0jkzAoI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-07-11T16:08:52.000Z",
//         "id": "66920b23622d7885955e7f9b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Exclusive Look",
//         "key": "5S46TCq0Rp4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-06-08T01:00:28.000Z",
//         "id": "6663fbb3cb710035c1361444"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "lU_NKNZljoQ",
//         "site": "YouTube",
//         "size": 2160,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-02-21T17:00:04.000Z",
//         "id": "65d62efdc8a5ac0148e10442"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Trailer Tease",
//         "key": "I_-ctcbo26U",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-02-20T18:05:17.000Z",
//         "id": "65d536e4ea37e001836dfbcf"
//       }
//     ]
//   }