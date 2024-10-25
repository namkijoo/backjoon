function solution(genres, plays) {
    var answer = [];
    let hashMap = new Map();
    
    // 장르별로 총 재생 횟수 계산
    for (let i = 0; i < genres.length; i++) {
        hashMap.set(genres[i], (hashMap.get(genres[i]) || 0) + plays[i]);
    }
    
    // 총 재생 횟수가 높은 순으로 장르 정렬
    const sortedGenres = [...hashMap.entries()].sort((a, b) => b[1] - a[1]);
    
    // 장르별로 곡 정보 저장
    let songsByGenre = {};
    for (let i = 0; i < genres.length; i++) {
        if (!songsByGenre[genres[i]]) {
            songsByGenre[genres[i]] = [];
        }
        songsByGenre[genres[i]].push([i, plays[i]]);
    }
    
    // 각 장르에서 재생 횟수가 높은 순으로 두 곡 선택
    for (const [genre, _] of sortedGenres) {
        songsByGenre[genre].sort((a, b) => b[1] - a[1] || a[0] - b[0]);
        
        // 상위 두 곡을 앨범에 추가
        answer.push(songsByGenre[genre][0][0]);
        if (songsByGenre[genre][1]) {
            answer.push(songsByGenre[genre][1][0]);
        }
    }
    
    return answer;
}
