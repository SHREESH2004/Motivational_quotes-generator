const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("App ready");
})
const motivationalQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your limitation—it's only your imagination.",
    "Dream it. Wish it. Do it.",
    "Push yourself, because no one else is going to do it for you.",
    "Sometimes later becomes never. Do it now."
];
//cors is used for cross origin(not allowed)
app.get('/api/quotes',(req,res)=>{
    res.send(motivationalQuotes);
})
const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log("App running on port 3000");
})
//npm run build gives a distribution folder which helps to run in backend but as react virtualdom doest existas dist is staic thats why change anything in frontend yuo have to do npm run dev again and then 
//put in dist folder in backend