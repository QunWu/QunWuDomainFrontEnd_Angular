export class ListGroup{
    constructor(public list : ListEntity[]=[],public groupName:String = undefined){}
}

export class ListEntity{
    constructor(public listName:String,public link:String = undefined,public listDesc?:String ){}
}