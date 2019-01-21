function searchUser(targetId) {
  const userList = [
    { id: 1, name: '鈴木' },
    { id: 2, name: '田中' },
    { id: 3, name: '太郎' }
  ];

  // 該当ユーザーを検索
  const targetUser = userList.find((user) => user.id === targetId);

  // ◎値が存在しないときの処理を追加
  if (targetUser === undefined) {
    return null;
  }

  return targetUser.name;
}

console.log(searchUser(1)); // 結果: '鈴木'
console.log(searchUser(4)); // 結果: null