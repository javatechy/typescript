interface player { 
    run(): void;
    addLives(n: number): void;
    score(): number; 
}

// similr to class implement interface
function createPlayer():player {
    // must  implement pleayer methods
    return {
        run: function () { alert("Run ");},
        addLives: function (n: number) {  alert("Add Lives");},
        score: function () { 
            return -1;
        }

    }

}
var player1 = createPlayer();