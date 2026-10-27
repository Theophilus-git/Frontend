// implementing Interface
class Insta {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class youtube {
    cameraMode;
    filter;
    burst;
    update;
    constructor(cameraMode, filter, burst, update) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.update = update;
    }
    createStory() {
        return `Millionaire`;
    }
}
export {};
//# sourceMappingURL=second.js.map