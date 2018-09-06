package com.wlc.berna.common.enums;

/**
 * 响应错误码
 *
 * @author Ji.huazhen
 */
public enum ResponseCodeMsg {

  /***************************************************************/
  /** 通用系统级别错误[-1]~[-9999] **/
  /***************************************************************/
  /**
   * 通用入参错误,请用[-1]开始,且仅能用负数
   */
  SYS_COMMON_ERROR("-1", "系统繁忙,请稍后再试"),

  /**
   * 通用入参错误,请用[-100]~[-199]定义
   */

  SYS_PARAM_ERROR("-100", "参数错误"), SYS_REQUEST_TARGET_NULL("-101", "请求服务标识为空"), SYS_REQUEST_PARAMS_INVALID("-102",
      "请求服务标识不存在"), SYS_REQUEST_PARAMS_NULL("-103", "参数不合法"), SYS_REQUEST_PARAMS_HEADER_NULL("-104",
      "Header中的UserID为空"), SYS_ESB_QUERY_USERID_NULL("-105", "从ESB获取用户ID失败"), SYS_SIGN_FAIL("-106",
      "验签失败"), SYS_SIGN_ERROR("-107", "验签异常"),
  SYS_CINFIG_ERROR("-108", "配置参数错误"),SYS_USER_INVALID("-109","用户信息无效"),THRESHOLD__INVALID("-110","超出限制"),
  /**
   * 通用用户错误,请用[-200]~[-299]定义
   */
  SYS_RELOGIN("-200", "用户失效,请重新登录"), SYS_BIND_MOBILE_NO("-201", "该账户未绑定手机,请绑定手机号"), SYS_SAVE_FAIL("-202", "保存失败"),
  SYS_BIND_WECHAT_NO("-203", "该账户未绑定过微信号"), SYS_WECHAT_COUPON_SENT_ALREADY("-204", "重复发券"),
  SYS_WECHAT_FIRST_BINGDING_OUT_OF_LIIMIT("-205", "首次绑定日期超过可领取期限"), SYS_WECHAT_QUERY_ERROR("-206",
      "调用微信账户信息接口服务发生异常，无法确定微信账户信息"),
  SYS_BIND_WECHAT_NO_VALID("-207", "微信账号已解除绑定"),
  /**
   * 通用ESB错误,请用[-300]~[-399]定义
   */
  SYS_ESB_REQUEST_ERROR("-300", "调用ESB出错"), SYS_ESB_REQUEST_SAVE_FAIL("-301",
      "调用ESB保存数据失败"), SYS_ESB_REQUEST_SELECT_FAIL("-302", "调用ESB查询数据失败"), SYS_ESB_REQUEST_UPDATE_FAIL("-303",
      "调用ESB更新数据失败"), SYS_ESB_REQUEST_DEL_FAIL("-304", "调用ESB删除数据失败"), SYS_REQUEST_ERROR("-305", "调用服务出错"),

  /***************************************************************/
  /** 师徒计划错误码[-400]~[-500] **/
  /***************************************************************/
  MENTORSHIP_MASTER_DUPLICATE("-401", "对不起-您已经是师父了"),
  MENTORSHIP_MASTER_STATUS_INVALID("-402", "对不起-成为师父需要您在拍拍贷的首次投资时间≥45天,且当前净资产≥5万元"),
  MENTORSHIP_MASTER_FILTER_WRONG("-403", "对不起-师傅的过滤条件不正确"),

  MENTORSHIP_PRENTICE_DUPLICATE("-411", "对不起-您已经是徒弟了"),
  MENTORSHIP_PRENTICE_STATUS_INVALID("-412", "对不起-成为徒弟需要您是在活动期间注册成为拍拍贷用户"),
  MENTORSHIP_PRENTICE_MASTER_FULL("-413", "对不起-该师父已招满徒弟"),
  MENTORSHIP_PRENTICE_DONE("-414", "对不起-您已可以出师"),

  /***************************************************************/
  /** 账户(Account)系统级别错误[10000]~[19999] **/
  /***************************************************************/
  AC_COMMON_ERROR("10000", "账户通用错误"),

  /***************************************************************/
  /** 资金(Fund)系统级别错误[20000]~[29999] **/
  /***************************************************************/
  FUND_COMMON_ERROR("20000", "资金通用错误"),

  /***************************************************************/
  /** 借出/理财(Financing)系统级别错误[30000]~[39999] **/
  /***************************************************************/
  FIN_COMMON_ERROR("30000", "借出/理财通用错误"),

  /***************************************************************/
  /** 借贷/借入(Borrow)系统级别错误[40000]~[49999] **/
  /***************************************************************/
  BORROW_COMMON_ERROR("40000", "借贷/借入通用错误"), BORROW_COMMON_QUERY_FAIL("40001", "查询失败"), BORROW_COMMON_REPAYMENT_ERROR(
      "40002", "还款异常"),

  /***************************************************************/
  /** 分控(Risk Management)系统级别错误[50000]~[59999] **/
  /***************************************************************/
  RISK_COMMON_ERROR("50000", "风控通用错误"),

  /***************************************************************/
  /** 平研(Platform)系统级别错误[60000]~[69999] **/
  /***************************************************************/
  PLAT_COMMON_ERROR("60000", "平研通用错误"),

  /***************************************************************/
  /** 百融错误码[-600]~[-700] **/
  /***************************************************************/

  BAIRONG_DATA_DUPLICATED_ERROR("-601", "数据重复推送"), BAIRONG_NOT_YESTERDAY_ERROR("-602", "日期不是前一天"),
  BAIRONG_DATE_FORMAT_ERROR("-603", "日期格式错误，格式应该为yyyy-MM-DD"),
  BAIRONG_DATA_NOT_FOUND("-604", "没有推送数据"),
  BAIRONG_BATCH_SIZE_LIMIT_ERROR("-605", "数据推送数量超过限制"),
  BAIRONG_PROCESS_ERROR("-606", "系统处理异常"),

  PPFUN_PERIOD_ERROR("-801", "当前period不存在"),
  PPFUN_PERIOD_GETTICKET_DATE_ERROR("-802", "当前开奖日不可以下注"),
  PPFUN_PERIOD_GETTICKET__ERROR("-803", "可领取注数不足,不可以下注"),

  PPINVITE_ACTIVITY_TIME_SETTING_ERROR("-850", "活动配置错误"),
  PPINVITE_ACTIVITY_TIME_PRE_ERROR("-851", "活动未开始"),
  PPINVITE_ACTIVITY_TIME_END_ERROR("-852", "活动结束"),

  PPINVITE_ACTIVITY_MOBILE_SUC("-860", "手机号可以进行注册"),
  PPINVITE_ACTIVITY_MOBILE_FAIL_END_ERROR("-861", "手机号已经注册"),
  PPINVITE_ACTIVITY_USER_NOT_ALLOWED_ERROR("-871", "您不可以进行邀请"),
  PPINVITE_ACTIVITY_USER_REG_TIME_ERROR("-872", "用户注册时间不符合邀请"),
  PPINVITE_ACTIVITY_INVITER_USER_ERROR("-873", "推荐用户无效"),
  PPINVITE_ACTIVITY_INVITEE_USER_BINDING_ERROR("-874", "绑定用户关系失败"),
  PPINVITE_ACTIVITY_INVITEE_USER_HAS_EXISTS_ERROR("-875", "用户之前已经建立绑定"),
  HB_USER_HAS_EXISTS_ERROR("-876", "之前已经评论过"),

  FU_USER_CUR_DATE_HAS_EXISTS("-877", "当天已经抽过"),
  FU_USER_CUR_DATE_SUC("-878", "抽取成功，但未中奖"),
  FU_USER_CUR_DATE_COUPON_SUC("-879", "抽取成功，中奖"),

  USER_HAD_JOIN("-880", "您已经报名"),
  USER_IS_SELF("-881", "您不可以邀请该用户"),
  USER_HAD_EXISTS("-882", "用户已经是邀请用户"),
  USER_IS_NOT_NEW_USER("-883", "不是新用户"),
  USER_IS_NEW_USER("-884", "新用户"),
  MOBILE_ERROR("-885", "手机号错误"),
  PRIZE_COUNT_ERROR("-890", "抽奖次数不足"),
  PRIZE_ERROR("-891", "奖品出错"),
  PRIZE_EXEC_ERROR("-892", "抽奖失败,请稍候再试"),
  RCP_NUMBER_ERROR("-893", "奔跑券不足"),
  USER_CANNOT_JOIN("-894","未满足条件不可以报名"),
  USER_NOT_JOIN("-895","用户没有报名"),
  AMOUNT_NOT_ENOUGH("-896","金额不足"),
  
  /***************************************************************/
  /** 【市场推广】h5活动页-摇奖机错误 **/
  /***************************************************************/

  MARKET_LOTTERY_ACTIVITY_END("MARKET_LOTTERY_ACTIVITY_END", "对不起,活动已结束."),
  MARKET_LOTTERY_ACTIVITY_NOT_START("MARKET_LOTTERY_ACTIVITY_NOT_START", "对不起,活动还未开始."),
  MARKET_LOTTERY_ACTIVITY_DUPLICATE("MARKET_LOTTERY_ACTIVITY_DUPLICATE", "每个用户仅1次摇奖机会."),

  /***************************************************************/
  /**见面会 报名错误码 **/
  /***************************************************************/

  MARKET_ENROLL_ACTIVITY_END("MARKET_ENROLL_ACTIVITY_END", "对不起,活动已结束."),
  MARKET_ENROLL_ACTIVITY_NOT_START("MARKET_ENROLL_ACTIVITY_NOT_START", "对不起,活动还未开始."),
  MARKET_ENROLL_ACTIVITY_ONLY_ONCE("MARKET_ENROLL_ACTIVITY_ONLY_ONCE", "每个用户只能报名1次."),
  MARKET_ENROLL_ACTIVITY_TIMES_OUT_OF_LIMIT("MARKET_ENROLL_ACTIVITY_TIMES_OUT_OF_LIMIT", "超过规定报名次数"),
  /***************************************************************/
  /** 其他(Other)系统级别错误[90000]~[99999] **/
  /***************************************************************/
  OTHER_COMMON_ERROR("90000", "其他类通用错误");

  /**
   * 错误码
   */
  public String code;
  /**
   * 错误描述
   */
  public String value;

  private ResponseCodeMsg(String code, String value) {
    this.code = code;
    this.value = value;
  }

  public static String getValue(String code) {
    for (ResponseCodeMsg c : ResponseCodeMsg.values()) {
      if (c.code.equals(code)) {
        return c.value;
      }
    }
    return null;
  }
}
