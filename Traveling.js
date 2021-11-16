//adding character from south to north and west to east

var tigger =   {character: "Tigger",
                greet: function(){
                    console.log("Tigger - The wonderful thing about Tiggers is Tiggers are wonderful things!");
                }
}; // start with just the character attribute

var pooh = {character: "Winnie the Pooh",
            greet: function(){
                console.log("Pooh - Ohh, amazing that you arrived, Have you brought some honey?");
            }
};
tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;
pooh.north = tigger.north.north;

var piglet =  { character: "Piglet",
                greet: function(){
                    console.log("Piglet - Oh d-d-d-d-dear! I was not expecting company!");
                }
};                                   // create Piglet's home object with just the character attribute
piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
tigger.north.west = piglet;

var bees = {character: "Bees",
            greet: function(){
                console.log("Bess - Ggggg Gggggg Gggggg!");
            }
};
bees.west = tigger.north;
tigger.north.east = bees;

var owl =  {character:"Owl",
            greet: function(){
                console.log("Owl - Hello traveler! Is everything doing well?");
            }
};
owl.east = pooh.north;
piglet.north = owl;


var christopherRobin = {character: "Christopher Robin",
                        greet: function(){
                            console.log("Christopher Robin - Hello my friend! Welcome to my home!");
                        }
};
christopherRobin.south = tigger.north;
christopherRobin.west = piglet.north;


var rabbit = {character: "Rabbit",
            greet: function(){
                console.log("Rabbit - Hi there! Are you looking for my carrots?");
            }
};
bees.north = rabbit;
christopherRobin.east = bees.north;


var gopher =   {character: "Gopher",
                greet: function(){
                    console.log("Gopher - Hello traveler! Welcome to my caaaaaaaaaave!");
                }
};
gopher.west = rabbit;
rabbit.east = bees.north.east;


var kanga = {character: "Kanga",
            greet: function(){
                console.log("Kanga - Hello! Would you like to jump with me!");
            }
};
christopherRobin.north = kanga;


var eeyore = {character: "Eeyore",
                greet: function(){
                    console.log("Eeyore - Hello! Have you seen my tail?");
                }
};
eeyore.south = christopherRobin.north;
kanga.north = eeyore;

var heffalumps = {character: "Heffalumps",
                    greet: function(){
                        console.log("Heffalumps - Hi! Would you like to play?");
                    }
};
heffalumps.west = kanga.north;
eeyore.east = heffalumps;


//console.log(tigger);
//console.log(piglet);
//console.log(kanga);


var player = {
    location: tigger
}

function move(direction){
    //player.location.greet();
    if(direction == "north" ){
        if(player.location.north == undefined){
            console.log("There is not path to head North, so you may not go that way!")
        }
        else {
            player.location = player.location.north;
            console.log("You moved to North and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
    if(direction == "south" ){
        if(player.location.south == undefined){
            console.log("There is not path to head South, so you may not go that way!")
        }
        else {
            player.location = player.location.south;
            console.log("You moved to South and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
    if(direction == "east" ){
        if(player.location.east == undefined){
            console.log("There is not path to head East, so you may not go that way!.")
        }
        else {
            player.location = player.location.east;
            console.log("You moved to East and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
    if(direction == "west" ){
        if(player.location.west == undefined){
            console.log("There is not path to head West, so you may not go that way!.")
        }
        else {
            player.location = player.location.west;
            console.log("You moved to West and arrive at " + player.location.character + "'s house!");
            player.location.greet();
        }
    }
}


//console.log(piglet.west);
//console.log(player.location.south);
move("south");
move("north");
move("west");
move("north");
move("east");
move("north");
move("north");
move("east");