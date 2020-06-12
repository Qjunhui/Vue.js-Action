var app = new Vue({
    el : "#app",
    data : {
        list : [
            {
                checked : false,
                id : 1,
                name : "iPhone 7",
                price : 6188,
                count : 1
            },
            {
                checked : true,
                id : 2,
                name : "iPad Pro",
                price : 5888,
                count : 1
            },
            {
                checked : false,
                id : 3,
                name : "MacBook Pro",
                price : 21488,
                count : 1
            }
        ]
    },
    computed : {
        totalPrice : function() {
            var total = 0;
            for(var i=0;i<this.list.length;i++) {
                total += this.list[i].price * this.list[i].count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,",");
        },
        checkedPrice : function() {
            var checked = 0;
            for(var i=0;i<this.list.length;i++) {
                if(this.list[i].checked) {
                    checked += this.list[i].price * this.list[i].count;
                }
            }
            return checked.toString().replace(/\B(?=(\d{3})+$)/g,",");
        }
    },
    methods : {
        handleReduce : function(index) {
            if(this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd : function(index) {
            this.list[index].count++;
        },
        handleRemove : function(index) {
            this.list.splice(index,1);
        },
        checkedAll : function(event) {
            if(event.target.checked) {
                for(var i=0;i<this.list.length;i++) {
                    this.list[i].checked = true;
                }
            }else {
                for(var i=0;i<this.list.length;i++) {
                    this.list[i].checked = false;
                }
            }
        },
        checked : function(index) {
            if(this.list[index].checked) {
                this.list[index].checked = false;
            }else {
                this.list[index].checked = true;
            }
        }
    }
})