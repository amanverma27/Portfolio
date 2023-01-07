

// typwriter effect 


// const cursor = document.querySelector('.cursor')
// const container2 = document.querySelector('.container2')

// document.addEventListener("mousemove", (e) => {
//     cursor.style.top = e.pageY + 'px';
//     cursor.style.left = e.pageX + 'px';
// })

// let timeout;
// document.onmousemove = function(e){
//   cursor.style.top = e.pageY + 'px';
//   cursor.style.left = e.pageX + 'px';
//   cursor.style.transform = 'scale(20)';
//   container2.style.display = 'block';

//   clearTimeout(timeout);
//   timeout = setTimeout(function(){
//     cursor.style.transform = 'scale(1)';
//     container2.style.display = 'none';
//   }, 700);
// }

// form

function sendEmail() {
  const params = {
    name : document.getElementById("name").value,
    gmail : document.getElementById("gmail").value,
    message : document.getElementById("message").value,
  };
  const serviceid= "service_iptcb2m"
 const templeteid = "template_px0540t"

 emailjs
 .send(serviceid , templeteid , params)
 .then((res)=>{
  document.getElementById("name").value = "",
  document.getElementById("gmail").value = "",
  document.getElementById("message").value = "",
  console.log(res)
  alert ("Your message is send sucessfully")
 })
 .catch((err)=>{
  console.log("Enter the details");
 })


}
