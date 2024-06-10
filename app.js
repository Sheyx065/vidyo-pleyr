const videoSources = {
    video1: "https://www.youtube.com/embed/seO0xeS-nzs",
    video2: "https://www.youtube.com/embed/g_WVSozgbVM",
    video3: "https://www.youtube.com/embed/kUt7It2bAjU",
    video4: "https://www.youtube.com/embed/iVCEVJOW6CY"
};

function playVideo(videoId) {
    document.querySelectorAll('iframe').forEach(video => {
        video.style.display = 'none';
        video.src = "";
    });
    const selectedVideo = document.getElementById(videoId);
    selectedVideo.src = videoSources[videoId];
    selectedVideo.style.display = 'block';
}
