window.addEventListener('load', function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    class Ball {
	constructor() {
            this.x = 100;
            this.y = 100;
            this.vx = 5;
            this.vy = 2;
            this.radius = 25;
            this.colour = 'blue';
	}

	draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.colour;
            ctx.fill();
	}
    }

    ball = new Ball();

    // write your code here

    // Replace the next line with the function drawBall()
    ball.draw();

    // TODO: Question 1
    function horizontalMove(){
    	// write some code here based on drawBall
    }
    // horizontalMove();

    // TODO: Question 2
    const verticalMove = function() {
    	// write some code here based on drawBall
    };
    // verticalMove();


    // TODO: Question 3
    // initial directions (you can or cannot use these variables)
    let xDirection = 'right';
    let yDirection = 'down';

    const moveInsideCanvas = function() {
	// write some code here based on horizontalMove and verticalMove functions
    };
    // moveInsideCanvas();

});
