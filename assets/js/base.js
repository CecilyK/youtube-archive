var baseURL = "https://akshatmittal.com/youtube-archive/";
if (typeof isCustomPage == 'undefined') isCustomPage = 0;
if (window.location.hostname.indexOf("akshatmittal.com") < 0) {
    if (window.location.protocol != "https:") window.location.replace("https:" + window.location.href.substring(window.location.protocol.length));
    if (location.hostname.indexOf("akshatmittal.com") == -1) window.location.replace(baseURL + location.hash);
    if (window.top !== window.self) window.top.location.replace(window.self.location.href);
}
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
Array.prototype.shuffle = function () {
    var i = this.length,
        j, temp;
    if (i == 0) return this;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}
var YT = {};