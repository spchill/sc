function getVideoSrc(){
    var baseUrl = 'http://superchillin.com/dl/18/4126746fdb8adbca196a5a82eb/episode_ID.mp4';
    var videoId = window.location.hash.substr(1);
    return baseUrl.replace('ID', videoId);
}

$('#player source').attr('src', getVideoSrc());
$('#player')[0].load();