function createButton(content,attributeName,attributeValue,foo){
    var button = document.createElement("button");
    button.setAttribute("type","button");
    if(attributeName && attributeValue) {
        button.setAttribute(attributeName,attributeValue);
    }
    button.className="btn";
    button.innerHTML=content;
    button.addEventListener("click", () => foo(content));
    return button;
}
function createEle(tagName,className,attributeName,attributeValue,content){
    var element = document.createElement(tagName);
    element.setAttribute("class",className);
    if(attributeName && attributeValue) {
        element.setAttribute(attributeName,attributeValue);
    }
    element.innerHTML=content;
    return element;
}

function createInput(className,attributeName1,attributeValue1,attributeName2,attributeValue2,content){
    var element = document.createElement("input");
    element.setAttribute("class",className);
    if(attributeName1 && attributeValue1 && attributeName2 && attributeValue2) {
        element.setAttribute(attributeName1,attributeValue1);
        element.setAttribute(attributeName2,attributeValue2);
    }
    element.innerHTML=content;
    return element;
}

var expression="";

var fun1 = (value) => {
    expression = expression + value;
    document.getElementsByClassName("display")[0].value=expression;
}

var backspace = () => {
    expression = expression.slice(0,-1);
    document.getElementsByClassName("display")[0].value=expression;
}

var clear = () =>{
    expression="";
    document.getElementsByClassName("display")[0].value=expression;
}

var equalsTo = () => {
    try{
        var result = eval(expression);
        expression=result;
        document.getElementsByClassName("display")[0].value=result;
    }
    catch{
        document.getElementsByClassName("display")[0].value="ERROR";
    }
}

document.addEventListener("keydown",(evt)=>{
    console.log(evt);
    var operands=["/","*","-","+","."];
    if(!isNaN(evt.key)||operands.includes(evt.key)){
        fun1(evt.key);
    }else if(evt.key=="Backspace"){
        backspace();
    }else if(evt.key=="="||evt.key=="Enter"){
        equalsTo();
    }
});

var outBox = createEle("div","container outBox","","","");
var title = createEle("h1","title text-center","id","title","CALCULATOR TASK");
var description = createEle("p","description text-center","id","description","Done by using DOM, and Bootstrap Only");
document.body.append(title,description,outBox);
var row1 = createEle("div","row row1","","",""); 
var display = createInput("display","type","text","id","result",""); 
row1.append(display);
var row2 = createEle("div","row row2","","",""); 
var col21 = createEle("div","col-3 clear","","","");
var button21 = createButton("C","id","clear",clear);
col21.append(button21);
var col22 = createEle("div","col-3 backspace","","","");
var button22 = createButton("<--","","",backspace);
col22.append(button22);
var col23 = createEle("div","col-3 operand","","","");
var button23 = createButton(".","","",fun1);
col23.append(button23);
var col24 = createEle("div","col-3 operand","","","");
var button24 = createButton("*","","",fun1);
col24.append(button24);
row2.append(col21,col22,col23,col24);

var row3 = createEle("div","row row3","","",""); 
var col31 = createEle("div","col-3","","","");
var button31 = createButton("7","id","7",fun1);
col31.append(button31);
var col32 = createEle("div","col-3","","","");
var button32 = createButton("8","id","8",fun1);
col32.append(button32);
var col33 = createEle("div","col-3","","","");
var button33 = createButton("9","id","9",fun1);
col33.append(button33);
var col34 = createEle("div","col-3 operand","","","");
var button34 = createButton("/","","",fun1);
col34.append(button34);
row3.append(col31,col32,col33,col34);

var row4 = createEle("div","row row4","","",""); 
var col41 = createEle("div","col-3","","","");
var button41 = createButton("4","id","4",fun1);
col41.append(button41);
var col42 = createEle("div","col-3","","","");
var button42 = createButton("5","id","5",fun1);
col42.append(button42);
var col43 = createEle("div","col-3","","","");
var button43 = createButton("6","id","6",fun1);
col43.append(button43);
var col44 = createEle("div","col-3 operand","","","");
var button44 = createButton("-","id","subtract",fun1);
col44.append(button44);
row4.append(col41,col42,col43,col44);

var row5 = createEle("div","row row5","","",""); 
var col51 = createEle("div","col-3","","","");
var button51 = createButton("1","id","1",fun1);
col51.append(button51);
var col52 = createEle("div","col-3","","","");
var button52 = createButton("2","id","2",fun1);
col52.append(button52);
var col53 = createEle("div","col-3","","","");
var button53 = createButton("3","id","3",fun1);
col53.append(button53);
var col54 = createEle("div","col-3 operand","","","");
var button54 = createButton("+","id","add",fun1);
col54.append(button54);
row5.append(col51,col52,col53,col54);

var row6 = createEle("div","row row6","","",""); 
var col61 = createEle("div","col-3","","","");
var button61 = createButton("0","id","0",fun1);
col61.append(button61);
var col62 = createEle("div","col-3","","","");
var button62 = createButton("00","id","00",fun1);
col62.append(button62);
var col63 = createEle("div","col-6","","","");
var button63 = createButton("=","id","equal",equalsTo);
col63.append(button63);
row6.append(col61,col62,col63);




outBox.append(row1,row2,row3,row4,row5,row6);
