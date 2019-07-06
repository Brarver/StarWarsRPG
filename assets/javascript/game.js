const game = {
    players: [{
        name: 'Obi-Wan',
        hp: 120,
        attack: 8,
        baseAttack: 8,
        counter: 15
    },
    {
        name: 'Luke Skywalker',
        hp: 100,
        attack: 10,
        baseAttack: 10,
        counter: 45
    },
    {
        name: 'Darth Sidious',
        hp: 150,
        attack: 20,
        baseAttack: 20,
        counter: 20
    },
    {
        name: 'Darth Maul',
        hp: 180,
        attack: 12,
        baseAttack: 12,
        counter: 25
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

    }

}

var player = game.players
game.attack(player[0], player[1])
// game.attack(player[0], player[1])
// game.attack(player[0], player[1])
console.log(player[0])
game.reset()
console.log(player[0])




$( document ).ready(function() {

    
    $('.choose .con').on('click', function (e) {
        var $opp = $(e.currentTarget).siblings()
        $opp.addClass('opp')
        $opp.removeClass('con')
        $('.enemies').append($opp)
        $('.your-character').append($(this))
        $('.choose').hide()
        console.log($opp)
    })

    $('.enemies .opp').on('click', function (e) {
        $('.defender').append($(this))
        console.log($(this))
    })

    

    


  });

//   https://stackoverflow.com/questions/24053838/store-jquery-selector-in-variable