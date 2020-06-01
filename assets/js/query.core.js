YT.query = {
    newSearch: function (e) {
        if (e.trim() == YT.live.channelID || e.trim() == "") {
            return;
        }
        YT.live.stop();
        $.getJSON("https://counts.live/api/youtube-subscriber-count/" + encodeURIComponent(e) + "/data", function (e) {
            if (!e.success) {
                alert("No results found!");
                location.href = baseURL;
                return;
            }
            YT.updateManager.updateChannel(e.data.id, e.data.created);
            YT.updateManager.updateCover(e.data.backdrop);

            YT.updateManager.updateName(e.data.name);
            YT.updateManager.updateProfile(e.data.picture);
            var dt = new Date(e.data.created);
            YT.updateManager.updateDate(months[dt.getMonth()] + " " + dt.getDate() + ", " + dt.getFullYear());

            $.getJSON("https://counts.live/api/youtube-subscriber-count/" + encodeURIComponent(e.data.id) + "/live", function (e) {
                YT.updateManager.updateViews(parseInt(e.data.views).toLocaleString("en"));
                YT.updateManager.updateSubscribers(parseInt(e.data.subscribers).toLocaleString("en"));
                YT.updateManager.updateVideos(parseInt(e.data.videos).toLocaleString("en"));
            });

            YT.urls.pushState(e.data.id);
            YT.live.start();
        });
    },
    search: function (e) {
        e.preventDefault();
        YT.query.newSearch($("#yt_searchvalue").val());
        $("#yt_searchvalue").val("");
    },
    bind: function () {
        $("#yt_search").on("submit", this.search);
        $("#yt_searchbutton").on("click", this.search);
    }
};