
var coll = document.getElementsByClassName("collapsible");
var i;
var activeCollapsible = null;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    if (activeCollapsible && activeCollapsible !== this) {
      activeCollapsible.classList.remove("active");
      activeCollapsible.nextElementSibling.style.maxHeight = null;
    }
    
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
    
    activeCollapsible = this.classList.contains("active") ? this : null;
  });
}

