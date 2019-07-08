

$( document ).ready(function() {


    const game = {
        player: null,
        enemies: [],
        opp: null,

        players: [{
            name: 'Obi-Wan',
            hp: 120,
            attack: 8,
            baseAttack: 8,
            counter: 15, 
            img: $('<img>').attr('src', 'assets/images/obi-won.jpg').addClass('obi')
        },
        {
            name: 'Luke Skywalker',
            hp: 100,
            attack: 10,
            baseAttack: 10,
            counter: 45,
            img: $('<img>').attr('src', 'assets/images/luke.jpg').addClass('luke')
        },
        {
            name: 'Darth Sidious',
            hp: 150,
            attack: 20,
            baseAttack: 20,
            counter: 20,
            img: $('<img>').attr('src', 'assets/images/sidious.jpeg').addClass('sid')
        },
        {
            name: 'Darth Maul',
            hp: 180,
            attack: 12,
            baseAttack: 12,
            counter: 25,
            img: $('<img>').attr('src', 'assets/images/maul.jpeg').addClass('maul')
        }],
    
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

        choosePlayer() {

            $('.choose img').on('click', function (e) {
        
                var item = $(e.target).attr('class')
                if (item === 'sid') {
                    if (!game.player) {
                        game.player = game.players.find(o => o.name === 'Darth Sidious')
                    }
                    console.log(`player: ${game.player.name}`)
                    $('.your-character').append(sidious.img)
                    $('.choose').hide()
                    game.displayEnemies()
                } else if (item === 'luke') {
                    if (!game.player) {
                        game.player = game.players.find(o => o.name === 'Luke Skywalker')
                    }
                    console.log(`player: ${game.player.name}`)
                    $('.your-character').append(luke.img)
                    $('.choose').hide()
                    game.displayEnemies()
                } else if (item === 'obi') {
                    if (!game.player) {
                        game.player = game.players.find(o => o.name === 'Obi-Wan')
                    }
                    console.log(`player: ${game.player.name}`)
                    $('.your-character').append(obi.img)
                    $('.choose').hide()
                    game.displayEnemies()
                } else if (item === 'maul') {
                    if (!game.player) {
                        game.player = game.players.find(o => o.name === 'Darth Maul')
                    }
                    console.log(`player: ${game.player.name}`)
                    $('.your-character').append(maul.img)
                    $('.choose').hide()
                    game.displayEnemies()
                }  
            })  
        },

        displayEnemies() {

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
            $('.enemies img').on('click', function (e) {
                
                var item = $(e.target).attr('class')
                if (item === 'sid') {
                    game.opp = game.enemies.find(o => o.name === 'Darth Sidious')
                    $('.defender').append(sidious.img)
                    console.log(`Player: ${game.player.name} Opp: ${game.opp.name}`)
                } else if (item === 'luke') {
                    $('.defender').append(luke.img)
                    game.opp = game.enemies.find(o => o.name === 'Luke Skywalker')
                    console.log(`Player: ${game.player.name} Opp: ${game.opp.name}`)
                } else if (item === 'obi') {
                    $('.defender').append(obi.img)
                    game.opp = game.enemies.find(o => o.name === 'Obi-Wan')
                    console.log(`Player: ${game.player.name} Opp: ${game.opp.name}`)
                } else if (item === 'maul') {
                    $('.defender').append(maul.img)
                    game.opp = game.enemies.find(o => o.name === 'Darth Maul')
                    console.log(`Player: ${game.player.name} Opp: ${game.opp.name}`)
                }

            })
        }
    }

    var obi = game.players[0]
    var luke = game.players[1]
    var sidious = game.players[2]
    var maul = game.players[3]

    
    
    
    $('.choose').append(obi.img, luke.img, sidious.img, maul.img)

    
    game.choosePlayer()

  }); //

//   https://stackoverflow.com/questions/24053838/store-jquery-selector-in-variable
// http://jqfundamentals.com/chapter/traversing-manipulating

