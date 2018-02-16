// -- BPMN-SVG-Decode
//
// --- John H Schuster
//
// -- application history at end


import fs from 'fs'
import {parse} from 'himalaya'


const html = fs.readFileSync('/bpmn-sample.svg', {encoding: 'utf8'})
const json = parse(html)  // --- Sync operation, no callback required
console.log('👉', json)





// -- Application history
//
//  Date    Ver    Author   Description
// 02/16/18 1.0.0     JHRS  Initial version of app
