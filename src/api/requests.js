// import { useDispatch } from 'react-redux';
// import { showLoading, hideLoading } from '../store/loadingSlice.js';
import { defaultInstance, authInstance, adminInstance } from './util.js';

const SIGNUP = `/auth/signup`;
const LOGIN = `/auth/login`;
const AUTH_ME = `/auth/me`;
const AUTH_USER = `/auth/user`;
const BANKS = `/account/banks`;
const ACCOUNT = `/account`;
const PRODUCT = `/products`;
const SEARCH = `/products/search`;
const BUY = `/products/buy`;
const BUY_OK = `/products/ok`;
const TRANSACTION = `/products/transactions`;
const TRANSACTION_ALL = `/products/transactions/all`;
const TRANSACTION_DETAIL = `/products/transactions/details`;

// let dispatch = useDispatch();
const requestPost = async (path, instance, data) => {
  try {
    // dispatch(showLoading());
    await instance.post(path, JSON.stringify(data)).then((res) => {
      return res;
    });
  } catch (e) {
    // TODO: 에러 처리 추가
    console.log(e);
    throw new Error('에러가 발생하였습니다.');
  } finally {
    // dispatch(hideLoading());
  }
};

const requestGet = async (path, instance) => {
  try {
    await instance.get(path).then((res) => {
      return res;
    });
  } catch (e) {
    // TODO: 에러 처리 추가
    console.log(e);
    throw new Error('에러가 발생하였습니다.');
  } finally {
  }
};

const requestPut = async (path, instance, data) => {
  try {
    await instance.put(path, JSON.stringify(data)).then((res) => {
      return res;
    });
  } catch (e) {
    // TODO: 에러 처리 추가
    console.log(e);
    throw new Error('에러가 발생하였습니다.');
  } finally {
  }
};

const requestDelete = async (path, instance) => {
  try {
    await instance.delete(path).then((res) => {
      return res;
    });
  } catch (e) {
    // TODO: 에러 처리 추가
    console.log(e);
    throw new Error('에러가 발생하였습니다.');
  } finally {
  }
};

// 로그인 /auth/login, POST
// 인증확인 /auth/me, POST
// 로그아웃 /auth/logout, POST
// 사용자 정보 수정 /auth/user, PUT

// 회원가입
export const signup = (data) => {
  return requestPost(SIGNUP, defaultInstance, data);
};

// 로그인
export const login = (data) => {
  return requestPost(LOGIN, defaultInstance, data);
};

// 로그아웃
export const logout = () => {};

// 인증확인
export const checkAuth = () => {};

// 사용자 정보 수정
export const updateUserInfo = (data) => {
  return requestGet(AUTH_USER, authInstance, data);
};

// 선택 가능한 은행 목록 조회 /account/banks, GET
// 계좌 목록 및 잔액 조회 /account, GET
// 계좌 연결 /account, POST
// 계좌 해지 /account, DELETE

// 선택 가능한 은행 목록 조회
export const selectBanks = () => {
  return requestGet(BANKS, authInstance);
};

// 계좌 목록 및 잔액 조회
export const selectListAccount = () => {};

// 계좌 연결
export const insertAccount = () => {};

// 계좌 해지
export const deleteAccount = () => {};

// 단일 제품 상세 조회 /products/:productId, GET
// 제품 검색 /products/search, POST
// 제품 거래 신청 /products/buy, POST
// 제품 거래 확정 /products/ok, POST
// 제품 전체 거래 내역 /products/transactions/details, GET
// 단일 제품 상세 거래 내역 /products/transactions/detail, POST

// 단일 제품 상세 조회
export const selectProductDetail = (id) => {
  return requestGet(`${PRODUCT}/${id}`, authInstance);
};

// 제품 검색
export const searchProduct = () => {};

// 제품 거래 신청
export const insertOrder = (data) => {
  return requestPost(BUY, authInstance, data);
};

// 제품 거래 확정
export const updateOrderOk = () => {};

// 제품 전체 거래 내역
export const selectListOrder = () => {};

// 단일 제품 상세 거래 내역
export const selectOrder = () => {};

// 모든 제품 조회 /products, GET
// 전체 거래 내역 /products/transactions/all, GET
// 거래 내역 완료/취소 및 해제 /products/transactions/:detailId, PUT
// 제품 추가 /products, POST
// 제품 수정 /products/:productId, PUT
// 제품 삭제 /products/:productId, DELETE

// 모든 제품 조회 (관리자)
export const selectListProductAdmin = () => {
  return requestGet(PRODUCT, adminInstance);
};

// 전체 거래 내역 조회 (관리자)
export const selectListOrderAdmin = () => {
  return requestGet(TRANSACTION_ALL, adminInstance);
};

// 거래 내역 완료/완료 해제, 취소/취소 해제 (관리자)
export const updateOrderAdmin = (id, data) => {
  return requestPut(`${TRANSACTION}/${id}`, adminInstance, data);
};

// 제품 추가 (관리자)
export const insertProduct = (data) => {
  return requestPost(PRODUCT, adminInstance, data);
};

// 제품 수정 (관리자)
export const updateProduct = (id, data) => {
  return requestPut(`${PRODUCT}/${id}`, adminInstance, data);
};

// 제품 삭제 (관리자)
export const deleteProduct = (id) => {
  return requestDelete(`${PRODUCT}/${id}`, adminInstance);
};
