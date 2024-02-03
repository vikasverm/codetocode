function add(a) {
  console.log(this.a);
  
}

var obj={
  a:"vikas"
}


add.apply(obj)