const express = require("express");
const app = express();

app.get("/" , (req , res) => {

    // Use javascript or CSS files
    app.use(express.static('public'));
    // res.sendFile()
    return res.sendFile (__dirname + '/public/index.html' );
});

app.get("/pathvariable/:customvalue" , (req , res) => {
    console.log(req.params);
    return res.send ({status: "Endpoint has been reached"});

});

app.get("/time" , (req , res) => {
    const date = new Date();    
    const weekday = new Array();
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let dayName = [weekday[date.getDay()]];
    console.log(req.params);
    return res.send ({
        time: date.getDate() + ":" + date.getMinutes(),  
        day: dayName, 
        month: date.getMonth(),
        year: date.getFullYear()
    });

});

app.get("/Anderstime" , (req , res) => {
    const date = new Date();    
    const localTime = date.toLocaleTimeString();

    const weekday = ["Monday","Tue", "Wen", "Thurs", "Fri", "Sat", "Sun"]
 

    return res.send ({
        time: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),  
        timeVersionTwo: localTime,
        weekday: weekday[date.getDate()],
        weekdayVersionTwo: date.toLocaleDateString("en-us", { weekday:"long"})
    });

});

app.get("/search" , (req , res) => {
    console.log(req.query.q);
    return res.send (brands.q);

});

app.get("/pathvariable/:customvalue/:multiple" , (req , res) => {
    console.log(req.params);
    return res.send ({status: "Endpoint has been reached"});

});

app.listen(9090, (error) => {
    if (error) {
        console.log("error", error);
    }
    console.log("Server is running", 9090);
});


/* CRUD API */
let cars = [
    {id: 1, name:"BMW"}, 
    {id: 2, name:"Skoda"},
    {id: 3, name:"Ikke Tesla"}
];

let currentId = 3; 

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get("/cars" , (req , res) => {
    return res.send ({response: cars});

});
app.get("/cars/:id" , (req , res) => {
    const foundCar = cars.find(car => car.id === Number(req.params.id));
    return res.send ({response: foundCar});

});

app.post("/cars/" , (req , res) => {  
    const newCar = req.body;
    newCar.id = ++currentId;
    cars.push(newCar)
    return res.send ({response: "ey okay"});
    

});

app.put("/cars/:id", (req, res) => {

    // option one
    const car = cars.find(car => car.id === Number(req.params.id));
    car.name = "Tesla";

    // option two 
    const foundIndex = cars.findIndex(car => car.id === Number(req.params.id));
    const newCar = { ...cars[foundIndex], ...req.body };
    cars[foundIndex] = newCar;

    return res.send({
        response: "okay"
    });
})

app.delete("/cars/:id", (req, res) => {
    cars = cars.filter(car => car.id !== Number(req.params.id));
    return res.send({ response: cars });
   });
   
