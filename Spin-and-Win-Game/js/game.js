let prizes_config = {
    count:12,
    prize_names : ["3000 Credits","35% Off","Hard Luck","70% OFF","Swagpack","100% OFF","Netflix","50% Off","Amazon Voucher","2 Extra Spin", "CB Tshirt","CB Book"]
}

let config = {
    type : Phaser.CANVAS,
    width : 800,
    height: 650,
    backgroundColor : 0xffcc00,
    
    scene : {
        preload : preload,
        create : create,
        update : update,
    }
   
};

let game = new Phaser.Game(config);

function preload(){
    console.log("Preload");
    //load object, load some images
    this.load.image('background', 'js/back.jpg');
    console.log(this);
    this.load.image('wheel', 'js/wheel.png');
    this.load.image('pin', 'js/pin.png');
    this.load.image('stand', 'js/stand.png');
       
}
function create(){
    console.log("Create");
    //create the background image
    let W = game.config.width;
    let H = game.config.height;
    
    let background = this.add.sprite(0,0,'background');
    background.setPosition(W/2,H/2);
    background.setScale(0.20);
    
     //lets create the stand
    let stand = this.add.sprite(W/2,H/2 + 260,'stand');
    stand.setScale(0.25);
    
    //lets create a pin
    let pin = this.add.sprite(W/2,H/2-255,"pin");
    pin.setScale(0.20);
    pin.depth = 1;
    
    //let create wheel
    this.wheel = this.add.sprite(W/2,H/2,"wheel");
    this.wheel.setScale(0.25); 
    
    //event listener for mouse click
    this.input.on("pointerdown",spinwheel,this);
    
    //lets create text object
    font_style = {
        font : "bold 30px Arial",
        align : "center",
        color : "red",
    }
    this.game_text = this.add.text(10,10,"Welcome to Spin & Win",font_style);  
}

//Game Loop
function update(){
    console.log("Inside Update");
    //this.wheel.angle += 1;
}

function spinwheel(){
    
    console.log("You clicked the mouse");
    console.log("Start spinning");
    
    let rounds = Phaser.Math.Between(2,4);
    let degrees = Phaser.Math.Between(0,11)*30;
    
    let total_angle = rounds*360 + degrees;
    console.log(total_angle);
    
    let idx = prizes_config.count - 1 - Math.floor(degrees/(360/prizes_config.count));
    
    
    tween = this.tweens.add({
        targets: this.wheel,
        angle: total_angle, 
        ease: "Cubic.easeOut",
        duration: 6000,
        callbackScope:this,
        onComplete:function(){
            this.game_text.setText("Congrats!! You won " + prizes_config.prize_names[idx]);
        },
    });
    
}






