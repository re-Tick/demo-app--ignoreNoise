// import "./styles.css";

// var oldCode = `
// {
//   "name": {"s":"Original Name", "address": [{"sub":3},4]},
//   "description": null
// }
// `;
// var newCode = `
// {
//   "name": {"s":"Fake Name", "address": [1,2]},
//   "description": "Brand new description",
//   "status": "running"
// }
// `;

// var noise = ["name", "k.jk"]

// function addNoiseTags(oldCode:string, newCode: string, noise: string[], noisyField: boolean): [any, any]{
//   let typ
//   if (oldCode!==""){
//     typ = typeof JSON.parse(oldCode)
//   }
//   console.log("line 24",oldCode, newCode, noisyField)
//   switch(typ){
//     case "string": {
//       if (noisyField){
//         oldCode = "keploy.noise.l"+ JSON.parse(oldCode)
//         // if (newCode!=""){
//           newCode = "keploy.noise.r"+ JSON.parse(newCode)
//         // }
//         console.log(oldCode, newCode)
//       }
//       break;
//     }
//     case "number": {
//         if (noisyField){
//           oldCode = "keploy.noise.l"+ JSON.parse(oldCode) as string
//           newCode = "keploy.noise.r"+ JSON.parse(newCode) as string
//           console.log(oldCode, newCode)
//         }
//         break;
//       }
//     case "boolean": {
//         if (noisyField){
//           oldCode = "keploy.noise.l"+JSON.parse(oldCode) as string
//           newCode = "keploy.noise.r"+JSON.parse(newCode) as string
//           console.log(oldCode, newCode)
//         }
//         break;
//       }
//     case "object": {
//       var oldVal = JSON.parse(oldCode)
//       var newVal = JSON.parse(newCode)
//       if (Array.isArray(oldVal) && Array.isArray(newVal)){
//         // if (noisyField){
//         //   oldCode = "keploy.noise.l"+oldCode
//         //   newCode = "keploy.noise.r"+newCode
//         //   break;
//         // }
//         oldVal = oldVal.map((el, elIndex)=>{
//           el =  addNoiseTags(JSON.stringify(el), JSON.stringify(el), noise, noisyField)[0] 
//           console.log("j",el)
//           return el
//         })
//         newVal = newVal.map((el)=>{
//           el =  addNoiseTags(JSON.stringify(el), JSON.stringify(el), noise, noisyField)[1] 
//           console.log(el)
//           return el
//         })
//         console.log("***\n", oldVal)
//         return [JSON.stringify(oldVal), JSON.stringify(newVal)]
//       }
//       else{
//         if (noisyField){
//           for (let k in oldVal){
//             oldVal[k] = addNoiseTags(JSON.stringify(oldVal[k]), JSON.stringify(oldVal[k]), noise, true)[0]
//           }
//           for (let k in newVal){
//             newVal[k] = addNoiseTags(JSON.stringify(newVal[k]), JSON.stringify(newVal[k]), noise, true)[1]
//           }
//         }
//         noise.forEach((el, elIndx) => {
//           var dotIndx = el.indexOf(".")
//           if(dotIndx === -1){
//             let key = el.substring(0)
//             console.log("line 70",key)
//             var noiseTmp = noise 
//             delete noiseTmp[elIndx]
//             if (typeof oldVal==="object" && key in oldVal){
//               let repOld =  addNoiseTags(JSON.stringify(oldVal[key]), JSON.stringify(oldVal[key]), noiseTmp, true)
//               console.log("line 79", repOld, JSON.parse( JSON.stringify(repOld[0])), oldVal[key])
//               oldVal[key] = repOld[0]
//             } 
//             if (typeof newVal==="object" && key in newVal){
//               let repNew = addNoiseTags(JSON.stringify(newVal[key]), JSON.stringify(newVal[key]), noiseTmp, true) 
//               console.log("line 84", repNew)
//               newVal[key] =  repNew[1] 
//             }
//           }
//           else {
//             var noiseTmp = noise 
//             noiseTmp[elIndx] = el.substring(dotIndx+1)
//             var key = el.substring(0, dotIndx)
//             console.log("line 86",key)
//             if (key in oldVal){
//               console.log("bug 89")
//               oldVal[key] = JSON.parse( addNoiseTags(JSON.stringify(oldVal[key]), JSON.stringify(oldVal[key]), noiseTmp, noisyField)[0] )
//             } 
//             if (key in newVal){
//               console.log("bug 92")
//               newVal[key] = JSON.parse( addNoiseTags(JSON.stringify(newVal[key]), JSON.stringify(newVal[key]), noiseTmp, noisyField)[1] )
//             }
//           }
//         })
//         return [JSON.stringify(oldVal),JSON.stringify(newVal)]
//       }
//       break;
//     }

//   }
//   return [oldCode, newCode]
// }

// export default function App() {
//   var demo = {"1": "2"}
//   var demoStr = JSON.stringify(demo)
//   var demoTyp = typeof JSON.parse(demoStr)

//   // const typ = typeof JSON.parse(oldCode)
//   // switch(typ){
//   //   case "string": {
//   //     if (noise.indexOf("body")!=-1){
//   //       oldCode = "keploy.noise.l"+oldCode
//   //       newCode = "keploy.noise.r"+newCode
//   //     }
//   //     break;
//   //   }
//   //   case "number": {
//   //       if (noise.indexOf("body")!=-1){
//   //         oldCode = "keploy.noise.l"+oldCode
//   //         newCode = "keploy.noise.r"+newCode
//   //       }
//   //       break;
//   //     }
//   //   case "boolean": {
//   //       if (noise.indexOf("body")!=-1){
//   //         oldCode = "keploy.noise.l"+oldCode
//   //         newCode = "keploy.noise.r"+newCode
//   //       }
//   //       break;
//   //     }
//   //   case "object": {
//   //     var oldVal = JSON.parse(oldCode)
//   //     var newVal = JSON.parse(newCode)
//   //     if (Array.isArray(oldVal)){
//   //       oldVal.forEach((el, elIndex)=>{
//   //         noise.forEach((n, nindx)=>{

//   //         })
//   //       })
//   //     }
//   //     else{

//   //     }
//   //     break;
//   //   }

//   // }
//   let arr = addNoiseTags(oldCode, newCode, noise, false)
//   oldCode = arr[0]
//   newCode = arr[1]
//   console.log("Final Result",JSON.parse(arr[0]), JSON.parse(arr[1]))
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//   <h2>Start editing to see some magic happen! {demoTyp}</h2>
//   <p>{arr[0]} </p>
//   <p>{arr[1]} </p>
//     </div>
//   );
// }
