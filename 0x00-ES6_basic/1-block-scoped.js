var task
var task2 

export default function taskBlock(trueOrFalse) {
    task = false;
    task2 = true;

    if (trueOrFalse) {
        task = true;
        task2 = false;
    }

    return [task, task2];
}
