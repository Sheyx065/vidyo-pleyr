const videoSources = {
    video1: "https://www.youtube.com/embed/seO0xeS-nzs",
    video2: "https://www.youtube.com/embed/g_WVSozgbVM",
    video3: "https://www.youtube.com/embed/kUt7It2bAjU",
    video4: "https://www.youtube.com/embed/iVCEVJOW6CY"
};

let currentVideoIndex = 0;
const videoIds = Object.keys(videoSources);

function playVideo(videoId) {
    // Hide all videos and stop playback by resetting the src attribute
    document.querySelectorAll('iframe').forEach(video => {
        video.style.display = 'none';
        video.src = "";
    });

    // Set the src attribute to restart the selected video and display it
    const selectedVideo = document.getElementById(videoId);
    selectedVideo.src = videoSources[videoId];
    selectedVideo.style.display = 'block';

    // Update current video index
    currentVideoIndex = videoIds.indexOf(videoId);
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videoIds.length) % videoIds.length;
    playVideo(videoIds[currentVideoIndex]);
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoIds.length;
    playVideo(videoIds[currentVideoIndex]);
}

function showVideoList() {
    const videoList = document.getElementById('video-list');
    videoList.style.display = videoList.style.display === 'flex' ? 'none' : 'flex';
}

function shuffleVideo() {
    const randomIndex = Math.floor(Math.random() * videoIds.length);
    playVideo(videoIds[randomIndex]);
}

// Initialize with the first video displayed
playVideo(videoIds[currentVideoIndex]);
