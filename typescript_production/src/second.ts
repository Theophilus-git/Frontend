// implementing Interface

interface TakePhoto{
    cameraMode:string
    filter:string
    burst:number
}

interface story{
    createStory():string
}

class Insta implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}
}


class youtube implements TakePhoto, story{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,
        public update:string
    ){}

    createStory(): string {
        return `Millionaire`
    }

}