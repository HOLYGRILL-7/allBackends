import { createServer } from "http";
const PORT = process.env.PORT || 8000;

const users = [
    {id: 1, name: 'Kofi Doe'},
    {id: 2, name: 'Ama Doe'},
    {id: 3, name: 'Akosua Doe'},
];

//logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

//JSON middleware
const jsonMiddleware = (req, res, next) => {
   res.setHeader('Content-Type', 'application/json');
   next();
}

//Route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

//Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {  // ✅ Fixed: added params and typo
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    
    if (user) {
        res.write(JSON.stringify(user));  // ✅ Fixed: use found user
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not found'}));
    }
    res.end();
}

//Not found handler
const notFoundHandler = (req, res) => {
     res.statusCode = 404;
     res.write(JSON.stringify({message: 'Route not found'}));
     res.end();
}

const server = createServer((req, res) => {
    logger(req, res, () => {
         jsonMiddleware(req, res, () => {
            if(req.url === '/api/users' && req.method === 'GET'){  // ✅ Fixed: added /
                getUsersHandler(req, res);  // ✅ Fixed: pass params
            } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
                getUserByIdHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
         })
    });
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//Current System