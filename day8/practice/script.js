

let form = document.getElementById("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(password!==confirmPassword){
        return alert("incorrect password(do not match)")
        if(password.lenth6)
        return alert('password must be six characters')
    }
    let obj = {
        username,email,password,confirmPassword,
    }

  let userData = document.getElementById("userData");
  userData.style.backgroundColor = "lightpink";
  userData.style.width = "300px";
  userData.style.height = "300px";
  userData.style.padding = "10px";
  userData.style.border = "1px solid black";
  userData.style.marginLeft = "140px";
  userData.style.height = "300px";
 userData.style.textAlign = "centre";
   userData.style.height = "300px";
     userData.style.marginTop = "100px";
     




  let h2 = document.createElement("h2");
  h2.innerText = obj.username;

  let p1 = document.createElement("p");
  p1.innerText = obj.email;

  let p2 = document.createElement("p");
  p2.innerText = obj.password;

  let p3 = document.createElement("p");
  p3.innerText = obj.confirmPassword;

  userData.append(h2, p1, p2, p3);
});


    // console.log(obj)

// })


