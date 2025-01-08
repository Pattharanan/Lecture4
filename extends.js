class Media{
    constructor(info){
        this.publicDate = info.publicDate;
        this.name = info.name;
    }
}
class Song extends Media {
    constructor(songDate){
        super(songDate);
        this.artist = songDate.artist;
    }
}
const mySong = new Song({
   artist: "Queen",
   name: "Behemian Rhapsody",
   publicDate: 1975,
});

console.log(mySong);