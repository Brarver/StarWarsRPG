// $( document ).ready(function() {

    ////////Variables//////////////////////////////////////////////////////////////////////////////////

        var players = [{
            name: 'Obi-Wan',
            class: 'obi',
            count: null,
            wins: null,
            hp: 120,
            attack: 8,
            baseAttack: 8,
            counter: 15, 
            img: $('<img>').addClass('obi').attr('src', 'assets/images/obi-won.jpg'),
        },
        {
            name: 'Luke Skywalker',
            class: 'luke',
            count: null,
            wins: null,
            hp: 100,
            attack: 10,
            baseAttack: 10,
            counter: 5,
            img: $('<img>').addClass('luke').attr('src', 'assets/images/luke.jpg')
        },
        {
            name: 'Darth Sidious',
            class: 'sid',
            count: null,
            wins: null,
            hp: 150,
            attack: 20,
            baseAttack: 20,
            counter: 20,
            img: $('<img>').addClass('sid').attr('src', 'assets/images/sidious.jpeg')
        },
        {
            name: 'Darth Maul',
            class: 'maul',
            count: null,
            wins: null,
            hp: 180,
            attack: 12,
            baseAttack: 12,
            counter: 25,
            img: $('<img>').addClass('maul').attr('src', 'assets/images/maul.jpeg')
        }]

        var player = null
        var enemies = []
        var opp = null

        var obi = players[0]
        var luke = players[1]
        var sidious = players[2]
        var maul = players[3]

        var obiBox
        var lukeBox
        var sidBox
        var maulBox

    /////////////Functions//////////////////////////////////////////////////////////////////////////////

        function createBox (char) {

            var div = $('<div>').addClass(char.class)
            return div.append(char.name).append(char.img).append(char.hp)
            
        }

        var displayDamage = function () {
            var p = $('<p>')
            p.html('You attacked ' + opp.name + ' for ' + player.attack + ' damage. <br>' + opp.name + ' attacked you back for ' + opp.counter + ' damage.' )
            return p
        }

        var attack = function (player, opp) {
            
            if (player.count) {
                player.attack += player.baseAttack
            }
            player.count++
            player.hp = player.hp - opp.counter
            opp.hp -= player.attack
    
            if (player.hp < 1) {
                
                $('.damage').text('You have lost')
                $('.damage').append(displayDamage())
                $('.attack').off()
                reset()
                return
            } 
    
            if (opp.hp < 1) {
                player.wins++
                if (player.wins === 3) {
                    $('.damage').text('You have Won! Game over!')
                    $(".defender *:not('.name')").remove()
                    $('.attack').off()
                    reset()
                    return
                }
                $(".defender *:not('.name')").remove()
                $('.damage').text('you have won! Choose your next enemy')
                $('.damage').append(displayDamage())
                $('.attack').off()
                chooseDefender()
                return
            }

            $('.damage').empty()

            $(".your-character *:not('.name')").remove()
            $(".defender *:not('.name')").remove()
            
            $('.your-character').append(createBox(player))
            $('.defender').append(createBox(opp))

            $('.damage').append(displayDamage())
        }
    
        function reset() {
            
            var restartButton = $('<button>Restart</button>')
            restartButton.addClass('reset')
            $('.damage').append(restartButton)

                player = null
                opp = null
                enemies = []
                players[0].hp = 120
                players[0].attack = 8
                players[0].wins = null
                players[0].count = null
                players[1].hp = 100
                players[1].attack = 10
                players[1].wins = null
                players[1].count = null
                players[2].hp = 150
                players[2].attack = 20
                players[2].wins = null
                players[2].count = null
                players[3].hp = 180
                players[3].attack = 12
                players[3].wins = null
                players[3].count = null
                
            $('.damage .reset').on('click', function () {
                $(".your-character *:not('.name')").remove()
                $(".defender *:not('.name')").remove()
                $('.damage').empty()
                restartButton.hide()
                choosePlayer()
            })
        }

        var findChar = function (char, arr) {
            return arr.find(o => o.name === char)
        }

        function choosePlayer() {

            obiBox = createBox(obi)
            lukeBox = createBox(luke)
            sidBox = createBox(sidious)
            maulBox = createBox(maul)

            $(".enemies *:not('.name')").remove()

            $('.choose').show()

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

                $('.choose').empty()
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

            enemies.push(...players)
            enemies.splice(playerIndex, 1)
            
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

                $('.damage').empty()
                
                var item = $(e.target).attr('class')

                if (item === 'sid') {

                    opp = findChar(sidious.name, enemies)
                    $('.defender').append(sidBox)
                    $('.enemies').off()

                } else if (item === 'luke') {

                    $('.defender').append(lukeBox)
                    opp = findChar(luke.name, enemies)
                    $('.enemies').off()

                } else if (item === 'obi') {

                    $('.defender').append(obiBox)
                    opp = findChar(obi.name, enemies)
                    $('.enemies').off()

                } else if (item === 'maul') {

                    $('.defender').append(maulBox)
                    opp = findChar(maul.name, enemies)
                    $('.enemies').off()
                }

                $('.attack').on('click', function () {
                    attack(player, opp)
                })          
            })      
        }

    ////////////Calls/Event Listeners///////////////////////////////////////////////////////////////////
    
    choosePlayer()

//   }); 



