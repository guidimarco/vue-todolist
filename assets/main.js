var app = new Vue({
    el: "#root",
    data: {
        toDoTitle: "Cose da fare:",
        toDoNewItem: "",
        checkToDo: "fa-square",
        toDoList: [
            "Fare il bucato",
            "Comprare un panino",
            "Pulire camera",
            "Andare in palestra"
        ]
    },
    methods: {
        addNewToDo: function() {
            // PUSH NEW TO DO ITEM
            this.toDoList.push(this.toDoNewItem);
            // console.log(this.toDoList);

            // CLEAR THE INPUT VALUE
            this.toDoNewItem = "";
        },
        removeToDo: function(thisToDoIndex) {
            // console.log(thisToDoIndex);

            // VAR ASSIGNMENT
            actualToDoList = this.toDoList;
            currentIcon = "icon" + thisToDoIndex;

            // CHANGE CHECK-ICON
            console.log(this.$refs); // CONTROL
            console.log(this.$refs[currentIcon]); // CONTROL

            this.$refs[currentIcon][0].className = "fas fa-check-square"; // CHANGE THE CLASS OF THIS ICON
            console.log(this.$refs[currentIcon]); // CONTROL

            setTimeout( () => {
                this.$refs[currentIcon][0].className = "far fa-square"; // RE-CHANGE THE CLASS
                actualToDoList.splice(thisToDoIndex, 1); // CANCEL THIS ITEM AFTER 1 SEC
                // console.log(this.$refs); // CONTROL
            }, 1000);

            // console.log(this.toDoList);
        }
    }
});
