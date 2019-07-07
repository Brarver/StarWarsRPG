

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
            img: $('<img>').attr('src', 'assets/images/obi-won.jpg')
        },
        {
            name: 'Luke Skywalker',
            hp: 100,
            attack: 10,
            baseAttack: 10,
            counter: 45,
            img: $('<img>').attr('src', 'assets/images/luke.jpg')
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
            img: $('<img>').attr('src', 'assets/images/maul.jpeg')
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

        choosePlayer(character) {
            this.player = character  
            console.log(this.player)
            var playerIndex = this.players.findIndex(function (item) {
                return item === game.player
            })
            if (playerIndex > 1) {
                this.players.splice(playerIndex, 1)
                return this.enemies.push(this.players)
            }
            console.log(playerIndex)
            console.log(this.enemies)

        }
    
    }

    var obi = game.players[0]
    var luke = game.players[1]
    var sidious = game.players[2]
    var maul = game.players[3]

    // console.log(game.choosePlayer(sidious))
    
    

    // var obiPic = $('<img>').attr('src', 'assets/javascript/obi-won.jpg')
    $('.choose').append(obi.img, luke.img, sidious.img, maul.img)
    
    $('.choose img').on('click', function (e) {
        console.log(e.target)
        var item = $(e.target).attr('class')
        if (item === 'sid') {
            game.choosePlayer(sidious)
        }
    

    
        
        console.log(game.enemies)
        var $opp = $(e.currentTarget).siblings()
        $('.your-character').append(this)
        $('.choose').hide()
        $('.enemies').append($opp)
    })

    $('.enemies img').on('click', function (e) {
            $('.defender').append($(this))
            console.log($(this))
        })

    

  });

//   https://stackoverflow.com/questions/24053838/store-jquery-selector-in-variable
// http://jqfundamentals.com/chapter/traversing-manipulating

// var player = game.players
    // game.attack(player[0], player[1])
    // // game.attack(player[0], player[1])
    // // game.attack(player[0], player[1])
    // console.log(player[0])
    // game.reset()
    // console.log(player[0])