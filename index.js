const date=document.querySelector("#date");
const number=document.querySelector("#number");
const check=document.querySelector("#check-Btn")
const output_img=document.querySelector("#output_img")
const output_text=document.querySelector("#output_text")
const notice=document.querySelector(".notice");
const notice_icon=document.querySelector("#notice_icon")

function checkLucky(dateTotal,luckyNumber)
{
    if(dateTotal%luckyNumber==0)
    {
        console.log("Lucky person")
        output_img.src='images/lucky.png'
        output_text.innerHTML="You are a lucky person! 🥳"
        output_img.style.display='block'
    }
    else{
        console.log("not a lucky person")
        output_img.src='images/unlucky.png'
        output_text.innerHTML="Your birthday is not a lucky number! 😭"
        output_img.style.display='block'
    }
}

check.addEventListener("click",(event)=>
{
    event.preventDefault();
    if(date.value=='' || number.value==='')
    {
        return;
    }
    const bdayDate=date.value;
    const dateTotal=[...bdayDate].filter(elem=>elem!='-').reduce((total,curr)=>total+parseInt(curr),0)
    const luckyNumber=parseInt(number.value);

    checkLucky(dateTotal,luckyNumber)

})

notice_icon.addEventListener('click',(e)=>
{
    console.log("clicked")
    notice.style.display="none";
})
