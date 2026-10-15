// Local design preview only; serves this directory on loopback.
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.woff2':'font/woff2'};
http.createServer(async(req,res)=>{
  try{
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
    if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
    const data=await fs.readFile(file);
    res.writeHead(200,{'content-type':types[path.extname(file)]??'application/octet-stream','cache-control':'no-store'});
    res.end(data);
  }catch{res.writeHead(404).end('Not found');}
}).listen(4335,'127.0.0.1',()=>console.log('Design preview: http://127.0.0.1:4335'));
