const getName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if(!err) {
        resolve({
          code: 200,
          info: {
            name: 'action获取 name'
          }
        })
      }else {
        reject(err);
      }
    }, 2000)
  })
}

export {
  getName
}
// 可多次导出，且import需要名字一一对应
// 或者统一默认导出，名字可以自定义
// export default 

