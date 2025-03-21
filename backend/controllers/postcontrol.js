async function  loginRoute(req , res) {
    console.log(req.body );
    const {username ,password} = await req.body;

    if(username == undefined , password == undefined) {
        res.send("enter youur username password");
    } else {
         loginform.create({
            username, password
         })
       res.send("user create");
    }
}
module.exports = { 
    loginRoute
}