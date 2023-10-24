// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加接口信息 创建 添加接口信息 创建 POST /api/productInfo/add */
export async function addProductInfoUsingPOST(
  body: API.ProductInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/api/productInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除接口信息 删除接口信息 POST /api/productInfo/delete */
export async function deleteProductInfoUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/productInfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id获取接口信息 通过id获取接口信息 GET /api/productInfo/get */
export async function getProductInfoByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProductInfoByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseProductInfo>('/api/productInfo/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取列表 分页获取列表 GET /api/productInfo/get/searchText */
export async function listProductInfoBySearchTextPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listProductInfoBySearchTextPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageProductInfo>('/api/productInfo/get/searchText', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取列表（仅管理员可使用） 获取列表（仅管理员可使用） GET /api/productInfo/list */
export async function listProductInfoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listProductInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListProductInfo>('/api/productInfo/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取列表 分页获取列表 GET /api/productInfo/list/page */
export async function listProductInfoByPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listProductInfoByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageProductInfo>('/api/productInfo/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 下线 下线 POST /api/productInfo/offline */
export async function offlineProductInfoUsingPOST(
  body: API.IdRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/productInfo/offline', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发布 发布 POST /api/productInfo/online */
export async function onlineProductInfoUsingPOST(
  body: API.IdRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/productInfo/online', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新接口信息 更新 更新接口信息 更新 POST /api/productInfo/update */
export async function updateProductInfoUsingPOST(
  body: API.ProductInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/productInfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
