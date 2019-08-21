function checkScope(){
    let i = "function scope"
    if(true){
        let i = "block Scope"
        console.log("Block Scope is:", i)
    }
    console.log("function Scope is:", i)
}

checkScope()


function printMany(str) {
    const SENTENCE = str + " practice 2019"
    for(let i = 8; i < 10; i++){
        console.log(SENTENCE)
    }
}
printMany('javascript')

const s = [3, 5, 8, 9, 3]
function editFunction(){
    s[0] = 1
    s[1] = 7
    s[2] = 5
    s[3] = 8
    s[4] = 2
}
editFunction()

console.log(s)



   function checkPalindrom(palindrom){

    for( var i = palindrom.length; i > 0; i-- )
    {
        if( palindrom[i] = palindrom.charAt(palindrom.length)-1 )
        {
            document.write('the word is palindrome.');
        }else{
            document.write('the word is not palindrome!');
        }
    }
}
checkPalindrom('wordthatwillbechecked');