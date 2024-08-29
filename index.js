function login(){
   email= document.getElementById("email").value;
   pass= document.getElementById("pass").value;

   em = "admin123@gmail.com"
   p = "admin123"

   if(email==em && pass==p){
    window.open("certificate.html");
   }else if(email!= em){
    alert("Invalid Email address");
   }else if(pass!= p){
    alert("Invalid Password");
   }
}


function result(){
name = document.getElementById("sname").value;
document.getElementById("name").innerHTML = name;

rn = document.getElementById("roll_no").value;
document.getElementById("roll").innerHTML = rn;
if(rn >= 70){
   alert("The roll number must be less than 70")
}

java = document.getElementById("java").value;
if(java > 100){
   alert("JAVA marks must be under 100")
}else{
   document.getElementById("java_marks").innerHTML = java + "/100";
}


cplus = document.getElementById("cplus").value;
if(cplus > 100){
   alert("C++ marks must be under 100")
}else{
   document.getElementById("cplus_marks").innerHTML = cplus + "/100";
}

python = document.getElementById("python").value;
if(python > 100){
   alert("Python marks must be under 100")
}else{
   document.getElementById("python_marks").innerHTML = python + "/100";
}

ruby = document.getElementById("ruby").value;
if(ruby > 100){
   alert("Ruby marks must be under 100")
}else{
   document.getElementById("ruby_marks").innerHTML = ruby + "/100";
}

jsp = document.getElementById("jsp").value;
if(jsp > 100){
   alert("JSP marks must be under 100")
}else{
   document.getElementById("jsp_marks").innerHTML = jsp + "/100";
}

total_marks = +java + +cplus + +ruby + +python + +jsp ;
percent = document.getElementById("percentage").innerHTML = (total_marks /500) * 100 + " %" ;
 
grades = document.getElementById("java").value; 
if(grades >=80 && grades <=100){
   document.getElementById("java_grade").innerHTML = "O GRADE"
}else if(grades >=70 && grades <=80){
   document.getElementById("java_grade").innerHTML = "A GRADE"
}else if(grades >=60 && grades <=70){
   document.getElementById("java_grade").innerHTML = "B GRADE"
}else if(grades >=50 && grades <=60){
   document.getElementById("java_grade").innerHTML = "C GRADE"
}else if(grades >=35 && grades <=50){
   document.getElementById("java_grade").innerHTML = "D GRADE"
}else if(grades <35){
   document.getElementById("java_grade").innerHTML = " FAIL"
}


grades = document.getElementById("cplus").value; 
if(grades >=80 && grades <=100){
   document.getElementById("cplus_grade").innerHTML = "O GRADE"
}else if(grades >=70 && grades <=80){
   document.getElementById("cplus_grade").innerHTML = "A GRADE"
}else if(grades >=60 && grades <=70){
   document.getElementById("cplus_grade").innerHTML = "B GRADE"
}else if(grades >=50 && grades <=60){
   document.getElementById("cplus_grade").innerHTML = "C GRADE"
}else if(grades >=35 && grades <=50){
   document.getElementById("cplus_grade").innerHTML = "D GRADE"
}else if(grades <35){
   document.getElementById("cplus_grade").innerHTML = " FAIL"
}


grades = document.getElementById("python").value; 
if(grades >=80 && grades <=100){
   document.getElementById("python_grade").innerHTML = "O GRADE"
}else if(grades >=70 && grades <=80){
   document.getElementById("python_grade").innerHTML = "A GRADE"
}else if(grades >=60 && grades <=70){
   document.getElementById("python_grade").innerHTML = "B GRADE"
}else if(grades >=50 && grades <=60){
   document.getElementById("python_grade").innerHTML = "C GRADE"
}else if(grades >=35 && grades <=50){
   document.getElementById("python_grade").innerHTML = "D GRADE"
}else if(grades <35){
   document.getElementById("python_grade").innerHTML = " FAIL"
}


grades = document.getElementById("ruby").value; 
if(grades >=80 && grades <=100){
   document.getElementById("ruby_grade").innerHTML = "O GRADE"
}else if(grades >=70 && grades <=80){
   document.getElementById("ruby_grade").innerHTML = "A GRADE"
}else if(grades >=60 && grades <=70){
   document.getElementById("ruby_grade").innerHTML = "B GRADE"
}else if(grades >=50 && grades <=60){
   document.getElementById("ruby_grade").innerHTML = "C GRADE"
}else if(grades >=35 && grades <=50){
   document.getElementById("ruby_grade").innerHTML = "D GRADE"
}else if(grades <35){
   document.getElementById("ruby_grade").innerHTML = " FAIL"
}


grades = document.getElementById("jsp").value; 
if(grades >=80 && grades <=100){
   document.getElementById("jsp_grade").innerHTML = "O GRADE"
}else if(grades >=70 && grades <=80){
   document.getElementById("jsp_grade").innerHTML = "A GRADE"
}else if(grades >=60 && grades <=70){
   document.getElementById("jsp_grade").innerHTML = "B GRADE"
}else if(grades >=50 && grades <=60){
   document.getElementById("jsp_grade").innerHTML = "C GRADE"
}else if(grades >=35 && grades <=50){
   document.getElementById("jsp_grade").innerHTML = "D GRADE"
}else if(grades <35){
   document.getElementById("jsp_grade").innerHTML = " FAIL"
}



}
