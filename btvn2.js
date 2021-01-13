console.log("hello world");
//bai dao so
var i = prompt("Vui long nhap so muon dao");
var sodao = "";
while (+i >= 1) {
  sodao = sodao + (i % 10);
  i = Math.floor(i / 10);
}
console.log(sodao);

//bai tinh tien taxi
var qd = prompt("Nhap so km");
console.log(qd);
if (qd > 0 && qd <= 50) {
  console.log("so tien la", qd, "$");
} else if (qd > 50 && qd <= 100) {
  console.log("so tien la", 50 * 1 + (qd - 50) * 1.5, "$");
} else if (qd > 100) {
  console.log("so tien la", 50 * 1 + 50 * 1.5 + (qd - 100) * 2, "$");
}

//bai tinh ban gai hop tuoi
var tuoinam = prompt("Vui long nhap tuoi cu ban");
var tuoinu = prompt("Vui long nhap tuoi ban gai");
console.log(tuoinam, tuoinu);
var kc = tuoinu - tuoinam;
if (kc < 5 || kc > 5) {
  console.log("Hy vong ban co tinh yeu moi");
} else if (tuoinu % 4 == 0 && tuoinu % 100 != 0) {
  console.log("Hop tuoi qua.Dat ten con di ban");
} else {
  console.log("Hy vong ban co tinh yeu moi");
}
