var series;

function getJson() {
    return $.getJSON("json/sc.json", function (json) {
        series = json;
        var names = Object.keys(series);
        $(".ui-autocomplete-input").autocomplete({
            appendTo: "#autocomplete-list",
            delay: 100,
            minLength: 3,
            source: names
        });
    });
}

getJson();