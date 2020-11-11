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
        }
    }
});
