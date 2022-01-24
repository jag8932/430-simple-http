const fs = require('fs');
const img = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImageResponse = (request, response) => {
    response.writeHead(200, {'Content-Type': 'image/png'});
    response.write(img);
    response.end();
}

module.exports.getImageResponse = getImageResponse;