let mov = {
    // insert: 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
    // update: 'update user set name=?, age=? where id=?',
    // delete: 'delete from user where id=?',
    // queryById: 'select * from Movie where m_id=?',
    // queryAll: 'select * from Movie',
    queryList: `CALL getMovList()`
};

export default mov;