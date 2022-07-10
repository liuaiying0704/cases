import request from '@/utils/request';
export const getSearchTag = (params) =>
  request({
    url: '/search/hot',
    params,

    // 将来外面可能传入params的值 {limit: 20}
  });
export const getSearchList = (params) =>
  request({
    url: '/cloudsearch',
    params,

    // 将来外面可能传入params的值 {limit: 20}
  });
