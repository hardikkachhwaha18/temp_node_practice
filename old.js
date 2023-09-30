// //const names=require('./second')
// // //const sayhi= require('./third')
// // // console.log(names)
// // const data=require('./fourth')
// // // console.log(data)


// // //  sayhi(names.krishna)
// // //  sayhi(names.john)
// // //  sayhi(names.peter)
//  //require('./five')

//  const { Console } = require('console')
// const os = require('os')
// const user =os.userInfo()
// console.log(user)
// console.log(`uptime ${os.uptime()} seconds`)
// const path = require('path')
// console.log(path.sep)
// const filePath=path.join('/new/','sub new','subnewtext.js')
// console.log(filePath)
// const base=path.basename(filePath)
// console.log(base)
// const absolute = path.resolve(__dirname,'new','sub new','subnewtext.js')
// console.log(absolute)
// const {readFileSync, writeFileSync}= require('fs')
// const first=readFileSync('./new/hii.txt','Utf8')
// const second=readFileSync('./new/hii2.txt','Utf8')
// console.log(first,second)

// writeFileSync('./new/results.txt',`hello results : ${first},${second}`,{flag:'a'})
// const {readFile , writeFile}= require('fs')
// readFile('./new/hii.txt', 'utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const first=result;
//     readFile('./new/hii2.txt','utf8',(err,result)=>{
//         if (err){
//             console.log(err)
//             return
//         }
//         const second=result;
//         writeFile('./new/result2.txt',`hii: ${first}, ${second}`,(err,result)=>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log(result);
//         })


//     })
// })
// const {readFile , writeFile}= require('fs')
// console.log('start')
// readFile('./new/hii.txt', 'utf8',(err,result)=>{
//      if(err){
//          console.log(err)
//          return
//      }
//      const first=result;
//    readFile('./new/hii2.txt','utf8',(err,result)=>{
//          if (err){
//              console.log(err)
//              return
//          }
//          const second=result;
//          writeFile('./new/result2.txt',`hii: ${first}, ${second}`,(err,result)=>{
//              if(err){
//                  console.log(err);
//                  return;
//              }
//              console.log('done');
//          })


//      })
//  })
//  console.log("starting new")
