

import Util from "./util"
// let domain = 'https://api.apiopen.top';
let domain = process.env.VUE_APP_BASE_URL;
let instance = Util.request(domain || "")
const api = "/musicDetails"
export function test(opts) {
  return instance({
    method: "get",
    url: `${api}`,
    opts: opts,
  })
}

