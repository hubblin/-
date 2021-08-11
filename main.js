const str = `hellow 
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
the quick brown fox jumps over the lazy dog.
abbcccdddd`


//const regexp = new RegExp('the', 'gi')
const regexp = /fox/gi
console.log(str.replace(regexp, 'aaa'))

const regexp2 = /the/
console.log(str.match(/\.$/gim))
//정규 표현식에서는 . 이 특정 명령으로 작용할 수가 있다. 
//$는 앞의 문자로 끝나는 내용을 의미한다.

const h = `  the hello  world   !
`;

console.log(h.replace(/\s/g, ''))


console.log(str.match(/(?<=@).{1,}/g))