var app = new Vue({
    el: "#root",
    data: {
        toDoTitle: "Cose da fare:",
        toDoNewItem: "",
        toDoList: [
            "Fare il bucato",
            "Comprare un panino",
            "Pulire camera",
            "Andare in palestra"
        ]
    },
    methods: {
        addNewToDo: function() {
            this.toDoList.push(this.toDoNewItem);
            // console.log(this.toDoList);
        },
        removeToDo: function(thisToDoIndex) {
            // console.log(thisToDoIndex);
            this.toDoList.splice(thisToDoIndex, 1);
            // console.log(this.toDoList);
        }
    }
});
