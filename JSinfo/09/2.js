let err = new SyntaxError("에러가발생했다띠용 name없잔아");
let json = '{"wrong" : "json!"}';

try {
    let obj = JSON.parse(json);
    if(obj.name === undefined){
        throw err;
    }
}
catch(err) {
    console.log(err);

}