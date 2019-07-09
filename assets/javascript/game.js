

$( document ).ready(function() {

    var bear = $('<div>').append
    var four = 'cheese'
    


    const game = {
        player: null,
        enemies: [],
        opp: null,
        four: 'bear',


        players: [{
            name: 'Obi-Wan',
            hp: '120',
            attack: 8,
            baseAttack: 8,
            counter: 15, 
            img: function () {

                var health = this.hp
                console.log(health)
                var div = $('<div>').addClass('obi')
                var pic = $('<img>').addClass('obi2').attr('src', 'assets/images/obi-won.jpg')
                return div.text(health).append(pic)
                
                // return $('<div>').text(health).append($('<img>').addClass('obi2').attr('src', 'assets/images/obi-won.jpg')).addClass('obi')

            }
            
            
        },
        {
            name: 'Luke Skywalker',
            hp: 100,
            attack: 10,
            baseAttack: 10,
            counter: 45,
            img: $('<div>').append($('<img>').attr('src', 'assets/images/luke.jpg')).addClass('luke')

        },
        {
            name: 'Darth Sidious',
            hp: 150,
            attack: 20,
            baseAttack: 20,
            counter: 20,
            img: $('<div>').append($('<img>').attr('src', 'assets/images/sidious.jpeg')).addClass('sid')
            
        },
        {
            name: 'Darth Maul',
            hp: 180,
            attack: 12,
            baseAttack: 12,
            counter: 25,
            // img: $('<img>').attr('src', 'assets/images/maul.jpeg').addClass('maul'),
            img: $('<div>').append($('<img>').attr('src', 'assets/images/maul.jpeg')).addClass('maul')
        }],

        // obiBox: 

        // obiBox: this.createBox(game.players[0].img),
        // lukeBox: this.createBox(luke.img),
        // sidiousBox: this.createBox(sidious.img),
        // maulBox: this.createBox(maul.img),
    
        attack (player, opp) {
            player.attack += player.baseAttack
            player.hp -= opp.counter
            opp.hp -= player.attack
    
            if (player.hp < 1) {
                console.log('You have lost')
            } 
    
            if (opp.hp < 1) {
                console.log('You have won')
            }
    
        },
    
        reset() {
            player[0].hp = 120
            player[0].attack = 8
            player[1].hp = 100
            player[1].attack = 10
            player[2].hp = 150
            player[2].attack = 20
            player[3].hp = 180
            player[3].attack = 12
    
        },

        findChar(char, arr) {
            return arr.find(o => o.name === char)
        },

        choosePlayer() {

            $('.choose').on('click', function (e) {
                console.log(e)
                var item = $(e.target).attr('class')
                console.log(item)

                if (item === 'sid') {
                    
                    game.player = game.findChar(sidious.name, game.players)
                    $('.your-character').append(sidious.img)

                } else if (item === 'luke') {
                    
                    game.player = game.findChar(luke.name, game.players)
                    $('.your-character').append(luke.img)

                } else if (item === 'obi' || item === 'obi2') {

                    game.player = game.findChar(obi.name, game.players)
                    $('.your-character').append(obi.img)

                } else if (item === 'maul') {
                    
                    game.player = game.findChar(maul.name, game.players)
                    $('.your-character').append(maul.img)
                }  

                $('.choose').hide()
                game.displayEnemies()
            })      
        },

        displayEnemies() {

            $('.choose').off()
            $('.your-character').off()

            var playerIndex = this.players.findIndex(function (item) {
                return item === game.player
            })
            
            this.players.splice(playerIndex, 1)
            this.enemies.push(...this.players)
            // this.enemies.push.apply(this.enemies, this.players)
            // for (var i = 0; i = game.players.length; i++) {
            //     this.enemies.push(this.players[i])
            // }
            // game.displayEnemies()
            
            let a = game.enemies.find(item => item.name === 'Obi-Wan')
            let b = game.enemies.find(item => item.name === 'Luke Skywalker')
            let c = game.enemies.find(item => item.name === 'Darth Sidious')
            let d = game.enemies.find(item => item.name === 'Darth Maul')
            
            if (a) {
                $('.enemies').append(obi.img)
            }
            if (b) {
                $('.enemies').append(luke.img)
            }
            if (c) {
                $('.enemies').append(sidious.img)
            }
            if (d) {
                $('.enemies').append(maul.img)
            }

            this.chooseDefender()
        },

        chooseDefender () {

            $('.enemies').on('click', function (e) {
                
                var item = $(e.target).attr('class')

                if (item === 'sid') {

                    game.opp = game.findChar(sidious.name, game.enemies)
                    $('.defender').append(sidious.img)
                    $('.enemies').off()
                    console.log(`Player: ${game.player.name} Opp: ${game.opp.name}`)

                } else if (item === 'luke') {

                    $('.defender').append(luke.img)
                    game.opp = game.findChar(luke.name, game.enemies)
                    $('.enemies').off()
                    console.log(`Player: ${game.player.name} Opp: ${game.opp.name}`)

                } else if (item === 'obi') {

                    $('.defender').append(obi.img)
                    game.opp = game.findChar(obi.name, game.enemies)
                    $('.enemies').off()
                    console.log(`Player: ${game.player.name} Opp: ${game.opp.name}`)

                } else if (item === 'maul') {

                    $('.defender').append(maul.img)
                    game.opp = game.findChar(maul.name, game.enemies)
                    $('.enemies').off()
                    console.log(`Player: ${game.player.name} Opp: ${game.opp.name}`)
                }
                
            })
             
        }
        

    }

    var obi = game.players[0]
    var luke = game.players[1]
    var sidious = game.players[2]
    var maul = game.players[3]

    var five = game.players[0].hp
    console.log(five)
    
    
    $('.choose').append(obi.img, luke.img, sidious.img, maul.img)

    
    game.choosePlayer()

  }); //

//   https://stackoverflow.com/questions/24053838/store-jquery-selector-in-variable
// http://jqfundamentals.com/chapter/traversing-manipulating
// https://stackoverflow.com/questions/4616202/self-references-in-object-literals-initializers
// https://stackoverflow.com/questions/6824129/how-do-i-reference-the-same-objects-properties-during-its-creation


//create game.variables to hold jquery image divs

//create a function to create player display 

