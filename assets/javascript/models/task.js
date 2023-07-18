class Task{
    constructor(id,title,desc){
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.isMarked = false;
    }
    toggle(){
        this.isMarked = !this.isMarked;
    }
}
export default Task;