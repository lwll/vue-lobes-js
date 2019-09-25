/**
 * @Author: lwsmilence
 * @Create time: 2019/7/1 22:14
 * @Last Modified time: 2019/7/1 22:14
 * @Desc:
 */
export const isValidUsername = (str) => str.length > 2 && str.length <= 30

export const isValidPassword = (str) => str.length > 6 && str.length <= 30
