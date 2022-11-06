const login=()=>{
    const UserName = document.getElementById('user-name');
    const UserText=UserName.value;
    
    
    
    const password = document.getElementById('pass');
    const passText = password.value;
   
    


    const forBoth ='studentcom';
    if(UserText==forBoth&&passText==forBoth){
        const link = document.location.href="https://gcom.edu.bd/"
    }
    else{
       alert('Wrong Password or User name')
    }
    
    



}
