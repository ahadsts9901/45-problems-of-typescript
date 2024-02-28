function make_album(namee: string, title: string, NumOfTracks: number = 0) {
    const album = {
        artist_name: namee,
        album_title: title,
        // NumOfTracks: NumOfTracks,
    };
    if (NumOfTracks) {
        album[NumOfTracks] = NumOfTracks
    }
    return album;
}

let album1 = make_album("artist-1", "track-1");
console.log(album1);

let album2 = make_album("artist-2", "track-2");
console.log(album2);

let album3 = make_album("artist-3", "track-3");
console.log(album3);

let album4 = make_album("artist-4", "track-4", 7);
console.log(album4);