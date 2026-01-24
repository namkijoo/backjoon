function solution(id_list, report, k) {
  const unique = new Set(report);

  const reportedCount = new Map();
  for (const r of unique) {
    const [from, to] = r.split(' ');
    reportedCount.set(to, (reportedCount.get(to) || 0) + 1);
  }

  const banned = new Set();
  for (const [user, cnt] of reportedCount) {
    if (cnt >= k) banned.add(user);
  }

  const mailCount = new Map();
  for (const id of id_list) mailCount.set(id, 0);

  for (const r of unique) {
    const [from, to] = r.split(' ');
    if (banned.has(to)) {
      mailCount.set(from, mailCount.get(from) + 1);
    }
  }

  return id_list.map((id) => mailCount.get(id));
}
