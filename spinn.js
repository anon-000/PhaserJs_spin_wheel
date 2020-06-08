
let config={
    type:Phaser.CANVAS,
    width:900,
    height:435,
    backgroundColor:0xffcc00,
    
    
    scene:{
        preload:preload,
        create : create,
        update:update,
    }
    
    
};

let game =new Phaser.Game(config);
var music ;
var counter = 0;
function preload(){
    console.log("Preload");
    this.load.image('background','back3.jpg');
    this.load.image('wheel','whl.png');
    this.load.image('pin','pin.png');
    this.load.image('button','spin.png');
    
    this.load.image('base','base1.png');
    this.load.audio('audio1', ['spina.mp3']);
    this.load.audio('pop', [
        'pop.mp3'
    ]);
    
    
}

function create(){
   
    console.log("Create");
    
    let w=game.config.width;
    let h=game.config.height;
    
    background=this.add.sprite(w/2,h/2,'background');
    background.setScale(1);
    
    
    base=this.add.sprite(w/2,h/2+170,'base');
    base.setScale(0.2);
    
    this.wheel=this.add.sprite(w/2,h/2,'wheel');
    this.wheel.setScale(0.65);
    
    
    pin=this.add.sprite(w/2,h/2-170,'pin');
    pin.setScale(0.25);

 
   
    this.font_style={
        font:"bold 20px Roboto",
        align:"center",
        color:"white",
        fontSize: "20px",
    }
    this.font_score={
        font:"bold 30px Roboto",
        align:"center",
        color:"white",
        fontSize: "20px",
    }
    this.game_text=this.add.text(653,380,"Tap to Spin",this.font_style);
    this.game_text=this.add.text(10,10,"Welcome to Spin & Win",this.font_style);

    this.score_text = this.add.text(700,150,"Score : 0",  this.font_score);


    var but = this.add.image(700,350,'button').setInteractive();
    but.on('pointerup', spinwheel, this);
    but.setScale(0.6);


    music = this.sound.add('audio1');
    pop = this.sound.add('pop');
    
    // this.sound.add("audio1");
    // this.sound.play('audio1');
    //but.anchor.set(0.5, 1);
    // but.inputEnabled = true;
    // this.input.on("pointerdown",spinwheel,this);
    
    // but.events.onInputDown.add(spinwheel,this);
    
    //spinbutton = game.add.button(700,400,'button',spinwheel, this);
    //spinbutton.scale.setTo(0.60,0.60);
    
}

function spinwheel(){
    music.play();
    rounds = Phaser.Math.Between(5,8);
    var degree=Phaser.Math.Between(0,11)*30;
    total=rounds*360+degree+15;
   
   tween = this.tweens.add({
       targets:this.wheel,
       angle:total,
       ease:"Cubic.easeOut",
       duration:6000,
       callbackScope:this,
       onComplete:function(){
           counter = counter +(12-(degree/30));
            music.stop();
            pop.play();
           this.game_text.setText("You won "+(12-(degree/30)));
           this.score_text.setText("Score : "+counter);
           //this.add.text(w/2,h/2,(12-(degree/30)),this.font_style);
           //text.ScaleX+=1;
       }
   });
}

function update(){
    console.log("Inside update");
    
}



