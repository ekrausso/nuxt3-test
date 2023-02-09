// import { Context, ServerMiddleware } from '@nuxt/types'
// const fileSystem = require('fs');
// const path = require('path');
// const filePath = path.join(__dirname, './../static/sample.pdf');


// const getDocument: ServerMiddleware = async (req, res) => {

//     setTimeout(() => {
//         const stat = fileSystem.statSync(filePath);

//         res.writeHead(200, {
//             'Content-Type': 'application/pdf',
//             'Content-Length': stat.size
//         });

//         const readStream = fileSystem.createReadStream(filePath);
//         readStream.pipe(res);
//     }, 3000)
  
    
// }

// export default getDocument