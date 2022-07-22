val='global'

function foo() {
  echo $val
}

function bar() {
  local val='bar'
  foo
}

bar # ✨bar
