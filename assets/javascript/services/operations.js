import Task from "../models/task.js";
const OPERATIONS = {
    arr :[],
    gettask(){
        return this.arr;
    },
    add( id,title,desc){
        let task = new Task();
        task['id'] = id;
        task['title'] = title;
        task['desc'] = desc
        task['isMarked'] = false;
        this.arr.push(task);
    },
    delete(){
        this.arr =  this.arr.filter(obj =>!obj.isMarked)
    },
    update(){

    },
    search(taskid){
        return this.arr.find(obj=>obj.id === taskid);
    },
    mark(taskid){
       let obj =  this.search(taskid);
       obj.toggle();
    }
}
export default OPERATIONS;