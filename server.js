const http = require('node:http');
const os = require('os');



const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'application/json'});

    const cpuInfo =os.cpus();
    const osInfo = {
        platform: os.platform(),
        type: os.type(),
        release: os.release(),
    };
    const userInfo = { cpu: cpuInfo, os: osInfo };
    res.end(JSON.stringify(userInfo));
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
