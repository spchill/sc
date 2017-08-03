var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function parseParameter(param) {
    return param.split('+').join(' ');
}

var showName = parseParameter(getUrlParameter('show'));

var seasons;
$.when(getJson()).done(function(){
    seasons = series[showName];

    $('<h2>' + showName + '</h2>').appendTo('#episode-container');
    for(var s = 0; s < seasons.length; ++s){
        if(seasons[s].length === 0) continue;

        var $div = $('<div>', {'class':'row'}).appendTo('#episode-container');
        $div.append($('<h3>Season ' + s + '</h3>'));
        var $list = $('<ul>').appendTo($div);
        for (var e = 0; e < seasons[s].length ; ++e) {
            if(seasons[s][e] === 0) continue;
            var $li = $('<li>').appendTo($list);
            var $anchor = $('<a>', {'class': 'episode-link', 'href': 'ep.html#' + seasons[s][e]}).appendTo($li);
            $anchor.append(document.createTextNode('Episode ' + e));
        }
    }
});
