// import "./styles.css";

// var oldCode = `[
// {
//   "name": {"s":"Original Name", "address": [{"sub":3},4]},
//   "description": null
// }]
// `;
// var newCode = `
// {
//   "name": {"s":"Fake Name", "address": [{"sub":1},2]},
//   "description": "Brand new description",
//   "status": "running"
// }
// `;

// var noise = ["name.address", "description"]

// function jsonParse(val: string): any{
//   try{
//     JSON.parse(val)
//   } catch(e){
//     return val
//   }
//   return JSON.parse(val)
// }

// function addNoiseTags(
//   targetStr:string, 
//   tag:string,
//   noise: string[],
//   noisyField: boolean): [any]{
//   let type
//   if (targetStr!==""){
//     type = typeof JSON.parse(targetStr)
//   }
//   console.log("line 24",targetStr, noise[0], noise[1],noisyField)
//   switch(type){
//     case "string": {
//       if (noisyField){
//         targetStr = tag+ JSON.parse(targetStr)
//         console.log(targetStr)
//       }
//       break;
//     }
//     case "number": {
//         if (noisyField){
//           targetStr = tag+ JSON.parse(targetStr) as string
//           console.log(targetStr)
//         }
//         break;
//       }
//     case "boolean": {
//         if (noisyField){
//           targetStr = tag+JSON.parse(targetStr) as string
//           console.log(targetStr)
//         }
//         break;
//       }
//     case "object": {
//       var oldVal = JSON.parse(targetStr)
//       if (oldVal===null){
//         console.log("&&&")
//         if (noisyField){
//           targetStr = tag+"null"
//           console.log("*line 142",targetStr)
//         }
//         return [targetStr]
//       }
//       if (Array.isArray(oldVal)){
//         // if (noisyField){
//         //   targetStr = "keploy.noise.l"+targetStr
//         //   newCod = "keploy.noise.r"+newCod
//         //   break;
//         // }
//         oldVal = oldVal.map((el, elIndex)=>{
//           el =  jsonParse(addNoiseTags(JSON.stringify(el), /*JSON.stringify(el),*/ tag, noise, noisyField)[0] )
//           console.log("j",el)
//           return el
//         })
//         console.log("***\n", oldVal)
//       return [JSON.stringify(oldVal)]
//       }
//       else{
//         if (noisyField){
//           for (let k in oldVal){
//             oldVal[k] = jsonParse( addNoiseTags(JSON.stringify(oldVal[k]), tag/*, JSON.stringify(oldVal[k])*/, noise, true)[0] )
//           }
//         }
//         if (noise!=undefined && Array.isArray(noise)){

//           Array.from( noise).forEach((el, elIndx) => {
//             if(el!=undefined){

//               let dotIndx = el.indexOf(".")
//               if(dotIndx === -1){
//                 let key = el.substring(0)
//                 console.log("line 70",key)
//                 let noiseTmp:string[] = []
//                 for(let i=0; i<noise.length ;i++){
//                   if (noise[i]!=undefined){
//                     noiseTmp.push(noise[i].substring( noise[i].includes(".")? noise[i].indexOf(".")+1:-1))
//                   }
//                   else{
//                     noiseTmp.push(noise[i])
//                   }
//                 } 
//                 delete noiseTmp[elIndx]
//                 if (typeof oldVal==="object" && oldVal!=null && key in oldVal){
//                   let repOld =  addNoiseTags(JSON.stringify(oldVal[key]), tag, /*JSON.stringify(oldVal[key]),*/ noiseTmp, true)
//                   console.log("line 79", repOld, JSON.parse( JSON.stringify(repOld[0])), oldVal[key])
//                   oldVal[key] = jsonParse(repOld[0])
//                 } 
//               }
//               else {
//                 let noiseTmp:string[] = []
//                 for(let i=0; i<noise.length ;i++){
//                   if (noise[i]!=undefined){
//                     noiseTmp.push(noise[i].substring( noise[i].includes(".")? noise[i].indexOf(".")+1:-1))
//                   }
//                   else{
//                     noiseTmp.push(noise[i])
//                   }
//                 } 
//                 noiseTmp[elIndx] = el.substring(dotIndx+1)
//                 var key = el.substring(0, dotIndx)
//                 console.log("line 86",key)
//                 if (oldVal!=null && key in oldVal){
//                   console.log("bug 89")
//                   oldVal[key] = jsonParse( addNoiseTags(JSON.stringify(oldVal[key]), tag, /*JSON.stringify(oldVal[key]),*/ noiseTmp, noisyField)[0] )
//                 } 
//               }
//             }
//           })
//         }
//         return [JSON.stringify(oldVal)/*,JSON.stringify(newVal)*/]
//       }
//       // break;
//     }
//     default: {
//       if (noisyField){
//         targetStr = tag+ JSON.parse(targetStr) as string
//         console.log("*line 142",targetStr/*, newCod*/)
//       }
//       break;
//     }

//   }
//   return [targetStr]
// }

// export default function App() {
//   var demo = {"1": "2"}
//   var demoStr = JSON.stringify(demo)
//   var demoTyp = typeof JSON.parse(demoStr)

//   let noiseTmp:string[] = []
//   for(let i=0; i<noise.length ;i++){
//     noiseTmp.push(noise[i])
//   }
//   let arr = addNoiseTags(oldCode, /*newCode,*/"keploy.noise.l", noiseTmp, false)
//   oldCode = arr[0]
//   console.log("Final Result",JSON.parse(arr[0]), /*JSON.parse(arr[1])*/)
//   arr = addNoiseTags(newCode, /*newCode,*/"keploy.noise.r", noise, false)
//   newCode = arr[0]
//   console.log("Final Result",JSON.parse(arr[0]), /*JSON.parse(arr[1])*/)
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//   <h2>Start editing to see some magic happen! {demoTyp}</h2>
//   <p>{oldCode} </p>
//   <p>{newCode} </p>
//   {/* <p>{arr[1]} </p> */}
//     </div>
//   );
// }
