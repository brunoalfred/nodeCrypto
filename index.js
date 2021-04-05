// const encryptionMethod = require('./encryption') ;
// const decryptionMethod = require('./decryption');

// let crypto;
// try {
//     crypto = require('crypto');
// } catch (error) {
//     console.log('crypto support is disabled!');
//  } finally{


//     // Encryption method

//     const encrypted_value = encryptionMethod('helloo', 'pass');
//     console.log(encrypted_value);





//     // Decryption method
//     const decrypted_value = decryptionMethod('65e1d8fb8601aff8160c8121a9532e6c', 'pass');
//     console.log(decrypted_value);

//  }



const dgram = require('dgram');
const message = Buffer.from('Some bytes');
const client = dgram.createSocket('udp4');
client.send(message, 41234, 'localhost', (err) => {
    client.close();
});