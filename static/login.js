


//   }
  var code ; //在全局定义验证码  
function createCode(){ 
  
  code = "";  
  var codeLength = 4;//验证码的长度  
  var checkCode = document.getElementById("code");  
  var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//随机数  
  for(var i = 0; i < codeLength; i++) {//循环操作  
    var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
    code += random[index];//根据索引取得随机数加到code上  
  }  
  checkCode.value = code;//把code值赋给验证码  
} 


function f()
{ let f=0;
  let c;
  let y;
  let em=document.getElementById('em').value;
  let ps=document.getElementById('ps').value;
  let input=document.getElementById('input').value;
  let id=em.indexOf("@");
  let la=em.lastIndexOf(".");
  //校验验证码  
  var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写     
  if(inputCode.length <= 0) { //若输入的验证码长度为0   
   c=0; //则弹出请输入验证码  
  }else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时  
   y=1; //则弹出验证码输入错误  
    createCode();//刷新验证码  
    document.getElementById("input").value = "";//清空文本框  
  }
if(em=='')
{
  document.getElementById('h1').innerText="不能为空";
  f=1;
}

else if(id<1||la-id<2||la+2>=em.length){
  document.getElementById('h1').innerText="邮箱格式不正确";
  f=1;
}
else
{
  document.getElementById('h1').innerText="";
}
if(ps=='')
{
  document.getElementById('h2').innerHTML="不能为空";
  f=1;
}


else
{
  document.getElementById('h2').innerText="";
}
if(c==0||input=="")
{
  document.getElementById('h3').innerHTML="点击输入验证码";
  f=1;
}

else if(y==1)
{
  document.getElementById('h3').innerHTML="验证码错误";
  f=1;
}
else
{
  document.getElementById('h3').innerText="";
}

if(f==0)
{
  var form = document.forms[1];
  form.submit()
}
}

