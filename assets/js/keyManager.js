YT.keyManager = {
    keys: ["AIzaSyC00KfovCrZTa827eiJtzvssy8vC0UlgHY"],
    keyIndex: 0,
    getKey: function () {
        this.keyIndex = (this.keyIndex + 1) % (this.keys.length);
        return this.keys[this.keyIndex];
    },
    shuffleKeys: function () {
        this.keys.shuffle();
    }
}