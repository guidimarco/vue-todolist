var app = new Vue({
    el: "#root",
    data: {
        toDoTitle: "Cose da fare:",
        doneTitle: "Cose fatte:",
        toDoNewItem: "",
        checkToDo: "fa-square",
        toDoList: [
            "Fare il bucato",
            "Comprare un panino",
            "Pulire camera",
            "Andare in palestra"
        ],
        doneList: [],
        removeControl: true
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
            if (this.removeControl) {
                // CHANGE VALUE OF SENTINEL VAR
                this.removeControl = false;

                // console.log(thisToDoIndex);

                // VAR ASSIGNMENT
                actualToDoList = this.toDoList;
                currentIcon = "icon" + thisToDoIndex;

                // CHANGE CHECK-ICON
                // console.log(this.$refs); // CONTROL
                // console.log(this.$refs[currentIcon]); // CONTROL

                this.$refs[currentIcon][0].className = "fas fa-check-square"; // CHANGE THE CLASS OF THIS ICON
                // console.log(this.$refs[currentIcon]); // CONTROL

                setTimeout( () => {
                    this.$refs[currentIcon][0].className = "far fa-square"; // RE-CHANGE THE CLASS
                    this.doneList.push(actualToDoList[thisToDoIndex]); // PUSH IN DONE LIST
                    // console.log(this.doneList);
                    actualToDoList.splice(thisToDoIndex, 1); // CANCEL THIS ITEM AFTER 1 SEC
                    // console.log(this.$refs); // CONTROL

                    // RE-CHANGE VALUE OF SENTINEL VAR
                    this.removeControl = true;
                }, 1000);
            }

        }
    }
});
