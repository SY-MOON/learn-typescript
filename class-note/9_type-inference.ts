var a = 10;

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

//2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem: Dropdown<string> = {
//   value: '',
//   title: ''
// }


//3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}
  
var detailedItem: DetailedDropdown<string> = {
  title: 'abc', 
  description: 'ab',
  value: '',
  tag: ''
}

//best common type
var arr = [1,2,true,'a'];
