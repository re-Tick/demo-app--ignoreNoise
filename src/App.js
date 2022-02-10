import React from "react";
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import {Change} from "diff"
const oldCode = `
{
  "name": "keploy.noise.lOriginal name",
  "description": null
}
`;
const newCode = `
{
  "name": "keploy.noise.rMy updated name good morning",
  "description": "Brand new description",
  "status": "running"
}
`;
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
  const noise = ["name"]
  const oldObj = JSON.parse(oldCode), newObj = JSON.parse(newCode)
  
  return (
    <div className="App">
      <ReactDiffViewer
				oldValue={oldCode}
				newValue={newCode}
				// compareMethod={ignoreAllDiff}
				splitView={true}
			/>  
    </div>
  );
}