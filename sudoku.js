function sudokuCheck (boardStr) {
  let v = boardStr.split("\n").map(function(v){ return v.split("") });
  // rows:
  let rows = v.map(function(i){ return i.map(function(v){return parseInt(v)}) }).map(function(x){ return x.sort(function(a,b){return a-b})}).map(function(i){return i.join("")}).filter(function(i){return i !== "123456789"});
  let n = [];
  for (let i = 0; i < v.length; i++){
    for (let j = 0; j < v[i].length; j++){
      n.push(v[j][i]);
    }
  }
  // columns:
  let columns = [];
  while(n.length){
    columns.push(n.slice(0, 9));
    n.splice(0, 9)
  }
  columns = columns.map(function(i){ return i.map(function(v){return parseInt(v)}) }).map(function(x){ return x.sort(function(a,b){return a-b})}).map(function(i){return i.join("")}).filter(function(i){return i !== "123456789"});
  
  // grids:
  let p = [];
  let r = [];
  let q = [];
  for (let i = 0; i < v.length; i++){
    p = p.concat(v[i].slice(0, 3));
    r = r.concat(v[i].slice(3, 6));
    q = q.concat(v[i].slice(6, 9));
  }
  let l = p.concat(r).concat(q);

  let grids = [];
  while (l.length){
    grids.push(l.slice(0, 9));
    l.splice(0, 9)
  }
  grids = grids.map(function(i){ return i.map(function(v){return parseInt(v)}) }).map(function(x){ return x.sort(function(a,b){return a-b})}).map(function(i){return i.join("")}).filter(function(i){return i !== "123456789"})

  if (rows.length === 0 &&  columns.length === 0 &&  grids.length === 0){
    return "solved";
  } else {
    return "invalid"
  }
}