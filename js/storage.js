var user = { // object
    name: "John Doe",
    email: "john@gmail.com",
    age: 30,
    address: "123 Main St, City, Country"
}
var strUser = JSON.stringify(user);// biến đối tượng user thành chuỗi JSON - string
localStorage.setItem("user", strUser);// lưu chuỗi JSON vào localStorage với key là "user"