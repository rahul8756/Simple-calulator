function insert(num) {
  document.form.textveiw.value = document.form.textveiw.value + num;
}

function equal() {
  var exp = document.form.textveiw.value;
  if (exp) {
    document.form.textveiw.value = eval(exp);
  }
}

function clean() {
  document.form.textveiw.value = "";
}

function back() {
  var exp = document.form.textveiw.value;
  document.form.textveiw.value = exp.substring(0, exp.length - 1);
}

function sine() {
  document.form.textveiw.value = Math.sin(form.textveiw.value);
}

function tane() {
  document.form.textveiw.value = Math.tan(form.textveiw.value);
}

function cose() {
  document.form.textveiw.value = Math.cos(form.textveiw.value);
}

function squareroot() {
  document.form.textveiw.value = Math.pow(form.textveiw.value, 1 / 2);
}

function GFG_Fun() {
  document.form.textveiw.value = factorial(form.textveiw.value);
}

function factorial(n) {
  let i;
  let fac = 1;
  for (i = 2; i <= n; i++) {
    fac = fac * i;
  }
  return fac;
}
