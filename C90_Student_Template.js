canvas = document.getElementById('myCanvas');
/*
Correct the function name and use a 2d context
*/
ctx = canvas.getcontext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	car1_imgTag = new Image(); //defining a variable with a new image
	/*
	Upload the correct car
	*/
	car1_imgTag.onload = uploadcar; // setting a function, onloading this variable
	/*
	Assign a correct car_image variable
	*/
	car1_imgTag.src = car_image;   // load image

	car2_imgTag = new Image(); //defining a variable with a new image
	car2_imgTag.onload = uploadCar2; // setting a function, onloading this variable
	car2_imgTag.src = car2_image;   // load image
}

function uploadBackground() {
	/*
	Correct the function names
	*/
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
	/*
	Correct the function names
	*/
	cTx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
	/*
	Correct the function names
	*/
	ctx.DrawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1_up();
			console.log("up arrow key");
		}
		if(keyPressed == '40')
		{
			car1_down();
			console.log("down arrow key");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("left arrow key");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("right arrow key");
		}
		if(keyPressed == '87')
		{
			car2_up();
			console.log("key w");
		}
		if(keyPressed == '83')
		{
			car2_down();
			console.log("key s");
		}
		if(keyPressed == '65')
		{
			car2_left();
			console.log("key a");
		}
		if(keyPressed == '68')
		{
			car2_right();
			console.log("key d");
		}
}