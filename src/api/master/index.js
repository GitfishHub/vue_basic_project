/* eslint-disable */
import instance from './instance';

 /** AddOrEditRenewalInfo */
export function addOrEditRenewalInfo_post (opts) {
    return instance({
        method: 'post',
        url: '/addOrEditRenewalInfo',
        opts: opts,
    });
}

 /** getRegionsByIds */
export function base_regions_batch_regionIds_get (opts) {
    return instance({
        method: 'get',
        url: '/base/regions/batch/{regionIds}',
        opts: opts,
    });
}

 /** getRegionListByNameAndLevel */
export function base_regions_byNameAndLevel_get (opts) {
    return instance({
        method: 'get',
        url: '/base/regions/byNameAndLevel',
        opts: opts,
    });
}

 /** getRegionsById */
export function base_regions_regionId_get (opts) {
    return instance({
        method: 'get',
        url: '/base/regions/{regionId}',
        opts: opts,
    });
}

 /** selectCampaigns */
export function cache_queryAllCampaign_dealershipId_get (opts) {
    return instance({
        method: 'get',
        url: '/cache/queryAllCampaign/{dealershipId}',
        opts: opts,
    });
}

 /** selectValidCampaigns */
export function cache_queryAllValidCampaign_dealershipId_get (opts) {
    return instance({
        method: 'get',
        url: '/cache/queryAllValidCampaign/{dealershipId}',
        opts: opts,
    });
}

 /** createCampaign */
export function campaign_campaign_post (opts) {
    return instance({
        method: 'post',
        url: '/campaign/campaign',
        opts: opts,
    });
}

 /** getCampaignDetail */
export function campaign_campaign_getCampaignDetail_get (opts) {
    return instance({
        method: 'get',
        url: '/campaign/campaign/getCampaignDetail',
        opts: opts,
    });
}

 /** getCampaignDetailForProcess */
export function campaign_campaign_getCampaignDetailForProcess_get (opts) {
    return instance({
        method: 'get',
        url: '/campaign/campaign/getCampaignDetailForProcess',
        opts: opts,
    });
}

 /** getCampaignListForDealer */
export function campaign_campaign_getCampaignListForDealer_get (opts) {
    return instance({
        method: 'get',
        url: '/campaign/campaign/getCampaignListForDealer',
        opts: opts,
    });
}

 /** getCampaignListForDealerForProcess */
export function campaign_campaign_getCampaignListForDealerForProcess_get (opts) {
    return instance({
        method: 'get',
        url: '/campaign/campaign/getCampaignListForDealerForProcess',
        opts: opts,
    });
}

 /** getCampaignListForDealer */
export function campaign_campaign_getCampaignNameList_post (opts) {
    return instance({
        method: 'post',
        url: '/campaign/campaign/getCampaignNameList',
        opts: opts,
    });
}

 /** modifyUploadFlag */
export function campaign_campaign_uploadFlag_patch (opts) {
    return instance({
        method: 'patch',
        url: '/campaign/campaign/uploadFlag',
        opts: opts,
    });
}

 /** modifyValidFlag */
export function campaign_campaign_validFlag_patch (opts) {
    return instance({
        method: 'patch',
        url: '/campaign/campaign/validFlag',
        opts: opts,
    });
}

 /** campaigns */
export function campaign_campaigns_valid_type_get (opts) {
    return instance({
        method: 'get',
        url: '/campaign/campaigns/valid/{type}',
        opts: opts,
    });
}

 /** getAllCampaigns */
export function campaign_getAllCampaigns_get (opts) {
    return instance({
        method: 'get',
        url: '/campaign/getAllCampaigns',
        opts: opts,
    });
}

 /** getCampaignForAss */
export function campaign_getCampaignForAss_get (opts) {
    return instance({
        method: 'get',
        url: '/campaign/getCampaignForAss',
        opts: opts,
    });
}

 /** getOPPDetailForCustomer */
export function campaign_getOPPDetailForCustomer_post (opts) {
    return instance({
        method: 'post',
        url: '/campaign/getOPPDetailForCustomer',
        opts: opts,
    });
}

 /** modifyCampaign */
export function campaign_modifyCampaign_post (opts) {
    return instance({
        method: 'post',
        url: '/campaign/modifyCampaign',
        opts: opts,
    });
}

 /** findOppCampaigns */
export function campaign_oppCampaigns_get (opts) {
    return instance({
        method: 'get',
        url: '/campaign/oppCampaigns',
        opts: opts,
    });
}

 /** queryCampaign */
export function campaign_queryCampaigns_post (opts) {
    return instance({
        method: 'post',
        url: '/campaign/queryCampaigns',
        opts: opts,
    });
}

 /** bingCallRecord */
export function cic_bingCallRecord_post (opts) {
    return instance({
        method: 'post',
        url: '/cic/bingCallRecord',
        opts: opts,
    });
}

 /** createAlternateCustomer */
export function customer_saveOrUpdateCustomer_post (opts) {
    return instance({
        method: 'post',
        url: '/customer/saveOrUpdateCustomer',
        opts: opts,
    });
}

 /** Hello Exception. */
export function demo_hello_exception_get (opts) {
    return instance({
        method: 'get',
        url: '/demo/hello-exception',
        opts: opts,
    });
}

 /** Hello World! */
export function demo_hello_world_get (opts) {
    return instance({
        method: 'get',
        url: '/demo/hello-world',
        opts: opts,
    });
}

 /** exportOpp */
export function exportOpp_post (opts) {
    return instance({
        method: 'post',
        url: '/exportOpp',
        opts: opts,
    });
}

 /** createBaoKeRule */
export function followRole_createOrUpdateBaoKeRule_post (opts) {
    return instance({
        method: 'post',
        url: '/followRole/createOrUpdateBaoKeRule',
        opts: opts,
    });
}

 /** deleteBaoKeRuleById */
export function followRole_deleteBaoKeRuleById_delete (opts) {
    return instance({
        method: 'delete',
        url: '/followRole/deleteBaoKeRuleById',
        opts: opts,
    });
}

 /** getBaoKeRuleById */
export function followRole_getBaoKeRuleById_get (opts) {
    return instance({
        method: 'get',
        url: '/followRole/getBaoKeRuleById',
        opts: opts,
    });
}

 /** getBaoKeRuleList */
export function followRole_getBaoKeRuleList_get (opts) {
    return instance({
        method: 'get',
        url: '/followRole/getBaoKeRuleList',
        opts: opts,
    });
}

 /** updateEnable */
export function followRole_updateEnable_get (opts) {
    return instance({
        method: 'get',
        url: '/followRole/updateEnable',
        opts: opts,
    });
}

 /** addFailReason */
export function loss_addFailReason_post (opts) {
    return instance({
        method: 'post',
        url: '/loss/addFailReason',
        opts: opts,
    });
}

 /** addLossDirection */
export function loss_addLossDirection_post (opts) {
    return instance({
        method: 'post',
        url: '/loss/addLossDirection',
        opts: opts,
    });
}

 /** createLoss */
export function loss_createLoss_post (opts) {
    return instance({
        method: 'post',
        url: '/loss/createLoss',
        opts: opts,
    });
}

 /** findFails */
export function loss_fails_get (opts) {
    return instance({
        method: 'get',
        url: '/loss/fails',
        opts: opts,
    });
}

 /** getFailPage */
export function loss_getFailPage_losStatus_get (opts) {
    return instance({
        method: 'get',
        url: '/loss/getFailPage/{losStatus}',
        opts: opts,
    });
}

 /** findFailesByType */
export function loss_getFailesByType_get (opts) {
    return instance({
        method: 'get',
        url: '/loss/getFailesByType',
        opts: opts,
    });
}

 /** findLossByFail */
export function loss_getLossByFail_get (opts) {
    return instance({
        method: 'get',
        url: '/loss/getLossByFail',
        opts: opts,
    });
}

 /** findAllfirstLosses */
export function loss_getLosses_get (opts) {
    return instance({
        method: 'get',
        url: '/loss/getLosses',
        opts: opts,
    });
}

 /** getOthersReasonByParentCode */
export function loss_getOthersReasonByParentCode_get (opts) {
    return instance({
        method: 'get',
        url: '/loss/getOthersReasonByParentCode',
        opts: opts,
    });
}

 /** getPredefinedReason */
export function loss_getPredefinedReason_get (opts) {
    return instance({
        method: 'get',
        url: '/loss/getPredefinedReason',
        opts: opts,
    });
}

 /** findFailesByType */
export function loss_getReasonByType_get (opts) {
    return instance({
        method: 'get',
        url: '/loss/getReasonByType',
        opts: opts,
    });
}

 /** findLosses */
export function loss_losses_get (opts) {
    return instance({
        method: 'get',
        url: '/loss/losses',
        opts: opts,
    });
}

 /** removeFailReason */
export function loss_removeFailReason_get (opts) {
    return instance({
        method: 'get',
        url: '/loss/removeFailReason',
        opts: opts,
    });
}

 /** removeLossDirection */
export function loss_removeLossDirection_post (opts) {
    return instance({
        method: 'post',
        url: '/loss/removeLossDirection',
        opts: opts,
    });
}

 /** 线索分配-分配操作 */
export function opportunities_assign_post (opts) {
    return instance({
        method: 'post',
        url: '/opportunities/assign',
        opts: opts,
    });
}

 /** 线索分配-取消分配操作 */
export function opportunities_cancelAssign_post (opts) {
    return instance({
        method: 'post',
        url: '/opportunities/cancelAssign',
        opts: opts,
    });
}

 /** createOpportunities */
export function opportunities_createOpportunities_post (opts) {
    return instance({
        method: 'post',
        url: '/opportunities/createOpportunities',
        opts: opts,
    });
}

 /** deleteOpportunities */
export function opportunities_deleteOpportunities_delete (opts) {
    return instance({
        method: 'delete',
        url: '/opportunities/deleteOpportunities',
        opts: opts,
    });
}

 /** 新增线索-关联线索列表 */
export function opportunities_detail_activeList_get (opts) {
    return instance({
        method: 'get',
        url: '/opportunities/detail/activeList',
        opts: opts,
    });
}

 /** 线索跟进统计｜活跃线索/终结线索/历史轨迹 */
export function opportunities_detail_count_get (opts) {
    return instance({
        method: 'get',
        url: '/opportunities/detail/count',
        opts: opts,
    });
}

 /** 历史轨迹接口 */
export function opportunities_detail_history_get (opts) {
    return instance({
        method: 'get',
        url: '/opportunities/detail/history',
        opts: opts,
    });
}

 /** 活跃线索tag */
export function opportunities_detail_list_post (opts) {
    return instance({
        method: 'post',
        url: '/opportunities/detail/list',
        opts: opts,
    });
}

 /** 通话录音接口 */
export function opportunities_detail_recording_get (opts) {
    return instance({
        method: 'get',
        url: '/opportunities/detail/recording',
        opts: opts,
    });
}

 /** 终结线索tag */
export function opportunities_finished_list_post (opts) {
    return instance({
        method: 'post',
        url: '/opportunities/finished/list',
        opts: opts,
    });
}

 /** 线索处理-(批量)处理操作接口 */
export function opportunities_process_followUp_post (opts) {
    return instance({
        method: 'post',
        url: '/opportunities/process/followUp',
        opts: opts,
    });
}

 /** 线索处理-线索跟进时间处理 */
export function opportunities_process_optPlanDate_post (opts) {
    return instance({
        method: 'post',
        url: '/opportunities/process/optPlanDate',
        opts: opts,
    });
}

 /** 线索查询-查询字典接口 */
export function opportunities_query_dic_get (opts) {
    return instance({
        method: 'get',
        url: '/opportunities/query/dic',
        opts: opts,
    });
}

 /** 线索查询-查询数据接口 */
export function opportunities_query_queryNoticeData_post (opts) {
    return instance({
        method: 'post',
        url: '/opportunities/query/queryNoticeData',
        opts: opts,
    });
}

 /** 线索查询-查询统计值接口 */
export function opportunities_query_queryNoticeStatistics_post (opts) {
    return instance({
        method: 'post',
        url: '/opportunities/query/queryNoticeStatistics',
        opts: opts,
    });
}

 /** 线索查询-查询操作人(建议、实际处理人)接口 */
export function opportunities_query_queryOperators_get (opts) {
    return instance({
        method: 'get',
        url: '/opportunities/query/queryOperators',
        opts: opts,
    });
}

 /** 线索分配-获取建议处理人账号查询 */
export function opportunities_query_querySuggestedFollower_post (opts) {
    return instance({
        method: 'post',
        url: '/opportunities/query/querySuggestedFollower',
        opts: opts,
    });
}

 /** 线索分配-重新分配操作 */
export function opportunities_reassign_post (opts) {
    return instance({
        method: 'post',
        url: '/opportunities/reassign',
        opts: opts,
    });
}

 /** 线索分配-关联分配操作 */
export function opportunities_relatedAssign_post (opts) {
    return instance({
        method: 'post',
        url: '/opportunities/relatedAssign',
        opts: opts,
    });
}

 /** 线索详情-通过记录 */
export function opt_call_records_post (opts) {
    return instance({
        method: 'post',
        url: '/opt/call/records',
        opts: opts,
    });
}

 /** 1.3.1.2 线索处理-下拉选项-获取部分根节点类型字典查询接口 */
export function opt_getParentDictionary_get (opts) {
    return instance({
        method: 'get',
        url: '/opt/getParentDictionary',
        opts: opts,
    });
}

 /** 线索详情-预约列表-根据手机号查询 */
export function opt_query_appointData_mobile_get (opts) {
    return instance({
        method: 'get',
        url: '/opt/query/appointData/mobile',
        opts: opts,
    });
}

 /** 线索详情-预约列表-查询接口 */
export function opt_query_appointData_vin_get (opts) {
    return instance({
        method: 'get',
        url: '/opt/query/appointData/vin',
        opts: opts,
    });
}

 /** 线索详情-根据手机查询联系人-车信息-查询接口 */
export function opt_query_customer_mobile_get (opts) {
    return instance({
        method: 'get',
        url: '/opt/query/customer/mobile',
        opts: opts,
    });
}

 /** 线索详情-根据vin查询联系人信息-查询接口 */
export function opt_query_customer_vin_get (opts) {
    return instance({
        method: 'get',
        url: '/opt/query/customer/vin',
        opts: opts,
    });
}

 /** 线索详情-车辆信息&回店信息-查询接口 */
export function opt_query_vehicle_vin_get (opts) {
    return instance({
        method: 'get',
        url: '/opt/query/vehicle/vin',
        opts: opts,
    });
}

 /** queryBusinessInfo */
export function queryBusinessInfo_get (opts) {
    return instance({
        method: 'get',
        url: '/queryBusinessInfo',
        opts: opts,
    });
}

 /** queryRenewalInfo */
export function queryRenewalInfo_get (opts) {
    return instance({
        method: 'get',
        url: '/queryRenewalInfo',
        opts: opts,
    });
}

 /** query */
export function response_get (opts) {
    return instance({
        method: 'get',
        url: '/response',
        opts: opts,
    });
}

 /** modifyTagFlag */
export function tag_allowAddFlag_patch (opts) {
    return instance({
        method: 'patch',
        url: '/tag/allowAddFlag',
        opts: opts,
    });
}

 /** createBindTag */
export function tag_bindTag_post (opts) {
    return instance({
        method: 'post',
        url: '/tag/bindTag',
        opts: opts,
    });
}

 /** createTag */
export function tag_createTag_post (opts) {
    return instance({
        method: 'post',
        url: '/tag/createTag',
        opts: opts,
    });
}

 /** getAllTagsForPage */
export function tag_getAllTagsForPage_post (opts) {
    return instance({
        method: 'post',
        url: '/tag/getAllTagsForPage',
        opts: opts,
    });
}

 /** findBindTags */
export function tag_getBindTags_get (opts) {
    return instance({
        method: 'get',
        url: '/tag/getBindTags',
        opts: opts,
    });
}

 /** getBindTagsForProcess */
export function tag_getBindTagsForProcess_get (opts) {
    return instance({
        method: 'get',
        url: '/tag/getBindTagsForProcess',
        opts: opts,
    });
}

 /** getCovTagsForProcess */
export function tag_getCovTagsForProcess_get (opts) {
    return instance({
        method: 'get',
        url: '/tag/getCovTagsForProcess',
        opts: opts,
    });
}

 /** findTags */
export function tag_getTags_get (opts) {
    return instance({
        method: 'get',
        url: '/tag/getTags',
        opts: opts,
    });
}

 /** getTagsForProcess */
export function tag_getTagsForProcess_get (opts) {
    return instance({
        method: 'get',
        url: '/tag/getTagsForProcess',
        opts: opts,
    });
}

 /** modifyTag */
export function tag_modifyTag_post (opts) {
    return instance({
        method: 'post',
        url: '/tag/modifyTag',
        opts: opts,
    });
}

 /** saveBindTag */
export function tag_saveBindTag_post (opts) {
    return instance({
        method: 'post',
        url: '/tag/saveBindTag',
        opts: opts,
    });
}

 /** updateOrSaveCovTag */
export function tag_updateOrSaveCovTag_post (opts) {
    return instance({
        method: 'post',
        url: '/tag/updateOrSaveCovTag',
        opts: opts,
    });
}


