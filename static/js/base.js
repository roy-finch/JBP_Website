function qUpdate() {
    var quantity = document.getElementById("quantity").value
    var type = document.getElementById("type").value
    const values = [9.99, 12.99, 14.99]
    document.getElementById("q").value = quantity;
    document.getElementById("t").value = type;
    
    if (type == "Type 1") {
        val = values[0];
    } else if (type == "Type 2") {
        val = values[1];
    } else if (type == "Type 3") {
        val = values[2];
    }
    
    document.getElementById("price").value = parseFloat(quantity*val).toFixed(2);
}

function scrollUpdate(e) {
    var scroll = this.oldScroll > this.scrollY
    if (this.oldScroll > this.scrollY) {
    } else if (this.oldScroll < this.scrollY) {
    }

    if (this.scrollY >= 0 && this.scrollY < 600) {
        document.title = "J&B Pallets | Home"
    } else if (this.scrollY >= 600 && this.scrollY < 1200) {
        document.title = "J&B Pallets | Info"
    } else if (this.scrollY >= 1200 && this.scrollY < 1800) {
        document.title = "J&B Pallets | Estimate"
    }  else if (this.scrollY >= 1800) {
        document.title = "J&B Pallets | Contact Us"
    }
    this.oldScroll = this.scrollY;
}