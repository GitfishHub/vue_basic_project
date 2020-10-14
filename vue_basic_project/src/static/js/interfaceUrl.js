
//所有接口配置文件
const yuming = 'http://testjv.jacvw.timanetwork.net'
const indexip = yuming+'/api/dk-dm-portal-api'

const interfaceUrl = {
//首页
  INDEXMESSAGE :{
    getRecommend: indexip + '/recommend/recommendList', //首页-推荐
    getInfomation: indexip + '/information/indexList', //首页-资讯
    getActivity: indexip + '/activity/indexList', //首页-活动
    getNow: indexip + '/moment/indexList', //首页-此刻
    getQuestion: indexip + '/question/indexList', //首页-问答
  },
  
}

export {interfaceUrl}

