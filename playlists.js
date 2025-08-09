/**
 * Generates an array of dummy song objects for generic albums.
 * This function is used for years where custom song data is not provided.
 * @param {string} albumId - The ID of the album.
 * @param {string} titlePrefix - A prefix for the song titles.
 * @param {number} numSongs - The number of songs to generate.
 * @returns {Array<object>} An array of song objects with placeholder URLs.
 */
function generateSongs(albumId, titlePrefix, numSongs = 5) {
    const songs = [];
    const genericSongUrl = "https://res.cloudinary.com/djym0kq6s/video/upload/v1750268513/Kodakaa_Koteswar_Rao_kxgbij.mp3";

    for (let i = 1; i <= numSongs; i++) {
        songs.push({
            id: `${albumId}-song${i}`,
            title: `${titlePrefix} (Song ${i})`,
            artist: `Generic Artist ${Math.floor(Math.random() * 5) + 1}`,
            duration: `3:${Math.floor(Math.random() * 50) + 10}`,
            url: genericSongUrl
        });
    }
    return songs;
}
const customPlaylistsAlbumsData = [
    {
        id: 'playlist-anirudh',
        title: 'Anirudh Hits',
        actors: '1 song',
        cover: 'https://res.cloudinary.com/unanimouscreator/image/upload/v1751817483/Anirudh_tucx5v.jpg', // Replace with a real movie poster/album cover
        songs: [
            {
                id: '2025-kingdom-song1',
                title: "Hridayam Lopala",
                artist: "Anirudh Ravichander, Anumita Nadesan",
                duration: "2:14",
                url: "https://res.cloudinary.com/unanimouscreator/video/upload/v1750762769/Hridayam_Lopala_c5361q.mp3"
            }
        ]
    },

    {
        id: 'playlist-anirudh',
        title: 'Anirudh Hits',
        actors: '1 song',
        cover: 'https://res.cloudinary.com/unanimouscreator/image/upload/v1751817483/Anirudh_tucx5v.jpg', // Replace with a real movie poster/album cover
        songs: [
            {
                id: '2025-kingdom-song1',
                title: "Hridayam Lopala",
                artist: "Anirudh Ravichander, Anumita Nadesan",
                duration: "2:14",
                url: "https://res.cloudinary.com/unanimouscreator/video/upload/v1750762769/Hridayam_Lopala_c5361q.mp3"
            }
        ]
    },
   
    // You can add more playlist objects here following the same structure
]