//this project is without expressJS
import http from 'http';
//importing modules
import fs from 'fs/promises';
import url from 'url';
import path, { dirname } from 'path';

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);
// const PORT = 3000;
const PORT = process.env.PORT;
const server = http.createServer(async (req, res) => {
  // res.write('Hello World');  //sending some text to the client
  // res.end('Hello World!'); //we could just put everything here.
  // res.setHeader('content-Type', 'text/html') //we can also se the header values, content type
  // res.statusCode = 404;
  // console.log(req.url);
  // console.log(req.method);

  //let's create a router

try {
  if (req.method === 'GET') {
    let filePath;
    if (req.url === '/') {
      filePath = path.join(__dirname, 'public', 'index.html');
    } else if (req.url === '/about') {
      filePath = path.join(__dirname, 'public', 'about.html');
    } else {
      throw new Error('Not Found');
    }

    console.log('Attempting to read:', filePath);
    const data = await fs.readFile(filePath);
    console.log('File read successfully, size:', data.length);
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);  // Use res.end(data) instead of write + end
  } else {
    throw new Error('Method not allowed');
  }
} catch (error) {
  console.error('Error occurred:', error);
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Server Error: ' + error.message);
}

  //we could also put everything together.
  // res.writeHead(500, {'Content-Type': 'application/json'});
  // res.writeHead(500, {'Content-Type': 'text/html'});
  // res.end('<h1>Hello World!</h1>');
  // res.end( JSON.stringify({message: 'Server Eror'}));
  // res.end('<h1>Helloo World!!</h1>')
});

//listen on a port
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});