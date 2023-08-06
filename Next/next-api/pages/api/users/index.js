import { users } from '../../../data/users'

export default function handler(req, res) {
    console.log(3);
    debugger;
    if (req.method === 'GET') {
        return res.status(200).json(users);
    }
    else if (req.method === 'POST') {
        const newUser = {
            name: req.body.users.name,
            id: Date.now()
        }
        users.push(newUser);
        return res.status(201).json(newUser);
    }
}