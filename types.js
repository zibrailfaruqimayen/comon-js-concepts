// dynamic type language

// primitive type
const a = 5;
const b = "Samsu kopai na ekhon ar";
const d = true;

//  non-primitive type
const ages = [45, 65, 48];
const student = { id: 23, class: 7 };
// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: "Web developer" };
let q = p;
q = { job: "backend" };
q.job = "front end developer";
console.log(p, q);
