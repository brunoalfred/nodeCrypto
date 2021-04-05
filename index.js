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




const os = require('os');

// identifying the endianness of the CPU for which the Node.js binary was compiled 
// Possible values are 'BE' for big endian and 'LE' for little endian.

let endianess = os.endianness()
console.log(endianess);


