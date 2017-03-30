//emptyAddInput清空此前遍历次序结果
function emptyAddInput(p){
	p.textContent = "遍历次序";
}

//removeElement 删除指定元素
function removeElement(_element) {
	var _parentElement = _element.parentNode;
	if(_parentElement) {
		_parentElement.removeChild(_element);
	}
}

//clickedElement 点击某个节点元素，则该节点元素呈现一个特殊被选中的样式
function clickedElement(data) {
	var inputText = document.getElementsByTagName("input")[0];
	for(var i = 0;i<data.length;i++) {
		data[i].onclick = function(e) {
			for(var k = 0;k<data.length;k++){
				data[k].className = data[k].className.replace(/clicked/,'');
			}
			this.className += " " + "clicked";
			e.stopPropagation();
			var that = this;
			
			//增加一个删除按钮，当选中某个节点元素后，点击删除按钮，则将该节点及其所有子节点删除掉
			document.getElementById("rm").onclick = function() {
				removeElement(that);
			};
			
			//点击增加按钮，则在该节点下增加一个子节点，节点内容为输入框中内容，插入在其子节点的最后一个位置
			document.getElementById("add").onclick =function() {
				var div = document.createElement("div");
				var span = document.createElement("span");
				if(inputText.value) {
					span.textContent = inputText.value;
					div.appendChild(span);
					that.appendChild(div);
					emptyAddInput(inputText);
				}else{
					alert("输入为空");
				}
			}
		}
		
	}
}

function init() {
	var root = document.getElementById("rootNode");
	var data = [root];
	data.push.apply(data,root.getElementsByTagName("div"));

	clickedElement(data);
}
init();

























