const yargs = require('yargs').argv;
const fs    = require('fs');

console.log(yargs.f)
fs.readFile(yargs.f, 'utf8', (err, data) => {

    console.log(err);
    // console.log(data);
    
    let proxyies = data;
    proxyies = proxyies.split(/\r?\n/);
    proxyies.forEach(proxy => {
        let new_proxy = proxy.split(':');
        let url = new_proxy[0];
        let port = new_proxy[1].split(' ');
        port = port[0];
        console.log(`${url}:${port}`)
    })
})