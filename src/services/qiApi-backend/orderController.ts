// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 取消订单订单 取消订单订单 POST /api/order/closed */
export async function closedProductOrderUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.closedProductOrderUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/order/closed', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建订单 创建订单 POST /api/order/create */
export async function createOrderUsingPOST(
  body: API.PayCreateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseProductOrderVo>('/api/order/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteProductOrder POST /api/order/delete */
export async function deleteProductOrderUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteProductOrderUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/order/delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 按id获取产品订单 按id获取产品订单 GET /api/order/get */
export async function getProductOrderByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProductOrderByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseProductOrderVo>('/api/order/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取列表 分页获取列表 GET /api/order/list/page */
export async function listProductOrderByPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listProductOrderByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseOrderVo>('/api/order/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 解析订单通知结果 通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m 解析订单通知结果 通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m POST /api/order/notify/order */
export async function parseOrderNotifyResultUsingPOST(
  body: string,
  options?: { [key: string]: any },
) {
  return request<string>('/api/order/notify/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询订单状态 查询订单状态 POST /api/order/query/status */
export async function queryOrderStatusUsingPOST(
  body: API.ProductOrderQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/order/query/status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
