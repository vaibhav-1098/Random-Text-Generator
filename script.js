// sync number and range
const NumberInp = document.getElementById("Number");
const RangeInp = document.getElementById("Range");

NumberInp.addEventListener('input', ( ) => {
    RangeInp.value = NumberInp.value;
})
RangeInp.addEventListener('input', ( ) => {
    NumberInp.value = RangeInp.value;
})


// variables
const loremText = document.getElementById("loremText");
const output = document.getElementById("output");
const submitBtn=document.getElementById("submitBtn");
const copyBtn=document.getElementById("copyBtn");

// form
document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault( );

    const x = Number(NumberInp.value) + 3
    const arr = loremText.innerHTML.split(' ')
    const newArr = arr.slice(0,-(1003-x))
    const str = newArr.join(' ')
    output.innerHTML = str

})

// generate to done
submitBtn.addEventListener('click',( )=>{
    submitBtn.innerHTML="Done";
    setTimeout(( )=>{
        submitBtn.innerHTML="Generate";
    },500)
})

// copy button 
copyBtn.addEventListener('click',( )=>{
    navigator.clipboard.writeText(output.innerHTML);

    copyBtn.innerHTML="Copied!"

    setTimeout(( )=>{
        copyBtn.innerHTML="Copy 🖨";
    },500)

})
