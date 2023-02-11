export class NoViewFoundError extends Error {
    constructor(message: string = "No view could be found matching the current screen viewport!") {
        super(message);
        this.name = "NoViewFoundError";
    }
}