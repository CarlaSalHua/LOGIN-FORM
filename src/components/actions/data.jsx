//const URL_LOGIN = 'http://localhost/loginphp/login.php'

const sendData= async (url, data)=> {
    const res= await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data), 
        headers: {
            'Content-Type': 'application/json'
        }
    });
    //console.log('res',res);
    const json= await res.json();
    //console.log('json:',json);
    return json;
};


const newUser= async (url, data)=> {
    const res= await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data), 
        headers: {
            'Content-Type': 'application/json'
        } 
    });
    //console.log('res',res);
    const json= await res.json();
    //console.log('json:',json);
    return json;
};

export {
    sendData, 
    newUser
};