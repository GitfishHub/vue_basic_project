import moment from "moment"
const vFilter = {
  getTime: (value, type) => {
    if (type)
    {
      return moment(value).format(type)
    } else
    {
      return moment(value).format("YYYY-MM-DD HH:mm:ss ")
    }
  },
  encryption: (val, type) => {
    if (val) {
      let start = val.slice(0, 3)
      let end = val.substring(val.length - 3)
      let result = ''

      switch (type) {
        case 'id':
          result = `${start}************${end}`
          break
        case 'phone':
          result = `${start}******${end}`
          break;

        default:
          break;
      }
      return result
    } else {
      return val
    }
  }
}

export default vFilter