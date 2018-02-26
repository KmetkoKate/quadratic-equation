module.exports = function solveEquation(equation) {
  var num = equation.replace(/\s/g, "").replace("*x^2"," ").replace("*x"," ").split(" ");
  var a = parseInt(num[0]);
  var b = parseInt(num[1]);
  var c = parseInt(num[2]);
  var x1;
  var x2;
  var ans = [];
   var disk = b*b - (4 * a * c);
  if(disk > 0){
    x1 = Math.round(((-b) + Math.sqrt(disk)) / (2 * a));
    x2 = Math.round(((-b) - Math.sqrt(disk)) / (2 * a));
  }
  ans.push(x1, x2);
  ans.sort(function(a, b) {
  return a - b;
});
  return ans;
}
