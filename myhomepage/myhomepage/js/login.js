const idInput = document.querySelector('#login_input input:first-of-type');
const pwInput = document.querySelector('#login_input input:last-of-type');
const bttn = document.querySelector("#bttn");
const forgot = document.querySelector("#forgot");


bttn.addEventListener('click', () => {
  const id = idInput.value;
  const pw = pwInput.value;
  
  if(id === "add24" && pw === "5313"){
    alert("로그인에 성공했습니다.");
    window.location.href="main.html";
  }else{
    alert('아이디 또는 패스워드가 올바르지 않습니다.');
  }
});

forgot.onclick = ()=>{
  let id, pw,half1,half2;

  id = "add24";
  pw = "5313";
  half1 = id.length/2;
  half2 = pw.length/2;
  id = id.substring(0,(id.length-half1));
  pw = pw.substring(0,(pw.length-half2));
  alert(`아이디:${id}*** , 패스워드:${pw}**`);
}



