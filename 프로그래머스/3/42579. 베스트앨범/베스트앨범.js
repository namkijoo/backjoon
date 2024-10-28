function solution(genres, plays) {
    var answer = [];
    let hashMap = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        hashMap.set(genres[i], (hashMap.get(genres[i]) || 0) + plays[i]);
    }
    
    const sortedGenres = [...hashMap.entries()].sort((a, b) => b[1] - a[1]);
    
    let songsByGenre = {};
    for (let i = 0; i < genres.length; i++) {
        if (!songsByGenre[genres[i]]) {
            songsByGenre[genres[i]] = [];
        }
        songsByGenre[genres[i]].push([i, plays[i]]);
    }
    
    
    for (const [genre, _] of sortedGenres) {
        songsByGenre[genre].sort((a, b) => b[1] - a[1]) ;
        
        answer.push(songsByGenre[genre][0][0]);
        if (songsByGenre[genre][1]) {
            answer.push(songsByGenre[genre][1][0]);
        }
    }
    
    return answer;
}
