// $( document ).ready(function() {

    ////////Variables//////////////////////////////////////////////////////////////////////////////////

        var player = null
        var enemies = []
        var opp = null

        var players = [{
            name: 'Obi-Wan',
            class: 'obi',
            hp: 120,
            attack: 8,
            baseAttack: 8,
            counter: 15, 
            img: $('<img>').addClass('obi').attr('src', 'assets/images/obi-won.jpg'),
            // box: obiBox
           
        },
        {
            name: 'Luke Skywalker',
            class: 'luke',
            hp: 100,
            attack: 10,
            baseAttack: 10,
            counter: 45,
            img: $('<img>').addClass('luke').attr('src', 'assets/images/luke.jpg')

        },
        {
            name: 'Darth Sidious',
            class: 'sid',
            hp: 150,
            attack: 20,
            baseAttack: 20,
            counter: 20,
            img: $('<img>').addClass('sid').attr('src', 'assets/images/sidious.jpeg')
            
        },
        {
            name: 'Darth Maul',
            class: 'maul',
            hp: 180,
            attack: 12,
            baseAttack: 12,
            counter: 25,
            img: $('<img>').addClass('maul').attr('src', 'assets/images/maul.jpeg')
        }]

        var obi = players[0]
        var luke = players[1]
        var sidious = players[2]
        var maul = players[3]

        var obiBox = createBox(obi)
        var lukeBox = createBox(luke)
        var sidBox = createBox(sidious)
        var maulBox = createBox(maul)

    /////////////Functions//////////////////////////////////////////////////////////////////////////////

        function createBox (char) {

            var div = $('<div>').addClass(char.class)
            return div.text(char.hp).append(char.img)
        }

        var attack = function (player, opp) {
            player.attack += player.baseAttack
            player.hp -= opp.counter
            opp.hp -= player.attack
    
            if (player.hp < 1) {
                console.log('You have lost')
            } 
    
            if (opp.hp < 1) {
                console.log('You have won')
            }

            $(".your-character *:not('.name')").remove()
            
            $('.your-character').append(createBox(obi))
        }
    
        var reset = function() {
            player[0].hp = 120
            player[0].attack = 8
            player[1].hp = 100
            player[1].attack = 10
            player[2].hp = 150
            player[2].attack = 20
            player[3].hp = 180
            player[3].attack = 12
    
        }

        var findChar = function (char, arr) {
            return arr.find(o => o.name === char)
        }

        var choosePlayer = function () {

            $('.choose').append(obiBox, lukeBox, sidBox, maulBox)

            $('.choose').on('click', function (e) {
                
                var item = $(e.target).attr('class')

                if (item === 'sid') {
                    
                    player = findChar(sidious.name, players)
                    $('.your-character').append(sidBox)

                } else if (item === 'luke') {
                    
                    player = findChar(luke.name, players)
                    $('.your-character').append(lukeBox)

                } else if (item === 'obi') {

                    player = findChar(obi.name, players)
                    $('.your-character').append(obiBox)

                } else if (item === 'maul') {
                    
                    player = findChar(maul.name, players)
                    $('.your-character').append(maulBox)
                }  

                $('.choose').hide()
                displayEnemies(player)                            
            })      
        }

        var displayEnemies = function (player) {

            $('.choose').off()
            $('.your-character').off()

            var playerIndex = players.findIndex(function (item) {
                return item === player
            })
            
            players.splice(playerIndex, 1)
            enemies.push(...players)
            // this.enemies.push.apply(this.enemies, this.players)
            // for (var i = 0; i = game.players.length; i++) {
            //     this.enemies.push(this.players[i])
            // }
            // game.displayEnemies()
            
            let a = enemies.find(item => item.name === 'Obi-Wan')
            let b = enemies.find(item => item.name === 'Luke Skywalker')
            let c = enemies.find(item => item.name === 'Darth Sidious')
            let d = enemies.find(item => item.name === 'Darth Maul')
            
            if (a) {
                $('.enemies').append(obiBox)
            }
            if (b) {
                $('.enemies').append(lukeBox)
            }
            if (c) {
                $('.enemies').append(sidBox)
            }
            if (d) {
                $('.enemies').append(maulBox)
            }

            chooseDefender()
        }

        var chooseDefender = function () {

            $('.enemies').on('click', function (e) {
                
                var item = $(e.target).attr('class')

                if (item === 'sid') {

                    opp = findChar(sidious.name, enemies)
                    $('.defender').append(sidBox)
                    $('.enemies').off()
                    console.log(`Player: ${player.name} Opp: ${opp.name}`)

                } else if (item === 'luke') {

                    $('.defender').append(lukeBox)
                    opp = findChar(luke.name, enemies)
                    $('.enemies').off()
                    console.log(`Player: ${player.name} Opp: ${opp.name}`)

                } else if (item === 'obi') {

                    $('.defender').append(obiBox)
                    opp = findChar(obi.name, enemies)
                    $('.enemies').off()
                    console.log(`Player: ${player.name} Opp: ${opp.name}`)

                } else if (item === 'maul') {

                    $('.defender').append(maulBox)
                    opp = findChar(maul.name, enemies)
                    $('.enemies').off()
                    console.log(`Player: ${player.name} Opp: ${opp.name}`)
                }
                
            })
             
        }

    ////////////Calls/Event Listeners///////////////////////////////////////////////////////////////////
    
    choosePlayer()

    $('.attack').on('click', function () {
        attack(player, opp)
        console.log(`${player.name} vs ${opp.name}`)
    })

//   }); //

//   https://stackoverflow.com/questions/24053838/store-jquery-selector-in-variable
// http://jqfundamentals.com/chapter/traversing-manipulating
// https://stackoverflow.com/questions/4616202/self-references-in-object-literals-initializers
// https://stackoverflow.com/questions/6824129/how-do-i-reference-the-same-objects-properties-during-its-creation


// Is there any way to store player box in object?
// how to change hp display on attack click
// Advantages to using function declarations over expressions? Better organization?
// Advantages to using game as object? 
// how to console log in jquery?

