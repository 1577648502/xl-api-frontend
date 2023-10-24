declare namespace API {
  type BaseResponseboolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseImageVo = {
    code?: number;
    data?: ImageVo;
    message?: string;
  };

  type BaseResponseInterfaceInfo = {
    code?: number;
    data?: InterfaceInfo;
    message?: string;
  };

  type BaseResponseListInterfaceInfo = {
    code?: number;
    data?: InterfaceInfo[];
    message?: string;
  };

  type BaseResponseListProductInfo = {
    code?: number;
    data?: ProductInfo[];
    message?: string;
  };

  type BaseResponseListUserVO = {
    code?: number;
    data?: UserVO[];
    message?: string;
  };

  type BaseResponselong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseobject = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseOrderVo = {
    code?: number;
    data?: OrderVo;
    message?: string;
  };

  type BaseResponsePageInterfaceInfo = {
    code?: number;
    data?: PageInterfaceInfo;
    message?: string;
  };

  type BaseResponsePageProductInfo = {
    code?: number;
    data?: PageProductInfo;
    message?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
  };

  type BaseResponseProductInfo = {
    code?: number;
    data?: ProductInfo;
    message?: string;
  };

  type BaseResponseProductOrderVo = {
    code?: number;
    data?: ProductOrderVo;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type closedProductOrderUsingPOSTParams = {
    /** orderNo */
    orderNo?: string;
  };

  type deleteProductOrderUsingPOSTParams = {
    /** id */
    id?: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type Field = true;

  type getCaptchaUsingGETParams = {
    /** emailAccount */
    emailAccount?: string;
  };

  type getInterfaceInfoByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getProductInfoByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getProductOrderByIdUsingGETParams = {
    /** id */
    id?: string;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByInvitationCodeUsingPOSTParams = {
    /** invitationCode */
    invitationCode?: string;
  };

  type IdRequest = {
    id?: number;
  };

  type ImageVo = {
    /** 名称 */
    name?: string;
    /** 状态 */
    status?: string;
    /** 图片uid */
    uid?: string;
    /** 路径 */
    url?: string;
  };

  type InterfaceInfo = {
    avatarUrl?: string;
    createTime?: string;
    description?: string;
    id?: number;
    isDelete?: number;
    method?: string;
    name?: string;
    reduceScore?: number;
    requestExample?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    responseParams?: string;
    returnFormat?: string;
    status?: number;
    totalInvokes?: number;
    updateTime?: string;
    url?: string;
    userId?: number;
  };

  type InterfaceInfoAddRequest = {
    /** 描述信息 */
    description?: string;
    /** 请求方法 */
    method?: string;
    /** 接口名称 */
    name?: string;
    /** 减少积分个数 */
    reduceScore?: number;
    /** 请求示例 */
    requestExample?: string;
    /** 请求头 */
    requestHeader?: string;
    /** 接口请求参数 */
    requestParams?: RequestParamsField[];
    /** 响应头 */
    responseHeader?: string;
    /** 接口响应参数 */
    responseParams?: ResponseParamsField[];
    /** 返回格式 */
    returnFormat?: string;
    /** 接口地址 */
    url?: string;
  };

  type InterfaceInfoUpdateAvatarRequest = {
    /** 接口头像 */
    avatarUrl?: string;
  };

  type InterfaceInfoUpdateRequest = {
    /** 接口头像 */
    avatarUrl?: string;
    /** 描述信息 */
    description?: string;
    /** 请求方法 */
    method?: string;
    /** 接口名称 */
    name?: string;
    /** 调用接口扣费个数 */
    reduceScore?: number;
    /** 请求示例 */
    requestExample?: string;
    /** 请求头 */
    requestHeader?: string;
    /** 接口请求参数 */
    requestParams?: RequestParamsField[];
    /** 响应头 */
    responseHeader?: string;
    /** 接口响应参数 */
    responseParams?: ResponseParamsField[];
    /** 返回格式 */
    returnFormat?: string;
    /** 接口状态（0- 默认下线 1- 上线） */
    status?: number;
    /** 接口地址 */
    url?: string;
  };

  type InvokeRequest = {
    /** 接口id */
    id?: number;
    /** 接口参数 */
    requestParams?: Field[];
    /** 用户传递参数 */
    userRequestParams?: string;
  };

  type listInterfaceInfoByPageUsingGETParams = {
    current?: number;
    description?: string;
    method?: string;
    name?: string;
    pageSize?: number;
    reduceScore?: number;
    'responseParams[0].desc'?: string;
    'responseParams[0].fieldName'?: string;
    'responseParams[0].id'?: string;
    'responseParams[0].type'?: string;
    returnFormat?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userId?: number;
  };

  type listInterfaceInfoBySearchTextPageUsingGETParams = {
    current?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
  };

  type listInterfaceInfoUsingGETParams = {
    current?: number;
    description?: string;
    method?: string;
    name?: string;
    pageSize?: number;
    reduceScore?: number;
    'responseParams[0].desc'?: string;
    'responseParams[0].fieldName'?: string;
    'responseParams[0].id'?: string;
    'responseParams[0].type'?: string;
    returnFormat?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userId?: number;
  };

  type listProductInfoByPageUsingGETParams = {
    addPoints?: number;
    current?: number;
    description?: string;
    name?: string;
    pageSize?: number;
    productType?: string;
    sortField?: string;
    sortOrder?: string;
    total?: number;
  };

  type listProductInfoBySearchTextPageUsingGETParams = {
    current?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
  };

  type listProductInfoUsingGETParams = {
    addPoints?: number;
    current?: number;
    description?: string;
    name?: string;
    pageSize?: number;
    productType?: string;
    sortField?: string;
    sortOrder?: string;
    total?: number;
  };

  type listProductOrderByPageUsingGETParams = {
    addPoints?: number;
    current?: number;
    orderName?: string;
    orderNo?: string;
    pageSize?: number;
    payType?: string;
    productInfo?: string;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    total?: number;
  };

  type listUserByPageUsingGETParams = {
    current?: number;
    gender?: string;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userAccount?: string;
    userName?: string;
    userRole?: string;
  };

  type listUserUsingGETParams = {
    current?: number;
    gender?: string;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userAccount?: string;
    userName?: string;
    userRole?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type OrderVo = {
    /** 第几页 */
    current?: number;
    /** 优化计数 */
    optimizeJoinOfCountSql?: boolean;
    /** 所有订单 */
    orders?: OrderItem[];
    /** 所有接口信息 */
    records?: ProductOrderVo[];
    /** 每页多少个 */
    size?: number;
    /** 总数 */
    total?: number;
  };

  type PageInterfaceInfo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: InterfaceInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageProductInfo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ProductInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PayCreateRequest = {
    /** 支付类型 */
    payType?: string;
    /** 接口id */
    productId?: string;
  };

  type ProductInfo = {
    /** 增加积分个数 */
    addPoints?: number;
    /** 创建时间 */
    createTime?: string;
    /** 产品描述 */
    description?: string;
    /** 过期时间 */
    expirationTime?: string;
    /** id */
    id?: number;
    /** 是否删除 */
    isDelete?: number;
    /** 产品名称 */
    name?: string;
    /** 产品类型（VIP-会员 RECHARGE-充值） */
    productType?: string;
    /** 状态（0- 默认下线 1- 上线） */
    status?: number;
    /** 金额(分) */
    total?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 创建人 */
    userId?: number;
  };

  type ProductInfoAddRequest = {
    /** 增加积分个数 */
    addPoints?: number;
    /** 产品描述 */
    description?: string;
    /** 过期时间 */
    expirationTime?: string;
    /** 产品名称 */
    name?: string;
    /** 产品类型（VIP-会员 RECHARGE-充值） */
    productType?: string;
    /** 金额(分) */
    total?: number;
  };

  type ProductInfoUpdateRequest = {
    /** 增加积分个数 */
    addPoints?: number;
    /** 产品描述 */
    description?: string;
    /** 过期时间 */
    expirationTime?: string;
    /** id */
    id?: number;
    /** 产品名称 */
    name?: string;
    /** 产品类型（VIP-会员 RECHARGE-充值） */
    productType?: string;
    /** 金额(分) */
    total?: number;
  };

  type ProductOrderQueryRequest = {
    /** 增加积分个数 */
    addPoints?: number;
    current?: number;
    /** 商品名称 */
    orderName?: string;
    /** 微信订单号/支付宝订单id */
    orderNo?: string;
    pageSize?: number;
    /** 支付方式（默认 WX- 微信 ZFB- 支付宝） */
    payType?: string;
    /** 商品信息 */
    productInfo?: string;
    sortField?: string;
    sortOrder?: string;
    /** 接口订单状态(SUCCESS：支付成功 REFUND：转入退款 NOTPAY：未支付 CLOSED：已关闭 REVOKED：已撤销（仅付款码支付会返回） USERPAYING：用户支付中（仅付款码支付会返回） PAYERROR：支付失败（仅付款码支付会返回）) */
    status?: string;
    /** 金额(分) */
    total?: number;
  };

  type ProductOrderVo = {
    /** 增加积分个数 */
    addPoints?: number;
    /** 支付二维码地址 */
    codeUrl?: string;
    /** 创建时间 */
    createTime?: string;
    /** 产品描述 */
    description?: string;
    /** 过期时间 */
    expirationTime?: string;
    /** 支付宝订单体 */
    formData?: string;
    /** 商品名称 */
    orderName?: string;
    /** 订单编号 */
    orderNo?: string;
    /** 支付类型 */
    payType?: string;
    /** 商品id */
    productId?: number;
    /** 产品信息 */
    productInfo?: ProductInfo;
    /** 产品类型（VIP-会员 RECHARGE-充值） */
    productType?: string;
    /** 接口订单状态(SUCCESS：支付成功 REFUND：转入退款 NOTPAY：未支付 CLOSED：已关闭 REVOKED：已撤销（仅付款码支付会返回） USERPAYING：用户支付中（仅付款码支付会返回） PAYERROR：支付失败（仅付款码支付会返回）) */
    status?: string;
    /** 金额(分) */
    total?: string;
  };

  type RequestParamsField = {
    /** 描述 */
    desc?: string;
    /** 请求接口名称 */
    fieldName?: string;
    /** 请求接口id */
    id?: string;
    required?: string;
    /** 请求类型 */
    type?: string;
  };

  type ResponseParamsField = {
    /** 描述 */
    desc?: string;
    /** 请求接口名称 */
    fieldName?: string;
    /** 请求接口id */
    id?: string;
    /** 请求类型 */
    type?: string;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type UserAddRequest = {
    /** 钱包余额（分） */
    balance?: number;
    /** 性别 */
    gender?: string;
    /** 账号 */
    userAccount?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户昵称 */
    userName?: string;
    /** 密码 */
    userPassword?: string;
    /** 用户角色: user, admin */
    userRole?: string;
  };

  type UserBindEmailRequest = {
    /** 验证码 */
    captcha?: string;
    /** 邮箱账户 */
    emailAccount?: string;
  };

  type UserEmailLoginRequest = {
    /** 验证码 */
    captcha?: string;
    /** 邮箱账户 */
    emailAccount?: string;
  };

  type UserEmailRegisterRequest = {
    /** 验证码 */
    captcha?: string;
    /** 邮箱账户 */
    emailAccount?: string;
    /** 邀请码 */
    invitationCode?: string;
    /** 用户名 */
    userName?: string;
  };

  type UserLoginRequest = {
    /** 用户名 */
    userAccount?: string;
    /** 密码 */
    userPassword?: string;
  };

  type UserRegisterRequest = {
    /** 确认密码 */
    checkPassword?: string;
    /** 邀请码 */
    invitationCode?: string;
    /** 账号 */
    userAccount?: string;
    /** 用户昵称 */
    userName?: string;
    /** 密码 */
    userPassword?: string;
  };

  type UserUnBindEmailRequest = {
    /** 验证码 */
    captcha?: string;
    /** 邮箱账户 */
    emailAccount?: string;
  };

  type UserUpdateRequest = {
    /** 钱包余额（分） */
    balance?: number;
    /** 性别 */
    gender?: string;
    /** id */
    id?: number;
    /** 账号状态（0- 正常 1- 封号） */
    status?: number;
    /** 账号 */
    userAccount?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户昵称 */
    userName?: string;
    /** 密码 */
    userPassword?: string;
    /** 用户角色: user, admin */
    userRole?: string;
  };

  type UserVO = {
    /** 访问密钥 */
    accessKey?: string;
    /** 钱包余额（分） */
    balance?: number;
    /** 创建时间 */
    createTime?: string;
    /** 用户昵称 */
    email?: string;
    /** 性别 */
    gender?: string;
    /** id */
    id?: number;
    /** 邀请码 */
    invitationCode?: string;
    /** 秘密密钥 */
    secretKey?: string;
    /** 账号状态（0- 正常 1- 封号） */
    status?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 账号 */
    userAccount?: string;
    /** 用户头像 */
    userAvatar?: string;
    /** 用户昵称 */
    userName?: string;
    /** 用户角色: user, admin */
    userRole?: string;
  };
}
