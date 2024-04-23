import CryptoJS from 'crypto-js'

let crypt ={
    secret : process.env.REACT_APP_SECRET_KEY,
    encrypt : function (clear) {
        var cipher = CryptoJS.AES.encrypt(clear.toString(), crypt.secret);
        cipher = cipher.toString();
        return cipher;
    },

    decrypt : function(cipher){
        var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
        decipher = decipher.toString(CryptoJS.enc.Utf8);
        return decipher;
    }
}


export default crypt;