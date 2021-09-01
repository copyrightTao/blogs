export const getCookie = name => {
  // 获取cookie
  // const cookies = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)
  // return cookies ? cookies.pop() : ''
  const cookieContent = "; " + document.cookie;
  const cookies = cookieContent.split(`; ${name}=`);
  return cookies.length - 1
    ? cookies
        .pop()
        .split(";")
        .shift()
    : "";
};
export const setCookie = (name, val, days) => {
  // 设置cookie
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${val}${expires}; path=/`;
};
