import React from "react";
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import {Change} from "diff"
// why there is a extra comma in model field of contact
const oldCode = `
{
  "contact": {"sample": 1, "ex": false, "model": [1,2]},
  "age": 22,
  "passed": true,
  "name":  ["Original name"]  ,
  "address": "city",
  "actKey": ["s", 10]
}
`;
const newCode = `
{
  "contact":{"sample": 2, "ex": true, "model": [3, 4, 5]},
  "age": 1,
  "passed": true,
  "actKey": ["null", 10],
  "name":  {"present":true},
  "address": "state"
}
`;
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
const noise = ["body.name", "ager", "addressr","body.contact"]
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
				// compareMethod={ignoreAllDiff}
				splitView={true}
			/>  
    </div>
  );
}