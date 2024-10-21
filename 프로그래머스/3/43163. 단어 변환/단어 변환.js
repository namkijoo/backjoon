function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const visited = Array(words.length).fill(false); 
  let result = []; 

  const canTransform = (word1, word2) => {
    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) diffCount++;
      if (diffCount > 1) return false;
    }
    return diffCount === 1;
  };

  const dfs = (currentWord, steps) => {
    if (currentWord === target) {
      result.push(steps); 
      return;
    }

    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && canTransform(currentWord, words[i])) {
        visited[i] = true;
        dfs(words[i], steps + 1);
        visited[i] = false; 
      }
    }
  };

  dfs(begin, 0);

  return result.length > 0 ? Math.min(...result) : 0;
}
