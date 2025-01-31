const http=require('http');
const server=http.createServer((req,res)=> 
    res.end("server is running")
);
const port=3005; //3000 to 8000 can use. routhing midless cannoot work . so to over come use  
server.listen(port);