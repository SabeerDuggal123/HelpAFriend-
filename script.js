var NameWrite
var database = firebase.database()

function color(a) {
    a1 = String(a)
    A = '#tab' + a1
    var x = document.querySelector(A)
    x.style.backgroundColor = "gold"
}

function decolor(b) {
    b1 = String(b)
    B = "#tab" + b1
    var y = document.querySelector(B)
    y.style.backgroundColor = "rgb(255, 164, 44)";
}

count = 0
/*Defines what happens to the user's text when the Paste button is pressed. It includes creating 
<li> elements in the HTML Code, assigning it the text typed by the user and finally, appending it
as a child of the <ul> tag in the HTML document.*/
/*function Enter() {
    var json = {

    }
    var list = document.getElementById("list_of_chat")
    var text = document.getElementById("comment")
    var textString = text.value
    count++
    json[count] = textString
    x = document.createElement("li")
    x.innerHTML = textString
    list.appendChild(x)
    text.value = ""

}*/

function getCommentCount() {
    ref = database.ref('commentCount')
    ref.on("value", function (y) {
        dataBaseCommentCount = y.val();
    })
}

function getNameCount() {
    ref = database.ref('commentCount')
    ref.on("value", function (y) {
        dataBaseNameCount = y.val();
    })
}
/*When called give a prompt to the user to enter his name. This will then be used to Welcome
the user using the document.write() method to write on the page*/
/*function Aprompt() {
    ref = database.ref('names/')
    var jsonName ={}
    getNameCount()
    Name = window.prompt("Hi, let me know who you are")
    if (Name == null) {
        NameWrite = document.write("Hello " + "Friend" + " !" + " Welcome to Education Today")
    }
    else {
        getNameCount()
        NameWrite = document.write("Hello " + Name + " !" + "  Welcome to Education Today")
        jsonName[dataBaseNameCount] = NameWrite
        ref.update(jsonName)
        return NameWrite
    }
}*/

function updateCommentCount(updateCommentCount) {
    ref = database.ref('/')
    ref.update({
        commentCount: updateCommentCount,

    })
}
function printIt() {
    var reference = database.ref('comments/')
    reference.on("value", function (y) {
        objectOfPrintChat = y.val()
    })
}
function nameFunction(){
    var input = document.getElementById('name').value
    var para = document.getElementById('para')
    refForName = database.ref('names/')
    getNameCount()
    updateCommentCount(dataBaseNameCount+1)
    var nameJson = {}
    nameJson["Name"+dataBaseNameCount] = input
    refForName.update(nameJson)
    para.innerHTML = "Hello " + input + "! Welcome to eduction today"
    document.getElementById('name').value = ""

}

printIt()
getCommentCount()
function chat() {
    var chat = document.getElementById('chat').value
    var refForComments = database.ref('comments/')
    getCommentCount()
    updateCommentCount(dataBaseCommentCount + 1);
    var commentJson = {}
    commentJson[dataBaseCommentCount] = chat
    refForComments.update(commentJson)
    document.getElementById('chat').value = ""
    printIt()
    alert("Thank you, your comment-  " + "'"+objectOfPrintChat[dataBaseCommentCount] +"'"+"  -has been recorded and will be acted upon promtly")
}


document.onreadystatechange = () =>{
    if (document.readyState != "complete"){
        document.getElementById('circle').style.visibility = visible
        document.getElementById('body').style.visibility = hidden
    }
    else{
        document.getElementById('circle').style.display = none
        document.getElementById('body').style.visibility = visible
    }
}




