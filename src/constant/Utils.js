export default {
  customStyle: (baseStyle, customStyle) => {
    return Array.isArray(customStyle)
      ? [baseStyle, ...customStyle]
      : [baseStyle, customStyle]
  },
  emailValidation: (string) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
    return regex.test(string)
  },
  passwordValidation: (string) => {
    const regex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/
    return regex.test(string)
  }
}
