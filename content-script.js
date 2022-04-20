/*
 * @Author: Mukti
 * @Date: 2022-04-20 16:36:24
 * @LastEditTime: 2022-04-20 16:50:07
 * @LastEditors: Mukti
 */
console.log('Copy HC Cookies');

chrome.runtime.sendMessage(document.cookie, (res) => {console.log(res)});