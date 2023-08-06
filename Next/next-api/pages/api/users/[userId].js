import { users } from '../../../data/users'

export default function handler(req, res) {
    const { userId } = req.query;
    console.log(2);

    if (req.method === 'GET') {
        const user = users.find(user => user.id === parseInt(userId));
        res.status(200).json(user);
    }
    else if(req.method === 'DELETE') {
        console.log("userid",userId);
        const userToBeDeleted = users.find(user => user.id === parseInt(userId));
        const index = users.findIndex(user => user.id === parseInt(userId));
        users.splice(index,1);
        console.log("users", users)
        res.status(200).json(userToBeDeleted);
    }
}