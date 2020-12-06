export default function ValidateCell(value:string){
  const re = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
  re.test(value)

  var result = re.test(value)
  return result
}
