import Util from '../util';
const baseUrl = function() {
    return `${process.env.VUE_APP_BASE_URL}`;
};
export default Util.finance(baseUrl);