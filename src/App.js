import React from "react";
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import {Change} from "diff"
// why there is a extra comma in model field of contact
// const oldCode = `
// {
//   "id": "ch_3KTo5z2eZvKYlo2C1eciaDFx",
//   "object": "charge",
//   "customer": {
//     "id": "cu_19yUkk2eZvKYlo2CRR27Mn2H",
//     "object": "customer"
//   },
//   "invoice": {
//     "id": "in_1KTo5z2eZvKYlo2CHoJkL2uo",
//     "object": "invoice",
//     "subscription": {
//       "id": "su_1JedlQ2eZvKYlo2CDlNe3ElW",
//       "object": "subscription"
//     }
//   }
// }
// `;
// const newCode = `
// {
//   "id": "ch_3KTo5z2eZvKYlo2C1eciaDFx",
//   "object": "charge",
//   "customer": {
//     "id": "cu_19yUkk2eZvKYlo2CRR27Mn2H",
//     "object": "customer"
//   },
//   "invoice": {
//     "id": "in_1KTo5z2eZvKYlo2CHoJkL2u",
//     "object": "invoice",
//     "subscription": {
//       "id": "su_1JedlQ2eZvKYlo2CDlNe3ElW",
//       "object": {"subscriptio": 1}
//     }
//   }
// }
// `;
// const oldCode = `
// {
//   "feel": 1332581376,
//   "west": {
//     "arrive": {"rocket": false, "engines": 25},
//     "unknown": [
//       false,
//       1232447590,
//       true,
//       1362941449,
//       "village",
//       860703217
//     ],
//     "feed": false,
//     "written": -514144727.70264053,
//     "smooth": 709691008,
//     "game": -1374721569.7988281
//   },
//   "drink": -870252693.9497232,
//   "tube": false,
//   "anything": "held",
//   "star": 1115773227
// }
// `;
// const newCode = `
// {
//   "feel": 1332581376,
//   "west": {
//     "arrive": [true, "hwlios"],
//     "unknown": [
//       true,
//       1232447590,
//       true,
//       1362941449,
//       "village",
//       860703217
//     ],
//     "feed": false,
//     "written": 514144727.70264053,
//     "smooth": 709691008,
//     "game": -1374721569.7988281
//   },
//   "drink": -870252693.9497232,
//   "tube": false,
//   "anything": "held",
//   "star": 1115773227
// }
// `
// const oldCode = `
// [
//   4,
//   1,
//   9
// ]
// `;
// const newCode = `
// [
//   3,
//   5
// ]
// `;
// const oldCode = `
// {
//   "dhoni": 7
// }
// `
// const newCode = `
// [
//   25,
//   49
// ]
// `
// const oldCode = `
// {
//   "url" : "www.google.com",
//   "timeout": 10,
//   "statusOk": true
// }
// `
// const newCode = `
// {
//   "name": "Modi"
// }
// `

const oldCode = ``
const newCode = ``
const noise = ["body.invoice.subscription.object", "body.address", 
// "body.west.unknown",
// "body",
 "body.west.arrive"
]
function ignoreAllDiff(oldCode, newCode){
  console.log("ignoreAllDiff", oldCode, " ", newCode)
  return [{
    // count: 1,
    value: oldCode,
    added: true,
    removed: false
  }, {
    // count: 1,
    value: newCode,
    added: false,
    removed: true
  }]
}
export default function App() {
  // JSON.stringify
  // const noise = ["name"]
  const oldObj = JSON.parse(oldCode), newObj = JSON.parse(newCode)
  
  return (
    <div className="App">
      <ReactDiffViewer
				oldValue={oldCode}
				newValue={newCode}
        noise = {noise}
				compareMethod="diffSentences"
				splitView={true}
			/>  
    </div>
  );
}