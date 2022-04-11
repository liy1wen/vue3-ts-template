/* eslint-disable no-useless-escape */
export const rules: any = {
  // url地址校验
  URL(url: string) {
    const regex =
      /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?"\\+&%$#=~_-]+))*$/
    return regex.test(url)
  },
  // 只能输入小写字母
  LowerCase(str: string) {
    const regex = /^[a-z]+$/
    return regex.test(str)
  },
  // 只能输入大写字母
  UpperCase(str: string) {
    const regex = /^[A-Z]+$/
    return regex.test(str)
  },
  // 手机号码
  Mobile(mobile: string) {
    const regex = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
    return regex.test(mobile)
  },
  // 电话号码
  Phone(phone: string) {
    const regex = /^(0\d{2,3})?-?\d{7,8}$/
    return regex.test(phone)
  },
  // 身份证号（18位）正则
  IdentityCard(idCard: string) {
    const regex =
      /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$/
    return regex.test(idCard)
  },
  // 邮箱地址(email)
  Email(email: string) {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return regex.test(email)
  }
}
