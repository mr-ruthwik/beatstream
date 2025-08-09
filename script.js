const whHomeView = document.querySelector('.wh_home_view');
const whSearchView = document.querySelector('.wh_search_view');
const whPlaylistsView = document.querySelector('.wh_playlists_view');
const whAlbumDetailView = document.querySelector('.wh_album_detail_view');
const whPlayPauseButton = document.querySelector('.wh_play_pause_button');
const whAudioPlayer = document.getElementById('wh_audio_player');
const whProgressBar = document.querySelector('.wh_progress_slider');
const whCurrentTime = document.querySelector('.wh_current_time');
const whTotalTime = document.querySelector('.wh_total_time');
const whNowPlayingCover = document.querySelector('.wh_now_playing_cover');
const whNowPlayingTitle = document.querySelector('.wh_now_playing_title');
const whNowPlayingArtist = document.querySelector('.wh_now_playing_artist');
const whNextButton = document.querySelector('.wh_next_button');
const whPrevButton = document.querySelector('.wh_prev_button');
const whAlbumsGrid = document.querySelector('.wh_albums_grid');
const whAlbumCover = document.querySelector('.wh_album_cover');
const whAlbumTitle = document.querySelector('.wh_album_title');
const whAlbumArtist = document.querySelector('.wh_album_artist');
const whAlbumYear = document.querySelector('.wh_album_year');
const whAlbumSongList = document.querySelector('.wh_album_song_list');
const whShuffleAlbumButton = document.querySelector('.wh_shuffle_album_button'); // NEW
const whShuffleAlbumIcon = whShuffleAlbumButton.querySelector('i'); // Get the icon element
const whShuffleAlbumText = whShuffleAlbumButton.querySelector('span'); // Get the text element
const whShuffleButtonIcon = whShuffleAlbumButton.querySelector('i');
const whShuffleButtonText = whShuffleAlbumButton.querySelector('span');

const whSearchInput = document.querySelector('.wh_search_input');
const whSearchResultsGrid = document.querySelector('.wh_search_results_grid');
const whNavItems = document.querySelectorAll('.wh_nav_item');
const whRepeatButton = document.querySelector('.wh_repeat_button');
const whBackButton = document.querySelector('.wh_back_button');
const whAppTitle = document.querySelector('.wh_app_title');
const whYearsContainer = document.getElementById('wh_years_container');
const whMainContent = document.querySelector('.wh_main_content');
const whSubmitSongsButton = document.getElementById('wh_submit_songs_button');
const whTimerButton = document.querySelector('.wh_timer_button');
const whTimerOptionsModal = document.getElementById('wh_timer_options_modal');
const whTimerOptionsList = document.getElementById('wh_timer_options_list');
const whTimerCloseButton = document.querySelector('.timer-close-button');
const whCountdownDisplay = document.getElementById('wh_countdown_display');
const whCancelTimerBtn = document.querySelector('#wh_cancel_timer_btn');
const whTimerCancelledModal = document.getElementById('wh_timer_cancelled_modal');
const whCancelledTimerCloseButton = document.querySelector('.cancelled-timer-close-button');
const whOkCancelledTimerBtn = document.querySelector('#wh_ok_cancelled_timer_btn');
const whTimerEndedModal = document.getElementById('wh_timer_ended_modal');
const whTimerEndedCloseButton = whTimerEndedModal.querySelector('.timer-ended-close-button');
const whOkTimerEndedButton = document.getElementById('wh_ok_timer_ended_btn');
const whAboutModal = document.getElementById('wh_about_modal');
const whAboutButton = document.querySelector('[data-modal-target="#wh_about_modal"]');
const whAboutCloseButtons = whAboutModal.querySelectorAll('.wh_close_button');
const whMaximizedPlayerView = document.getElementById('wh_maximized_player_view');
const whMaxBackBtn = document.querySelector('.wh_max_back_button');
const whMaxAlbumTitle = document.querySelector('.wh_max_album_title');
const whMaxAlbumArtist = document.querySelector('.wh_max_album_artist');
const whMaxAlbumYear = document.querySelector('.wh_max_album_year');
const whMaxAlbumCover = document.querySelector('.wh_max_album_cover');
const whNowPlayingCoverContainer = document.querySelector('.wh_now_playing_cover_container');
const whMaximizeOverlay = document.querySelector('.wh_maximize_overlay');
const whPlayerBar = document.querySelector('.wh_player_bar');
const whMaximizedPlayerControlsContainer = document.getElementById('wh_maximized_player_controls_container');
const whNoSongModal = document.getElementById('wh_no_song_modal');
const whNoSongCloseButton = whNoSongModal.querySelector('.no-song-close-button');
const whOkNoSongButton = document.getElementById('wh_ok_no_song_btn');
const whNowPlayingArtistContainer = document.querySelector('.wh_now_playing_artist');
const whNowPlayingArtistContent = whNowPlayingArtistContainer.querySelector('.scrolling-content');
const whMaxLyricsContainer = document.querySelector('.wh_max_lyrics_container'); // New
const whLyricsContent = document.querySelector('.wh_lyrics_content'); // New

// remove play album button 

const whPlayAlbumButton = document.querySelector('.wh_play_album_button');
whRepeatButton.addEventListener('click', toggleRepeat);


let isPlaying = false; 
let whCurrentSongIndex = 0;
let whCurrentAlbum = null;
let whIsPlaying = false;
let whShuffleMode = false;
let whRepeatMode = false;
whRepeatButton.classList.remove('active');
let whCountdownInterval = null;
let whTimerEndTime = null;
let whPreviousAppState = null;
let whAllSongs = [];
let whShuffledAllSongs = [];
let whCurrentAlbumSongs = [];
let isRepeatActive = false;
let currentAlbumSongs = []; 
let shuffledAlbumSongs = [];
let isShuffleMode = false; 

whShuffleMode = false;
whShuffleAlbumButton.classList.remove('active');
whShuffleAlbumIcon.classList.remove('fa-sync');
whShuffleAlbumIcon.classList.add('fa-shuffle');
whShuffleAlbumText.textContent = 'Shuffle Off';

function toggleShuffleMode() {
    shuffleMode = !shuffleMode;
    if (shuffleMode) {
        whShuffleAlbumButton.classList.add('wh_active');
        whMaxShuffleButton.classList.add('wh_active');
        whShuffleButtonIcon.style.color = '#fff';
        whShuffleButtonText.style.color = '#fff';
        shuffledSongs = shuffleSongs(currentSongs);
        const currentSong = whAudioPlayer.src;
        const currentSongInShuffled = shuffledSongs.find(song => song.url === currentSong);
        if (currentSongInShuffled) {
            currentSongIndex = shuffledSongs.indexOf(currentSongInShuffled);
        }
    } else {
        whShuffleAlbumButton.classList.remove('wh_active');
        whMaxShuffleButton.classList.remove('wh_active');
        whShuffleButtonIcon.style.color = '';
        whShuffleButtonText.style.color = '';
        const currentSong = whAudioPlayer.src;
        const currentSongInOriginal = currentSongs.find(song => song.url === currentSong);
        if (currentSongInOriginal) {
            currentSongIndex = currentSongs.indexOf(currentSongInOriginal);
        }
    }
}



function toggleRepeat() {
    isRepeatActive = !isRepeatActive;
    whRepeatButton.classList.toggle('active', isRepeatActive);
    whAudioPlayer.loop = isRepeatActive;
}


function whDisplayAlbumDetail(album) {
    whAlbumTitle.textContent = album.title;
    whAlbumYear.textContent = album.year || '';
    whAlbumSongList.innerHTML = '';
    whCurrentAlbumSongs = [...album.songs];
    whAlbumArtist.textContent = album.actors || 'Various Artists';

    whPlayAlbumButton.style.display = 'block';
    whAlbumCover.src = album.imageUrl || album.cover;

    if (!album.songs || album.songs.length === 0) {
        const noSongsMessage = document.createElement('p');
        noSongsMessage.textContent = 'No songs in this album/playlist.';
        noSongsMessage.style.color = 'var(--light-text-color)';
        noSongsMessage.style.textAlign = 'center';
        noSongsMessage.style.marginTop = '20px';
        whAlbumSongList.appendChild(noSongsMessage);
        return;
    }

    if (whIsPlaying && whCurrentAlbum && whCurrentAlbum.id === album.id) {
        whPlayAlbumButton.innerHTML = '<i class="fas fa-pause"></i> Pause';
    } else {
        whPlayAlbumButton.innerHTML = '<i class="fas fa-play"></i> Play';
    }

    album.songs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.classList.add('wh_album_song_item');
        songItem.dataset.songId = song.id;
        if (whAudioPlayer.src && whAudioPlayer.src.includes(song.url.split('/').pop()) && whCurrentAlbum && whCurrentAlbum.id === album.id && whCurrentSongIndex === index) {
            songItem.classList.add('wh_playing_song');
        }
        songItem.innerHTML = `
            <span class="wh_song_index">${index + 1}.</span>
            <div class="wh_song_details">
                <span class="wh_song_title">${song.title}</span>
                <span class="wh_song_artist">${song.artist}</span>
            </div>
            <span class="wh_song_duration">${song.duration}</span>
        `;
        songItem.addEventListener('click', () => {
            whCurrentSongIndex = index;
            whPlaySong(song, album, songItem);
        });
        whAlbumSongList.appendChild(songItem);
    });
}



function whPlayNextSong() {
    if (whCurrentAlbum && whCurrentAlbumSongs.length > 0) {
        whCurrentSongIndex++;
        if (whCurrentSongIndex >= whCurrentAlbumSongs.length) {
            if (whRepeatMode) {
                whCurrentSongIndex = 0;
            } else {
                whAudioPlayer.pause();
                whIsPlaying = false;
                whPlayPauseButton.innerHTML = '<i class="fas fa-play"></i>';
                whPlayAlbumButton.innerHTML = '<i class="fas fa-play"></i> Play';
                return;
            }
        }
        whPlaySong(whCurrentAlbumSongs[whCurrentSongIndex], whCurrentAlbum);
    } else {
        whShowNoSongModal();
    }
}

function whPlayPrevSong() {
    if (whCurrentAlbum && whCurrentAlbumSongs.length > 0) {
        whCurrentSongIndex--;
        if (whCurrentSongIndex < 0) {
            whCurrentSongIndex = whCurrentAlbumSongs.length - 1;
        }
        whPlaySong(whCurrentAlbumSongs[whCurrentSongIndex], whCurrentAlbum);
    } else {
        whShowNoSongModal();
    }
}

function whPlayNextSong() {
    if (whCurrentAlbum && whCurrentAlbumSongs.length > 0) {
        whCurrentSongIndex++;
        if (whCurrentSongIndex >= whCurrentAlbumSongs.length) {
            if (whRepeatMode) {
                whCurrentSongIndex = 0;
            } else {
                whAudioPlayer.pause();
                whIsPlaying = false;
                whPlayPauseButton.innerHTML = '<i class="fas fa-play"></i>';
                whPlayAlbumButton.innerHTML = '<i class="fas fa-play"></i> Play';
                return;
            }
        }
        whPlaySong(whCurrentAlbumSongs[whCurrentSongIndex], whCurrentAlbum);
    } else {
        whShowNoSongModal();
    }
}

function whPlayPrevSong() {
    if (whCurrentAlbum && whCurrentAlbumSongs.length > 0) {
        whCurrentSongIndex--;
        if (whCurrentSongIndex < 0) {
            whCurrentSongIndex = whCurrentAlbumSongs.length - 1;
        }
        whPlaySong(whCurrentAlbumSongs[whCurrentSongIndex], whCurrentAlbum);
    } else {
        whShowNoSongModal();
    }
}




if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            if (Notification.permission === 'default') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                    }
                });
            }
        })
        .catch(error => {
        });

    navigator.serviceWorker.addEventListener('message', event => {
        if (event.data && event.data.type === 'MEDIA_ACTION') {
            const action = event.data.action;
            if (action === 'play') {
                if (!whIsPlaying) whTogglePlayPause();
            } else if (action === 'pause') {
                if (whIsPlaying) whTogglePlayPause();
            } else if (action === 'next') {
                whPlayNextSong();
            } else if (action === 'prev') {
                whPlayPrevSong();
            }
        }
    });
}

function whPopulateAllSongs() {
    whAllSongs = [];
    if (typeof customYearAlbumsData !== 'undefined') {
        for (const year in customYearAlbumsData) {
            customYearAlbumsData[year].forEach(album => {
                if (album.songs) {
                    album.songs.forEach(song => {
                        whAllSongs.push({ ...song, albumImageUrl: album.imageUrl, albumTitle: album.title, albumArtist: album.actors, albumYear: album.year });
                    });
                }
            });
        }
    } else {
    }
    if (typeof customPlaylistsAlbumsData !== 'undefined') {
        customPlaylistsAlbumsData.forEach(playlist => {
            if (playlist.songs) {
                playlist.songs.forEach(song => {
                    whAllSongs.push({ ...song, albumImageUrl: playlist.cover, albumTitle: playlist.title, albumArtist: 'Various Artists', albumYear: '' });
                });
            }
        });
    } else {
    }
}


function loadPlaylists() {
    whPlaylistsView.innerHTML = '';

    if (typeof customPlaylistsAlbumsData === 'undefined') {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Playlists data is not available. Please ensure data.js or playlists.js is loaded correctly.';
        errorMessage.style.color = 'var(--light-text-color)';
        errorMessage.style.textAlign = 'center';
        errorMessage.style.marginTop = '20px';
        whPlaylistsView.appendChild(errorMessage);
        return;
    }

    const playlistsGrid = document.createElement('div');
    playlistsGrid.classList.add('wh_playlists_grid');

    customPlaylistsAlbumsData.forEach(playlist => {
        const playlistCard = document.createElement('div');
        playlistCard.classList.add('wh_playlist_card');
        playlistCard.setAttribute('data-playlist-id', playlist.id);

        playlistCard.innerHTML = `
            <img src="${playlist.cover}" alt="${playlist.title} Cover" class="wh_playlist_cover">
            <h4 class="wh_playlist_title">${playlist.title}</h4>
            <p class="wh_playlist_song_count">${playlist.songs.length} songs</p>
        `;
        playlistCard.addEventListener('click', () => {
            whCurrentAlbum = playlist;
            whCurrentSongIndex = 0;
            whNavigateTo('album_detail', playlist);
        });

        playlistsGrid.appendChild(playlistCard);
    });

    whPlaylistsView.appendChild(playlistsGrid);
}


function whShowView(viewName) {
    document.querySelectorAll('.wh_view').forEach(v => {
        v.classList.remove('active');
    });
    const targetView = document.querySelector(`.wh_${viewName}_view`);
    if (targetView) {
        targetView.classList.add('active');
        whMainContent.scrollTop = 0;

        if (viewName === 'playlists') {
            loadPlaylists();
        }
    }
}

function whShuffleAllSongs() {
    whShuffledAllSongs = shuffleArray([...whAllSongs]);
}

function whUpdateNavActiveState(viewName) {
    whNavItems.forEach(item => item.classList.remove('active'));
    const navItemToActivate = document.querySelector(`[data-view="${viewName}"]`);
    if (navItemToActivate) {
        navItemToActivate.classList.add('active');
    }
}

whNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const viewName = item.dataset.view;
        const modalTarget = item.dataset.modalTarget;

        if (modalTarget) {
            const modal = document.querySelector(modalTarget);
            if (modal) {
                modal.style.display = 'flex';
            }
        } else if (viewName) {
            whNavigateTo(viewName); // Call whNavigateTo to handle history
        }
    });
});

// MODIFIED: Added pushState parameter and history management
function whNavigateTo(viewName, data = null, pushState = true) {
    whShowView(viewName);
    whUpdateNavActiveState(viewName);

    let urlHash = `#${viewName}`;
    let stateObject = { view: viewName, data: null };

    if (viewName === 'album_detail' && data) {
        whDisplayAlbumDetail(data);
        urlHash = `#album/${data.id}`;
        stateObject.data = data.id; // Store only ID for history state
    }

    if (pushState) {
        history.pushState(stateObject, '', urlHash);
    }
}
// END MODIFIED

whBackButton.addEventListener('click', () => {
    // When the back button is clicked, we want to go back in the app's history.
    // Instead of directly calling whNavigateTo, we can simulate a browser back action
    // which will trigger the popstate event, handled below.
    history.back();
});


whAppTitle.addEventListener('click', (e) => {
    e.preventDefault();
    whNavigateTo('home');
});


function whFormatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
// END NEW




function whFindAlbumForSong(songId) {
    if (typeof customYearAlbumsData !== 'undefined') {
        for (const year in customYearAlbumsData) {
            for (const album of customYearAlbumsData[year]) {
                if (album.songs.some(song => song.id === songId)) {
                    return album;
                }
            }
        }
    }

    if (typeof customPlaylistsAlbumsData !== 'undefined') {
        for (const playlist of customPlaylistsAlbumsData) {
            if (playlist.songs.some(song => song.id === songId)) {
                return playlist;
            }
        }
    }
    return null;
}

// NEW: Function to get album data by ID
function whGetAlbumById(albumId) {
    if (typeof customYearAlbumsData !== 'undefined') {
        for (const year in customYearAlbumsData) {
            const foundAlbum = customYearAlbumsData[year].find(album => album.id === albumId);
            if (foundAlbum) return foundAlbum;
        }
    }
    if (typeof customPlaylistsAlbumsData !== 'undefined') {
        const foundPlaylist = customPlaylistsAlbumsData.find(playlist => playlist.id === albumId);
        if (foundPlaylist) return foundPlaylist;
    }
    return null;
}
// END NEW


function whPlaySong(song, albumInfo, songItem = null) {
    // Check if the song being requested is already playing or paused.
    // The includes() check is a robust way to compare URLs without issues from query strings or different path formats.
    const isSameSong = whAudioPlayer.src.includes(song.url.split('/').pop());
    
    // If it's the same song, we just want to toggle the play/pause state.
    if (isSameSong) {
        whTogglePlayPause();
        // Return from the function to prevent the rest of the code from running and restarting the song.
        return;
    }

    // The rest of the function remains the same and handles playing a new song.
    document.querySelectorAll('.wh_album_song_item.wh_playing_song').forEach(item => {
        item.classList.remove('wh_playing_song');
    });

    if (songItem) {
        songItem.classList.add('wh_playing_song');
    } else {
        if (whCurrentAlbum && whCurrentAlbum.songs) {
            const currentDisplayedSongIndex = whCurrentAlbum.songs.findIndex(s => s.id === song.id);
            if (currentDisplayedSongIndex !== -1) {
                const songItems = whAlbumSongList.querySelectorAll('.wh_album_song_item');
                if (songItems[currentDisplayedSongIndex]) {
                    songItems[currentDisplayedSongIndex].classList.add('wh_playing_song');
                }
            }
        }
    }

    whAudioPlayer.src = song.url;
    whNowPlayingTitle.textContent = song.title;
    whNowPlayingArtist.textContent = song.artist;
    whNowPlayingCover.src = albumInfo.imageUrl || albumInfo.cover || 'https://res.cloudinary.com/unanimouscreator/image/upload/v1751279767/Beatstream_Music_Player_Icon_fx7m0x.png';
    whAudioPlayer.play();
    whIsPlaying = true;
    whPlayPauseButton.innerHTML = '<i class="fas fa-pause"></i>';

    document.title = `${song.title} - ${albumInfo.title || 'Beatstream'}`;

    if (whCurrentAlbum && albumInfo.id === whCurrentAlbum.id) {
        whPlayAlbumButton.innerHTML = '<i class="fas fa-pause"></i> Pause';
    } else {
        whPlayAlbumButton.innerHTML = '<i class="fas fa-play"></i> Play';
    }

    if (whMaximizedPlayerView.classList.contains('active')) {
        whMaxAlbumTitle.textContent = albumInfo.title;
        whMaxAlbumArtist.textContent = albumInfo.actors || albumInfo.artist || 'Various Artists';
        whMaxAlbumYear.textContent = albumInfo.year || '';
        whMaxAlbumCover.src = albumInfo.imageUrl || albumInfo.cover;
    }

    if (song.lyrics) {
        whLyricsContent.textContent = song.lyrics;
        whMaximizedPlayerView.classList.add('wh_show_lyrics');
    } else {
        whLyricsContent.textContent = "Lyrics not available for this song.";
        whMaximizedPlayerView.classList.add('wh_show_lyrics');
    }

    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: song.title,
            artist: song.artist,
            album: albumInfo.title,
            artwork: [
                { src: whNowPlayingCover.src, sizes: '96x96', type: 'image/png' },
                { src: whNowPlayingCover.src, sizes: '128x128', type: 'image/png' },
                { src: whNowPlayingCover.src, sizes: '192x192', type: 'image/png' },
                { src: whNowPlayingCover.src, sizes: '256x256', type: 'image/png' },
                { src: whNowPlayingCover.src, sizes: '384x384', type: 'image/png' },
                { src: whNowPlayingCover.src, sizes: '512x512', type: 'image/png' },
            ]
        });

        navigator.mediaSession.setActionHandler('play', () => whTogglePlayPause());
        navigator.mediaSession.setActionHandler('pause', () => whTogglePlayPause());
        navigator.mediaSession.setActionHandler('nexttrack', () => whPlayNextSong());
        navigator.mediaSession.setActionHandler('previoustrack', () => whPlayPrevSong());
        navigator.mediaSession.playbackState = 'playing';

        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
                type: 'PLAY_SONG',
                song: {
                    title: song.title,
                    artist: song.artist,
                    album: albumInfo.title,
                    imageUrl: whNowPlayingCover.src
                }
            });
        }
    }
}






// Update the loadAndPlaySong function to call updateMediaSession()
function loadAndPlaySong(song, album) {
    whAudioPlayer.src = song.url;
    whAudioPlayer.load();
    whAudioPlayer.play();
    whNowPlayingCover.src = album.imageUrl;
    whNowPlayingTitle.textContent = song.title;
    whNowPlayingArtist.textContent = song.artist;
    updatePlayPauseButton();
    updatePlayingHighlight(song);
    updateMediaSession(); // Update the MediaSession metadata and handlers
}

// The whPlayNextSong function that is called by the 'nexttrack' handler
function whPlayNextSong() {
    if (whCurrentAlbum && whCurrentAlbumSongs.length > 0) {
        whCurrentSongIndex++;
        if (whCurrentSongIndex >= whCurrentAlbumSongs.length) {
            if (whRepeatMode) {
                whCurrentSongIndex = 0;
            } else {
                whAudioPlayer.pause();
                whIsPlaying = false;
                whPlayPauseButton.innerHTML = '<i class="fas fa-play"></i>';
                return;
            }
        }
        whPlaySong(whCurrentAlbumSongs[whCurrentSongIndex], whCurrentAlbum);
    }
}

// The whPlayPrevSong function that is called by the 'previoustrack' handler
function whPlayPrevSong() {
    if (whCurrentAlbum && whCurrentAlbumSongs.length > 0) {
        whCurrentSongIndex--;
        if (whCurrentSongIndex < 0) {
            whCurrentSongIndex = whCurrentAlbumSongs.length - 1;
        }
        whPlaySong(whCurrentAlbumSongs[whCurrentSongIndex], whCurrentAlbum);
    }
}



function whPlaySong(song, albumInfo, songItem = null) {
    // Check if the song being requested is already playing or paused.
    // The includes() check is a robust way to compare URLs without issues from query strings or different path formats.
    const isSameSong = whAudioPlayer.src.includes(song.url.split('/').pop());

    // If it's the same song, we just want to toggle the play/pause state.
    if (isSameSong) {
        whTogglePlayPause();
        // Return from the function to prevent the rest of the code from running and restarting the song.
        return;
    }

    document.querySelectorAll('.wh_album_song_item.wh_playing_song').forEach(item => {
        item.classList.remove('wh_playing_song');
    });

    if (songItem) {
        songItem.classList.add('wh_playing_song');
    } else {
        if (whCurrentAlbum && whCurrentAlbum.songs) {
            const currentDisplayedSongIndex = whCurrentAlbum.songs.findIndex(s => s.id === song.id);
            if (currentDisplayedSongIndex !== -1) {
                const songItems = whAlbumSongList.querySelectorAll('.wh_album_song_item');
                if (songItems[currentDisplayedSongIndex]) {
                    songItems[currentDisplayedSongIndex].classList.add('wh_playing_song');
                }
            }
        }
    }

    whAudioPlayer.src = song.url;
    whNowPlayingTitle.textContent = song.title;
    whNowPlayingArtist.textContent = song.artist;
    whNowPlayingCover.src = albumInfo.imageUrl || albumInfo.cover || 'https://res.cloudinary.com/unanimouscreator/image/upload/v1751279767/Beatstream_Music_Player_Icon_fx7m0x.png';
    whAudioPlayer.play();
    whIsPlaying = true;
    whPlayPauseButton.innerHTML = '<i class="fas fa-pause"></i>';

    document.title = `${song.title} - ${albumInfo.title || 'Beatstream'}`;

    if (whCurrentAlbum && albumInfo.id === whCurrentAlbum.id) {
        whPlayAlbumButton.innerHTML = '<i class="fas fa-pause"></i> Pause';
    } else {
        whPlayAlbumButton.innerHTML = '<i class="fas fa-play"></i> Play';
    }

    if (whMaximizedPlayerView.classList.contains('active')) {
        whMaxAlbumTitle.textContent = albumInfo.title;
        whMaxAlbumArtist.textContent = albumInfo.actors || albumInfo.artist || 'Various Artists';
        whMaxAlbumYear.textContent = albumInfo.year || '';
        whMaxAlbumCover.src = albumInfo.imageUrl || albumInfo.cover;
    }

    if (song.lyrics) {
        whLyricsContent.textContent = song.lyrics;
        whMaximizedPlayerView.classList.add('wh_show_lyrics');
    } else {
        whLyricsContent.textContent = "Lyrics not available for this song.";
        whMaximizedPlayerView.classList.add('wh_show_lyrics');
    }

    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: song.title,
            artist: song.artist,
            album: albumInfo.title,
            artwork: [
                { src: whNowPlayingCover.src, sizes: '96x96', type: 'image/png' },
                { src: whNowPlayingCover.src, sizes: '128x128', type: 'image/png' },
                { src: whNowPlayingCover.src, sizes: '192x192', type: 'image/png' },
                { src: whNowPlayingCover.src, sizes: '256x256', type: 'image/png' },
                { src: whNowPlayingCover.src, sizes: '384x384', type: 'image/png' },
                { src: whNowPlayingCover.src, sizes: '512x512', type: 'image/png' },
            ]
        });

        navigator.mediaSession.setActionHandler('play', () => whTogglePlayPause());
        navigator.mediaSession.setActionHandler('pause', () => whTogglePlayPause());
        
        // Conditionally set next and previous track handlers for non-mobile devices
        if (!isMobileDevice()) {
            navigator.mediaSession.setActionHandler('nexttrack', () => whPlayNextSong());
            navigator.mediaSession.setActionHandler('previoustrack', () => whPlayPrevSong());
        }
        
        navigator.mediaSession.playbackState = 'playing';

        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
                type: 'PLAY_SONG',
                song: {
                    title: song.title,
                    artist: song.artist,
                    album: albumInfo.title,
                    imageUrl: whNowPlayingCover.src
                }
            });
        }
    }
}






// Modified Maximized player view functionality
whMaximizeOverlay.addEventListener('click', () => {
    if (whAudioPlayer.src && whNowPlayingTitle.textContent !== 'Select a song . . .') {
        // Store the current application state *before* pushing the maximized player state.
        // This is what we want to return to when the maximized player is closed.
        whPreviousAppState = {
            view: (history.state && history.state.view) ? history.state.view : 'home',
            data: (history.state && history.state.data) ? history.state.data : null,
            hash: window.location.hash
        };

        whMaximizedPlayerView.classList.add('active');
        document.body.classList.add('maximized');

        // Push a specific state for the maximized player view.
        // The URL hash remains the same, but we add an entry to history.
        // This makes the browser's back button/gesture close the overlay.
        history.pushState({ view: 'maximized_player_overlay' }, '', window.location.hash);

        const currentPlayingSongUrl = whAudioPlayer.src;
        let currentSong = whAllSongs.find(s => s.url === currentPlayingSongUrl);
        if (currentSong) {
            let albumInfoForMaximizedPlayer = whFindAlbumForSong(currentSong.id);
            if (albumInfoForMaximizedPlayer) {
                whMaxAlbumTitle.textContent = albumInfoForMaximizedPlayer.title;
                whMaxAlbumArtist.textContent = albumInfoForMaximizedPlayer.actors || albumInfoForMaximizedPlayer.artist || 'Various Artists';
                whMaxAlbumYear.textContent = albumInfoForMaximizedPlayer.year || '';
                whMaxAlbumCover.src = albumInfoForMaximizedPlayer.imageUrl || albumInfoForMaximizedPlayer.cover; // Ensure cover is set even if hidden
            }

            if (currentSong.lyrics) {
                whLyricsContent.textContent = currentSong.lyrics;
            } else {
                whLyricsContent.textContent = "Lyrics not available for this song.";
            }
            whMaximizedPlayerView.classList.add('wh_show_lyrics'); // Ensure lyrics container is visible
        }
    }
});

// Event listener for the back button in the maximized player view
if (whMaxBackBtn) {
    whMaxBackBtn.addEventListener('click', () => {
        // Trigger a browser history back. This will activate the popstate event listener.
        // This unifies the behavior of the in-app back button with the browser's back gesture.
        history.back();
    });
}

whNoSongCloseButton.addEventListener('click', () => {
    whNoSongModal.style.display = 'none';
});

whOkNoSongButton.addEventListener('click', () => {
    whNoSongModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === whNoSongModal) {
        whNoSongModal.style.display = 'none';
    }
});


// whMaxBackBtn.addEventListener('click', () => {
//     // MODIFIED: For the maximized player, we remove the 'active' class directly
//     // and don't involve history. This is treated as a modal-like close.
//     whMaximizedPlayerView.classList.remove('active');
//     document.body.classList.remove('maximized');

//     document.body.appendChild(whPlayerBar);
// });

function whTogglePlayPause() {
    if (whIsPlaying) {
        whAudioPlayer.pause();
        whIsPlaying = false;
        whPlayPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
        // MODIFIED: Set title to project name when paused
        document.title = 'Beatstream';
        // NEW: Update whPlayAlbumButton to "Play Album" if the current album was playing
        if (whCurrentAlbum && whCurrentAlbum.songs && whCurrentAlbum.songs.some(s => whAudioPlayer.src.includes(s.url.split('/').pop()))) {
            whPlayAlbumButton.innerHTML = '<i class="fas fa-play"></i> Play';
        }
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
                type: 'UPDATE_PLAY_STATUS',
                isPlaying: whIsPlaying,
                song: {
                    title: whNowPlayingTitle.textContent,
                    artist: whNowPlayingArtist.textContent,
                    imageUrl: whNowPlayingCover.src
                }
            });
        }
    } else {
        whAudioPlayer.play();
        whIsPlaying = true;
        whPlayPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
        // Title should already be correct from whPlaySong if resuming playback.
        // If it's a first play via toggle button, whPlaySong will handle the title.
        // NEW: Update whPlayAlbumButton to "Pause Album" if the current album is playing
        if (whCurrentAlbum && whCurrentAlbum.songs && whCurrentAlbum.songs.some(s => whAudioPlayer.src.includes(s.url.split('/').pop()))) {
            whPlayAlbumButton.innerHTML = '<i class="fas fa-pause"></i> Pause';
        }
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
                type: 'UPDATE_PLAY_STATUS',
                isPlaying: whIsPlaying,
                song: {
                    title: whNowPlayingTitle.textContent,
                    artist: whNowPlayingArtist.textContent,
                    imageUrl: whNowPlayingCover.src
                }
            });
        }
    }
}

whPlayPauseButton.addEventListener('click', whTogglePlayPause);

whAudioPlayer.addEventListener('timeupdate', () => {
    whProgressBar.value = whAudioPlayer.currentTime;
    whCurrentTime.textContent = whFormatTime(whAudioPlayer.currentTime);
    const percentage = (whAudioPlayer.currentTime / whAudioPlayer.duration) * 100;
    const filledColor1 = 'var(--accent-color)';
    const filledColor2 = 'var(--neon-blue)';
    const emptyColor = 'var(--card-bg)';
    whProgressBar.style.background = `linear-gradient(to right, ${filledColor1} 0%, ${filledColor2} ${percentage}%, ${emptyColor} ${percentage}%, ${emptyColor} 100%)`;
});

whAudioPlayer.addEventListener('loadedmetadata', () => {
    whProgressBar.max = whAudioPlayer.duration;
    whTotalTime.textContent = whFormatTime(whAudioPlayer.duration);
    whProgressBar.style.background = `linear-gradient(to right, var(--accent-color) 0%, var(--neon-blue) 0%, var(--card-bg) 0%, var(--card-bg) 100%)`;
});

whProgressBar.addEventListener('input', () => {
    whAudioPlayer.currentTime = whProgressBar.value;
});

whAudioPlayer.addEventListener('ended', () => {
    if (whRepeatMode) {
        whAudioPlayer.currentTime = 0;
        whAudioPlayer.play();
    } else {
        whPlayNextSong();
    }

    if (!whIsPlaying) {
        document.title = 'Beatstream';
    }
});

whNextButton.addEventListener('click', () => {
    whPlayNextSong();
});

whPrevButton.addEventListener('click', () => {
    whPlayPrevSong();
});

function whPlayNextSong() {
    let songsToPlay;
    let albumInfoForPlayer;
    let nextSong;

    if (whShuffleMode) {
        songsToPlay = whShuffledAllSongs;
        whCurrentSongIndex++;
        if (whCurrentSongIndex >= songsToPlay.length) {
            whCurrentSongIndex = 0;
        }
        nextSong = songsToPlay[whCurrentSongIndex];
        albumInfoForPlayer = whFindAlbumForSong(nextSong.id);
    } else if (whCurrentAlbum && whCurrentAlbum.songs) {
        songsToPlay = whCurrentAlbum.songs;
        whCurrentSongIndex++;
        if (whCurrentSongIndex >= songsToPlay.length) {
            whCurrentSongIndex = 0;
            whAudioPlayer.pause();
            whIsPlaying = false;
            whPlayPauseButton.innerHTML = '<i class="fas fa-play"></i>';
            if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
            document.title = 'Beatstream'; // Set title to project name when playlist ends
            return;
        }
        nextSong = songsToPlay[whCurrentSongIndex];
        albumInfoForPlayer = whCurrentAlbum;
    } else if (whAllSongs.length > 0) {
        songsToPlay = whAllSongs;
        whCurrentSongIndex++;
        if (whCurrentSongIndex >= songsToPlay.length) {
            whCurrentSongIndex = 0;
            whAudioPlayer.pause();
            whIsPlaying = false;
            whPlayPauseButton.innerHTML = '<i class="fas fa-play"></i>';
            if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
            document.title = 'Beatstream'; // Set title to project name when all songs end
            return;
        }
        nextSong = songsToPlay[whCurrentSongIndex];
        albumInfoForPlayer = whFindAlbumForSong(nextSong.id);
    } else {
        return;
    }

    if (nextSong && albumInfoForPlayer) {
        whPlaySong(nextSong, albumInfoForPlayer);
    }
}


function whPlayPrevSong() {
    let songsToPlay;
    let albumInfoForPlayer;
    let prevSong;

    if (whShuffleMode) {
        songsToPlay = whShuffledAllSongs;
        whCurrentSongIndex--;
        if (whCurrentSongIndex < 0) {
            whCurrentSongIndex = songsToPlay.length - 1;
        }
        prevSong = songsToPlay[whCurrentSongIndex];
        albumInfoForPlayer = whFindAlbumForSong(prevSong.id);
    } else if (whCurrentAlbum && whCurrentAlbum.songs) {
        songsToPlay = whCurrentAlbum.songs;
        whCurrentSongIndex--;
        if (whCurrentSongIndex < 0) {
            whCurrentSongIndex = songsToPlay.length - 1;
        }
        prevSong = songsToPlay[whCurrentSongIndex];
        albumInfoForPlayer = whCurrentAlbum;
    } else if (whAllSongs.length > 0) {
        songsToPlay = whAllSongs;
        whCurrentSongIndex--;
        if (whCurrentSongIndex < 0) {
            whCurrentSongIndex = songsToPlay.length - 1;
        }
        prevSong = songsToPlay[whCurrentSongIndex];
        albumInfoForPlayer = whFindAlbumForSong(prevSong.id);
    } else {
        return;
    }
    if (prevSong && albumInfoForPlayer) {
        whPlaySong(prevSong, albumInfoForPlayer);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



whRepeatButton.addEventListener('click', () => {
    whRepeatMode = !whRepeatMode;
    whRepeatButton.classList.toggle('active', whRepeatMode);
});


function whRenderYears() {
    if (typeof customYearAlbumsData === 'undefined') {
        return;
    }
    whYearsContainer.innerHTML = '';
    const years = Object.keys(customYearAlbumsData).sort((a, b) => b - a);

    years.forEach(year => {
        const yearSection = document.createElement('div');
        yearSection.classList.add('wh_section');
        yearSection.innerHTML = `<h2>${year}</h2><div class="wh_albums_grid"></div>`;
        const albumsGrid = yearSection.querySelector('.wh_albums_grid');

        customYearAlbumsData[year].forEach(album => {
            const albumCard = document.createElement('div');
            albumCard.classList.add('wh_album_card');
            albumCard.innerHTML = `
                <img src="${album.imageUrl}" alt="${album.title} Cover">
                <h3>${album.title}</h3>
                <p>${album.actors}</p>
            `;
            albumCard.addEventListener('click', () => {
                whCurrentAlbum = album;
                whCurrentSongIndex = 0;
                whNavigateTo('album_detail', album);
            });
            albumsGrid.appendChild(albumCard);
        });
        whYearsContainer.appendChild(yearSection);
    });
}

whSearchInput.addEventListener('input', () => {
    const query = whSearchInput.value.toLowerCase();
    whSearchResultsGrid.innerHTML = '';

    if (query.length < 2) {
        return;
    }

    const uniqueFilteredAlbums = new Map();

    if (typeof customYearAlbumsData !== 'undefined') {
        for (const year in customYearAlbumsData) {
            customYearAlbumsData[year].forEach(album => {
                const albumYearString = String(album.year);
                const albumTitleLower = album.title.toLowerCase();
                const albumActorsLower = album.actors ? album.actors.toLowerCase() : '';

                if (albumTitleLower.includes(query) || albumActorsLower.includes(query) || albumYearString.includes(query)) {
                    uniqueFilteredAlbums.set(album.id, album);
                }

                if (album.songs) {
                    album.songs.forEach(song => {
                        const songTitleLower = song.title.toLowerCase();
                        const songArtistLower = song.artist ? song.artist.toLowerCase() : '';

                        if (songTitleLower.includes(query) || songArtistLower.includes(query)) {
                            uniqueFilteredAlbums.set(album.id, album);
                        }
                    });
                }
            });
        }
    }

    if (typeof customPlaylistsAlbumsData !== 'undefined') {
        customPlaylistsAlbumsData.forEach(playlist => {
            const playlistTitleLower = playlist.title.toLowerCase();

            if (playlistTitleLower.includes(query)) {
                uniqueFilteredAlbums.set(playlist.id, { ...playlist, isPlaylist: true, actors: 'Playlist' });
            }

            if (playlist.songs) {
                playlist.songs.forEach(song => {
                    const songTitleLower = song.title.toLowerCase();
                    const songArtistLower = song.artist ? song.artist.toLowerCase() : '';

                    if (songTitleLower.includes(query) || songArtistLower.includes(query)) {
                        uniqueFilteredAlbums.set(playlist.id, { ...playlist, isPlaylist: true, actors: 'Playlist' });
                    }
                });
            }
        });
    }


    const filteredAlbums = Array.from(uniqueFilteredAlbums.values());


    if (filteredAlbums.length > 0) {
        filteredAlbums.forEach(album => {
            const albumCard = document.createElement('div');
            albumCard.classList.add('wh_album_card');
            const artistText = album.isPlaylist ? 'Playlist' : album.actors;
            albumCard.innerHTML = `
                <img src="${album.imageUrl || album.cover}" alt="${album.title} Cover">
                <h3>${album.title}</h3>
                <p>${artistText}</p>
            `;
            albumCard.addEventListener('click', () => {
                whCurrentAlbum = album;
                whCurrentSongIndex = 0;
                whNavigateTo('album_detail', album);
            });
            whSearchResultsGrid.appendChild(albumCard);
        });
    } else {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No results found.';
        noResultsMessage.style.textAlign = 'center';
        noResultsMessage.style.color = 'var(--light-text-color)';
        whSearchResultsGrid.appendChild(noResultsMessage);
    }
});


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


function whDisplayAlbumDetail(album) {
    // Reset shuffle mode for new album and update button state
    whShuffleMode = false;
    if (whShuffleAlbumButton) { // Ensure the button element exists before trying to manipulate it
        whShuffleAlbumButton.classList.remove('active');
        whShuffleAlbumIcon.classList.remove('fa-sync'); // Remove shuffle icon
        whShuffleAlbumIcon.classList.add('fa-shuffle'); // Add default icon
        whShuffleAlbumText.textContent = 'Shuffle'; // Set button text to default
    }

    whAlbumDetailView.classList.add('active');
    whAlbumsGrid.innerHTML = ''; // Clear previous albums
    whMainContent.scrollTop = 0;

    if (album) {
        whAlbumCover.src = album.cover;
        whAlbumTitle.textContent = album.title;
        whAlbumArtist.textContent = album.artist;
        whAlbumYear.textContent = album.year;

        whCurrentAlbum = album; // Set the current album

        // Initialize whCurrentAlbumSongs with the original order of songs from the album
        whCurrentAlbumSongs = [...album.songs];

        whAlbumSongList.innerHTML = '';
        if (album.songs && album.songs.length > 0) {
            // Iterate over whCurrentAlbumSongs to display the list
            whCurrentAlbumSongs.forEach((song, index) => {
                const songItem = document.createElement('div');
                songItem.classList.add('wh_album_song_item');
                songItem.innerHTML = `
                    <span class="wh_song_index">${index + 1}.</span>
                    <div class="wh_song_info">
                        <span class="wh_song_title">${song.title}</span>
                        <span class="wh_song_artist">${song.artist}</span>
                    </div>
                    <span class="wh_song_duration">${whFormatTime(song.duration)}</span>
                `;
                songItem.addEventListener('click', () => {
                    whCurrentSongIndex = index; // Set current song index based on the displayed list
                    whPlaySong(song, album);
                });
                whAlbumSongList.appendChild(songItem);
            });
        } else {
            whAlbumSongList.innerHTML = '<p>No songs found in this album.</p>';
        }
    }
}

function whDisplayAlbumDetail(album) {
    whAlbumTitle.textContent = album.title;
    whAlbumYear.textContent = album.year || '';
    whAlbumSongList.innerHTML = '';
    whCurrentAlbumSongs = [...album.songs];
    whAlbumArtist.textContent = album.actors || 'Various Artists';

    whPlayAlbumButton.style.display = 'block';
    whAlbumCover.src = album.imageUrl || album.cover;

    if (!album.songs || album.songs.length === 0) {
        const noSongsMessage = document.createElement('p');
        noSongsMessage.textContent = 'No songs in this album/playlist.';
        noSongsMessage.style.color = 'var(--light-text-color)';
        noSongsMessage.style.textAlign = 'center';
        noSongsMessage.style.marginTop = '20px';
        whAlbumSongList.appendChild(noSongsMessage);
        return;
    }

    // NEW: Check if the current album is already playing to set the button text
    if (whIsPlaying && whCurrentAlbum && whCurrentAlbum.id === album.id) {
        whPlayAlbumButton.innerHTML = '<i class="fas fa-pause"></i> Pause';
    } else {
        whPlayAlbumButton.innerHTML = '<i class="fas fa-play"></i> Play';
    }

    album.songs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.classList.add('wh_album_song_item');
        songItem.dataset.songId = song.id;
        if (whAudioPlayer.src && whAudioPlayer.src.includes(song.url.split('/').pop()) && whCurrentAlbum && whCurrentAlbum.id === album.id && whCurrentSongIndex === index) {
            songItem.classList.add('wh_playing_song');
        }
        songItem.innerHTML = `
            <span class="wh_song_index">${index + 1}.</span>
            <div class="wh_song_details">
                <span class="wh_song_title">${song.title}</span>
                <span class="wh_song_artist">${song.artist}</span>
            </div>
            <span class="wh_song_duration">${song.duration}</span>
        `;
        songItem.addEventListener('click', () => {
            whCurrentSongIndex = index;
            whPlaySong(song, album, songItem);
        });
        whAlbumSongList.appendChild(songItem);
    });
}

function whPlayAlbum(album) {
    whCurrentAlbum = album;
    if (album && album.songs && album.songs.length > 0) {
        if (whShuffleMode) {
            whCurrentAlbumSongs = shuffleArray([...album.songs]);
        } else {
            whCurrentAlbumSongs = [...album.songs];
        }
        whCurrentSongIndex = 0;
        whPlaySong(whCurrentAlbumSongs[whCurrentSongIndex], album);
        // NEW LINE: This line calls the function to update all buttons.
        whUpdateAllPlayButtons(); 
    } else {
        whShowNoSongModal();
    }
}




function whPlayNextSong() {
    if (whCurrentAlbum && whCurrentAlbumSongs.length > 0) { // Use whCurrentAlbumSongs
        whCurrentSongIndex++;
        if (whCurrentSongIndex >= whCurrentAlbumSongs.length) { // Use whCurrentAlbumSongs
            if (whRepeatMode) {
                whCurrentSongIndex = 0;
            } else {
                whAudioPlayer.pause();
                whIsPlaying = false;
                whPlayPauseButton.innerHTML = '<i class="fas fa-play"></i>';
                whPlayAlbumButton.innerHTML = '<i class="fas fa-play"></i> Play';
                return;
            }
        }
        whPlaySong(whCurrentAlbumSongs[whCurrentSongIndex], whCurrentAlbum); // Use whCurrentAlbumSongs
    } else {
        whShowNoSongModal();
    }
}


function whPlayPrevSong() {
    if (whCurrentAlbum && whCurrentAlbumSongs.length > 0) { // Use whCurrentAlbumSongs
        whCurrentSongIndex--;
        if (whCurrentSongIndex < 0) {
            whCurrentSongIndex = whCurrentAlbumSongs.length - 1; // Loop back to the end, use whCurrentAlbumSongs
        }
        whPlaySong(whCurrentAlbumSongs[whCurrentSongIndex], whCurrentAlbum); // Use whCurrentAlbumSongs
    } else {
        whShowNoSongModal();
    }
}




whPlayAlbumButton.addEventListener('click', () => {
    if (whCurrentAlbum) {
        // Find the icon and text elements inside the button
        const playPauseIcon = whPlayAlbumButton.querySelector('i');
        const playPauseText = whPlayAlbumButton.querySelector('span');

        if (whIsPlaying) {
            whTogglePlayPause();
            // Change the icon and text to 'Play Album'
            if (playPauseIcon) {
                playPauseIcon.classList.remove('fa-pause');
                playPauseIcon.classList.add('fa-play');
            }
            if (playPauseText) {
                playPauseText.textContent = 'Play';
            }
        } else {
            whPlayAlbum(whCurrentAlbum);
            // Change the icon and text to 'Pause Album'
            if (playPauseIcon) {
                playPauseIcon.classList.remove('fa-play');
                playPauseIcon.classList.add('fa-pause');
            }
            if (playPauseText) {
                playPauseText.textContent = 'Pause';
            }
        }
    } else {
        whShowNoSongModal();
    }
});










// NEW: Event listener for the shuffle album button

if (whShuffleAlbumButton) {
    whShuffleAlbumButton.addEventListener('click', () => {
        if (whCurrentAlbum && whCurrentAlbum.songs && whCurrentAlbum.songs.length > 0) {
            whShuffleMode = !whShuffleMode; // Toggle shuffle mode
            
            if (whShuffleMode) {
                // Shuffle ON state
                whShuffleAlbumButton.classList.add('active');
                whShuffleAlbumIcon.classList.remove('fa-shuffle');
                whShuffleAlbumIcon.classList.add('fa-sync');
                whShuffleAlbumText.textContent = 'Shuffle On';

                whCurrentAlbumSongs = shuffleArray([...whCurrentAlbum.songs]);
                whCurrentSongIndex = 0;
                whPlaySong(whCurrentAlbumSongs[whCurrentSongIndex], whCurrentAlbum);
            } else {
                // Shuffle OFF state
                whShuffleAlbumButton.classList.remove('active');
                whShuffleAlbumIcon.classList.remove('fa-sync');
                whShuffleAlbumIcon.classList.add('fa-shuffle');
                whShuffleAlbumText.textContent = 'Shuffle Off';
                
                whCurrentAlbumSongs = [...whCurrentAlbum.songs];
                const currentlyPlayingSong = whAudioPlayer.src ? whCurrentAlbum.songs.find(s => s.url === whAudioPlayer.src) : null;
                if (currentlyPlayingSong) {
                    whCurrentSongIndex = whCurrentAlbumSongs.findIndex(s => s.id === currentlyPlayingSong.id);
                } else {
                    whCurrentSongIndex = 0;
                }
                whPlaySong(whCurrentAlbumSongs[whCurrentSongIndex], whCurrentAlbum);
            }
        } else {
            whShowNoSongModal();
        }
    });
}

navigator.mediaSession.setActionHandler('previoustrack', () => whPlayPrevSong());
navigator.mediaSession.setActionHandler('nexttrack', () => whPlayNextSong()); 








const whPlayAlbumButtonIcon = whPlayAlbumButton.querySelector('i');




















whTimerButton.addEventListener('click', () => {
    whTimerOptionsModal.style.display = 'flex';
});

whTimerCloseButton.addEventListener('click', () => {
    whTimerOptionsModal.style.display = 'none';
});

whCancelledTimerCloseButton.addEventListener('click', () => {
    whTimerCancelledModal.style.display = 'none';
});

whOkCancelledTimerBtn.addEventListener('click', () => {
    whTimerCancelledModal.style.display = 'none';
});

whTimerEndedCloseButton.addEventListener('click', () => {
    whTimerEndedModal.style.display = 'none';
});

whOkTimerEndedButton.addEventListener('click', () => {
    whTimerEndedModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === whTimerOptionsModal) {
        whTimerOptionsModal.style.display = 'none';
    }
    if (event.target === whTimerCancelledModal) {
        whTimerCancelledModal.style.display = 'none';
    }
    if (event.target === whTimerEndedModal) {
        whTimerEndedModal.style.display = 'none';
    }
});

whTimerOptionsList.addEventListener('click', (event) => {
    const selectedTime = event.target.dataset.minutes;
    if (selectedTime !== undefined) {
        whTimerOptionsModal.style.display = 'none';
        if (selectedTime === '0') {
            whStopCountdown();
            whCountdownDisplay.style.display = 'none';
            whCancelTimerBtn.style.display = 'none';
        } else {
            const minutes = parseInt(selectedTime);
            whSetCountdown(minutes);
            whCountdownDisplay.style.display = 'inline';
            whCancelTimerBtn.style.display = 'block';
        }
    }
});

whCancelTimerBtn.addEventListener('click', () => {
    whStopCountdown();
    whTimerCancelledModal.style.display = 'flex';
});

function whSetCountdown(minutes) {
    whStopCountdown();
    whTimerEndTime = Date.now() + minutes * 60 * 1000;

    whCountdownInterval = setInterval(() => {
        const timeLeft = whTimerEndTime - Date.now();

        if (timeLeft <= 0) {
            whStopCountdown();
            whAudioPlayer.pause();
            whIsPlaying = false;
            whPlayPauseButton.innerHTML = '<i class="fas fa-play"></i>';
            if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
            document.title = 'Beatstream'; // Set title to project name when timer ends
            whTimerEndedModal.style.display = 'flex';
            return;
        }

        const totalSeconds = Math.floor(timeLeft / 1000);
        const displayMinutes = Math.floor(totalSeconds / 60);
        const displaySeconds = totalSeconds % 60;
        whCountdownDisplay.textContent = `${displayMinutes}:${displaySeconds < 10 ? '0' : ''}${displaySeconds}`;
    }, 1000);
}

function whStopCountdown() {
    clearInterval(whCountdownInterval);
    whCountdownInterval = null;
    whTimerEndTime = null;
    whCountdownDisplay.textContent = '';
    whCountdownDisplay.style.display = 'none';
    whCancelTimerBtn.style.display = 'none';
}

whAboutCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
        whAboutModal.style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    if (event.target === whAboutModal) {
        whAboutModal.style.display = 'none';
    }
});

// MODIFIED: Added history management on DOMContentLoaded and popstate
document.addEventListener('DOMContentLoaded', () => {
    whPopulateAllSongs();
    whShuffleAllSongs();
    whRenderYears();

    // Determine initial view based on URL hash or default to 'home'
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        const [view, id] = initialHash.split('/');
        if (view === 'album' && id) {
            const albumData = whGetAlbumById(id);
            if (albumData) {
                whCurrentAlbum = albumData;
                whCurrentSongIndex = 0;
                whNavigateTo('album_detail', albumData, false); // Do not push state again on load
            } else {
                whNavigateTo('home', null, false); // Fallback to home if album not found
            }
        } else if (view === 'home' || view === 'search' || view === 'playlists') {
            whNavigateTo(view, null, false); // Do not push state again on load
        } else {
            whNavigateTo('home', null, false); // Fallback to home for unrecognized hash
        }
    } else {
        whNavigateTo('home', null, false); // Initial view, do not push state if no hash
    }

    // Push initial state to history for proper back navigation to external sites
    history.replaceState({ view: 'home', data: null }, '', '#home');

    // MODIFIED: Set initial browser tab title
    document.title = 'Beatstream';
});

// Modified popstate event listener for browser back/forward gestures
window.addEventListener('popstate', (event) => {

    if (whMaximizedPlayerView.classList.contains('active') &&
        (!event.state || event.state.view !== 'maximized_player_overlay')) {
        whMaximizedPlayerView.classList.remove('active');
        document.body.classList.remove('maximized');
        return;
    }


    // Existing popstate handling for main application views (home, search, album_detail)
    const state = event.state;
    if (state && state.view) {
        if (state.view === 'album_detail' && state.data) {
            const albumData = whGetAlbumById(state.data);
            if (albumData) {
                whCurrentAlbum = albumData;
                whNavigateTo('album_detail', albumData, false); // Do not push new state
            } else {
                whNavigateTo('home', null, false); // Fallback if album data missing
            }
        } else {
            whNavigateTo(state.view, null, false); // Do not push new state
        }
    } else {
        // Fallback for initial state or unknown states (e.g., direct URL access without #hash)
        whNavigateTo('home', null, false); // Go to home view
    }
});
// END MODIFIED

if (whSubmitSongsButton) {
    whSubmitSongsButton.addEventListener('click', () => {
        window.open('https://forms.gle/pDWGPxYFN1CXbgyg7', '_blank');
    });
}

document.querySelectorAll('.wh_modal .wh_close_button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.target.closest('.wh_modal').style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    document.querySelectorAll('.wh_modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});