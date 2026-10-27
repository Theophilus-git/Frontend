class TakePhoto {
    cameraMode;
    filter;
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class insta extends TakePhoto {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getMoney() {
        return `hundred million dollars`;
    }
}
export {};
//# sourceMappingURL=abstract.js.map