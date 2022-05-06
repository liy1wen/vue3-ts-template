import CryptoJS from 'crypto-js'
const SecretKey = 'playdiot1njF1OSF'
const Secret = 'playdiony5RKM6ed'
export default {
  //   //ECB模式：加密
  //   encrypt(word: string) {
  //     const key = CryptoJS.enc.Utf8.parse(SecretKey)
  //     const srcs = CryptoJS.enc.Utf8.parse(word)
  //     const encrypted = CryptoJS.AES.encrypt(srcs, key, {
  //       mode: CryptoJS.mode.ECB,
  //       padding: CryptoJS.pad.Pkcs7
  //     })
  //     return encrypted.toString()
  //   },
  //   //ECB模式：解密
  //   decrypt(word: string) {
  //     const key = CryptoJS.enc.Utf8.parse(SecretKey)
  //     const decrypt = CryptoJS.AES.decrypt(word, key, {
  //       mode: CryptoJS.mode.ECB,
  //       padding: CryptoJS.pad.Pkcs7
  //     })
  //     return CryptoJS.enc.Utf8.stringify(decrypt).toString()
  //   }
  //CBC模式：加密
  encrypt(word: string) {
    const key = CryptoJS.enc.Utf8.parse(SecretKey)
    const iv = CryptoJS.enc.Utf8.parse(Secret)
    const srcs = CryptoJS.enc.Utf8.parse(word)

    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    })
    return encrypted.toString()
  },
  // CBC模式：解密
  decrypt(word: string) {
    const key = CryptoJS.enc.Utf8.parse(SecretKey)
    const iv = CryptoJS.enc.Utf8.parse(Secret)

    const decrypt = CryptoJS.AES.decrypt(word, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    })
    return decrypt.toString(CryptoJS.enc.Utf8)
  }
}
