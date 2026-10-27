abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    abstract getMoney():string
}

class insta extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)
    }

    getMoney(){
        return `hundred million dollars`
    }
}