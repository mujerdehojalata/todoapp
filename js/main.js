/* function getInputValue() {
	var inputBox = document.getElementById("inputBox");
	return inputBox.value;
}

function tweet() {
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		doTweet(inputBoxValue);
		clean();
	}
}

function doTweet(tweetText) {
	var tweets = document.getElementById("tweets");

	//Crear el elemento
	var elemento = document.createElement("div");
	elemento.className = "tweet";
	elemento.innerHTML = tweetText;

	//Agregar elementos a tweets
	tweets.appendChild(elemento);

	var ex = tweets.lastChild;
	alert(ex.innerHTML);
}

function clean() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}
*/
// todos los items deben lucir así

//<li><input type="checkbox"/><span>Has todoapp</span></li>
//nota: evadir variables globales
// hacer mi codigo reusable

function updateItemStatus(){
	var cbId= this.id.replace("cb_", "");
	var itemText=document.getElementById("item_"+cbId);
	
	if(this.checked){
	   itemText.className="checked";
	}else{
		itemText.className="";
	}
}

function removeItem(){
	var spanId= this.id.replace("item_", "");
	document.getElementById("li_"+spanId).style.display="none";
}

function addNewItem(list,itemText) {
	var date= new Date();
	var id = date.getMinutes() + date.getSeconds()+date.getMilliseconds() ;
	
	var listItem = document.createElement("li");
	
	listItem.id="li_"+id;
	
	var checkBox=document.createElement("input");
	checkBox.type="checkbox";
	checkBox.id="cb_"+ id;
	checkBox.onclick= updateItemStatus;
	
	var span= document.createElement("span");
	span.id="item_" + id;
	span.innerText=itemText;
	span.onclick= removeItem;
	
	listItem.appendChild(checkBox);
	listItem.appendChild(span);
	list.appendChild(listItem);

}


var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function(){
	var inItemText=document.getElementById("inItemText");
	var itemText= inItemText.value;
	if (!itemText || itemText ==""|| itemText==" "){
		return false;
	}
	addNewItem(document.getElementById("todoList"),itemText);
};