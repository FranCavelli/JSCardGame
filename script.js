//CARTAS//
var rogue = {nombre:'Rogue', vida:5, daño:3, velocidad:4};
var mage = {nombre:"Mage", vida:10, daño:2, velocidad:2};
var archer = {nombre:"Archer", vida:12, daño:1, velocidad:3};
var knight = {nombre:"Knight", vida:20, daño:1, velocidad:1};

//CARTAS//
//MANOS//
var cartasJugador = document.getElementsByClassName('cartas')[0];
var cartasEnemigo = document.getElementsByClassName('cartas')[1];
//MANOS//
//INICIAR JUEGO//
var startGameButton = document.getElementById('startGameButton');
var startGamePage = document.getElementsByClassName('loadStartPage')[0];
function clickStartGame(){
    startGamePage.classList.add('opacity0animation');
    setTimeout(function(){
        startGamePage.style.display = 'none';
        barajarCartas(cartasJugador, cartasEnemigo);
    }, 400);
}

startGameButton.addEventListener('click', clickStartGame);
//INICIAR JUEGO//
//REPARTIDOR//
function carddistribute(player, enemy){
//PLAYER
    var countNumberPlayer = 0;
    while(countNumberPlayer < 4){
        var randomNumberPlayer = Math.random()*40;
        if(Math.trunc(randomNumberPlayer)<=10){
            player.innerHTML += '<div onclick="setCardRoguePlayer()" class="cardPlayerRogue"><b>'+rogue.nombre+'</b><p class="cardLife">Life: '+rogue.vida+'</p><p style="color:red;">Damage: '+rogue.daño+'</p><p style="color:blue;">Speed: '+rogue.velocidad+'</p><img src="media/rogue.jpg"></div>';
        }else if(Math.trunc(randomNumberPlayer)>10 && Math.trunc(randomNumberPlayer)<=20){
            player.innerHTML += '<div onclick="setCardMagePlayer()" class="cardPlayerMage"><b>'+mage.nombre+'</b><p class="cardLife">Life: '+mage.vida+'</p><p style="color:red;">Damage: '+mage.daño+'</p><p style="color:blue;">Speed: '+mage.velocidad+'</p><img src="media/mage.jpg"></div>';
        }else if(Math.trunc(randomNumberPlayer)>20 && Math.trunc(randomNumberPlayer)<=30){   
            player.innerHTML += '<div onclick="setCardArcherPlayer()" class="cardPlayerArcher"><b>'+archer.nombre+'</b><p class="cardLife">Life: '+archer.vida+'</p><p style="color:red;">Damage: '+archer.daño+'</p><p style="color:blue;">Speed: '+archer.velocidad+'</p><img src="media/archer.jpg"></div>';
        }else if(Math.trunc(randomNumberPlayer)>30 && Math.trunc(randomNumberPlayer)<=40){
            player.innerHTML += '<div onclick="setCardKnightlayer()" class="cardPlayerKnight"><b>'+knight.nombre+'</b><p class="cardLife">Life: '+knight.vida+'</p><p style="color:red;">Damage: '+knight.daño+'</p><p style="color:blue;">Speed:'+knight.velocidad+'</p><img src="media/knight.jpg"></div>';
        }
        countNumberPlayer +=1;
    }
//ENEMY
    var countNumberEnemy = 0;
    while(countNumberEnemy < 4){
        var randomNumberEnemy = Math.random()*40;
        if(Math.trunc(randomNumberEnemy )<=10){
            enemy.innerHTML += '<img class="unknown" src="media/unknown.jpg">';
        }else if(Math.trunc(randomNumberEnemy)>10 && Math.trunc(randomNumberEnemy)<=20){
            enemy.innerHTML += '<img class="unknown" src="media/unknown.jpg">';
        }else if(Math.trunc(randomNumberEnemy)>20 && Math.trunc(randomNumberEnemy)<=30){   
            enemy.innerHTML += '<img class="unknown" src="media/unknown.jpg">';
        }else if(Math.trunc(randomNumberEnemy)>30 && Math.trunc(randomNumberEnemy)<=40){
            enemy.innerHTML += '<img class="unknown" src="media/unknown.jpg">';
        }
        countNumberEnemy +=1;
    }
}

carddistribute(cartasJugador, cartasEnemigo);

//REPARTIDOR//



//COLOCAR CARTAS//
var pointsEnemy = document.querySelector('#idPointsEnemy'),
    pointsPlayer = document.querySelector('#idPointsPlayer');
    
var pointsEnemyCount = 0,
    pointsPlayerCount = 0,
    MatchsCount = 0;

var MatchStatus = "offline";
var matchCardsPlayer = document.querySelector('.carta2'),
    matchCardsEnemy = document.querySelector('.carta1');

var ActualSetCardPlayer = "none";

function setCardRoguePlayer(){
    if(MatchStatus=="offline"){
        if(ActualSetCardPlayer=="none"){
            matchCardsPlayer.innerHTML += '<p>❤'+rogue.vida+' Rogue</p><img src="media/rogue.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            matchCardsEnemy.innerHTML += '<p>❤? ???</p><img src="media/unknown.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "rogue"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsRogue = document.querySelectorAll('.cardPlayerRogue'); //SELECCIONAR NUEVAMENTE LAS CARTAS DE ROGUE
            TotalPlayerCardsRogue[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            var DeleteCardEnemy = document.querySelector('.unknown:nth-of-type(1)');
            DeleteCardEnemy.remove();
        }else if(ActualSetCardPlayer=="mage"){
            matchCardsPlayer.innerHTML = ''; //REINICIA LA ZONA DE ENFRENTAMIENTOS
            matchCardsPlayer.innerHTML += '<p>❤'+rogue.vida+' Rogue</p><img src="media/rogue.jpg">'; //AÑADE CARTA A LA ZONA DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "rogue"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsRogue = document.querySelectorAll('.cardPlayerRogue'); //SELECCIONAR NUEVAMENTE LAS CARTAS DE ROGUE
            TotalPlayerCardsRogue[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            cartasJugador.innerHTML += '<div onclick="setCardMagePlayer()" class="cardPlayerMage"><b>'+mage.nombre+'</b><p class="cardLife">Life: '+mage.vida+'</p><p style="color:red;">Damage: '+mage.daño+'</p><p style="color:blue;">Speed: '+mage.velocidad+'</p><img src="media/mage.jpg"></div>';
        }else if(ActualSetCardPlayer=="archer"){
            matchCardsPlayer.innerHTML = '';
            matchCardsPlayer.innerHTML += '<p>❤'+rogue.vida+' Rogue</p><img src="media/rogue.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "rogue"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsRogue = document.querySelectorAll('.cardPlayerRogue'); //SELECCIONAR NUEVAMENTE LAS CARTAS DE ROGUE
            TotalPlayerCardsRogue[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            cartasJugador.innerHTML += '<div onclick="setCardArcherPlayer()" class="cardPlayerArcher"><b>'+archer.nombre+'</b><p class="cardLife">Life: '+archer.vida+'</p><p style="color:red;">Damage: '+archer.daño+'</p><p style="color:blue;">Speed: '+archer.velocidad+'</p><img src="media/archer.jpg"></div>';
        }else if(ActualSetCardPlayer=="knight"){
            matchCardsPlayer.innerHTML = '';
            matchCardsPlayer.innerHTML += '<p>❤'+rogue.vida+' Rogue</p><img src="media/rogue.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "rogue"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsRogue = document.querySelectorAll('.cardPlayerRogue'); //SELECCIONAR NUEVAMENTE LAS CARTAS DE ROGUE
            TotalPlayerCardsRogue[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            cartasJugador.innerHTML += '<div onclick="setCardKnightlayer()" class="cardPlayerKnight"><b>'+knight.nombre+'</b><p class="cardLife">Life: '+knight.vida+'</p><p style="color:red;">Damage: '+knight.daño+'</p><p style="color:blue;">Speed:'+knight.velocidad+'</p><img src="media/knight.jpg"></div>';
        }
    }
}

function setCardMagePlayer(){
    if(MatchStatus=="offline"){
        if(ActualSetCardPlayer=="none"){
            matchCardsPlayer.innerHTML += '<p>❤'+mage.vida+' Mage</p><img src="media/mage.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            matchCardsEnemy.innerHTML += '<p>❤? ???</p><img src="media/unknown.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "mage"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsMage = document.querySelectorAll('.cardPlayerMage');//SELECCIUNAR NUEVAMENTE LAS CARTAS DE MAGO
            TotalPlayerCardsMage[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            var DeleteCardEnemy = document.querySelector('.unknown:nth-of-type(1)');
            DeleteCardEnemy.remove();
        }else if(ActualSetCardPlayer=="rogue"){
            matchCardsPlayer.innerHTML = '';
            matchCardsPlayer.innerHTML += '<p>❤'+mage.vida+' Mage</p><img src="media/mage.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "mage"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsMage = document.querySelectorAll('.cardPlayerMage');//SELECCIUNAR NUEVAMENTE LAS CARTAS DE MAGO
            TotalPlayerCardsMage[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            cartasJugador.innerHTML += '<div onclick="setCardRoguePlayer()" class="cardPlayerRogue"><b>'+rogue.nombre+'</b><p class="cardLife">Life: '+rogue.vida+'</p><p style="color:red;">Damage: '+rogue.daño+'</p><p style="color:blue;">Speed: '+rogue.velocidad+'</p><img src="media/rogue.jpg"></div>';
        }else if(ActualSetCardPlayer=="archer"){
            matchCardsPlayer.innerHTML = '';
            matchCardsPlayer.innerHTML += '<p>❤'+mage.vida+' Mage</p><img src="media/mage.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "mage"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsMage = document.querySelectorAll('.cardPlayerMage');//SELECCIUNAR NUEVAMENTE LAS CARTAS DE MAGO
            TotalPlayerCardsMage[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            cartasJugador.innerHTML += '<div onclick="setCardArcherPlayer()" class="cardPlayerArcher"><b>'+archer.nombre+'</b><p class="cardLife">Life: '+archer.vida+'</p><p style="color:red;">Damage: '+archer.daño+'</p><p style="color:blue;">Speed: '+archer.velocidad+'</p><img src="media/archer.jpg"></div>';
        }else if(ActualSetCardPlayer=="knight"){
            matchCardsPlayer.innerHTML = '';
            matchCardsPlayer.innerHTML += '<p>❤'+mage.vida+' Mage</p><img src="media/mage.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "mage"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsMage = document.querySelectorAll('.cardPlayerMage');//SELECCIUNAR NUEVAMENTE LAS CARTAS DE MAGO
            TotalPlayerCardsMage[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            cartasJugador.innerHTML += '<div onclick="setCardKnightlayer()" class="cardPlayerKnight"><b>'+knight.nombre+'</b><p class="cardLife">Life: '+knight.vida+'</p><p style="color:red;">Damage: '+knight.daño+'</p><p style="color:blue;">Speed:'+knight.velocidad+'</p><img src="media/knight.jpg"></div>';
        }
    }
}

function setCardArcherPlayer(){
    if(MatchStatus=="offline"){
        if(ActualSetCardPlayer=="none"){
            matchCardsPlayer.innerHTML += '<p>❤'+archer.vida+' Archer</p><img src="media/archer.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            matchCardsEnemy.innerHTML += '<p>❤? ???</p><img src="media/unknown.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "archer"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsArcher = document.querySelectorAll('.cardPlayerArcher');//SELECCIUNAR NUEVAMENTE LAS CARTAS DE ARQUERO
            TotalPlayerCardsArcher[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            var DeleteCardEnemy = document.querySelector('.unknown:nth-of-type(1)');
            DeleteCardEnemy.remove();
        }else if(ActualSetCardPlayer=="rogue"){
            matchCardsPlayer.innerHTML = '';
            matchCardsPlayer.innerHTML += '<p>❤'+archer.vida+' Archer</p><img src="media/archer.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "archer"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsArcher = document.querySelectorAll('.cardPlayerArcher');//SELECCIUNAR NUEVAMENTE LAS CARTAS DE ARQUERO
            TotalPlayerCardsArcher[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            cartasJugador.innerHTML += '<div onclick="setCardRoguePlayer()" class="cardPlayerRogue"><b>'+rogue.nombre+'</b><p class="cardLife">Life: '+rogue.vida+'</p><p style="color:red;">Damage: '+rogue.daño+'</p><p style="color:blue;">Speed: '+rogue.velocidad+'</p><img src="media/rogue.jpg"></div>';
        }else if(ActualSetCardPlayer=="mage"){
            matchCardsPlayer.innerHTML = '';
            matchCardsPlayer.innerHTML += '<p>❤'+archer.vida+' Archer</p><img src="media/archer.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "archer"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsArcher = document.querySelectorAll('.cardPlayerArcher');//SELECCIUNAR NUEVAMENTE LAS CARTAS DE ARQUERO
            TotalPlayerCardsArcher[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            cartasJugador.innerHTML += '<div onclick="setCardMagePlayer()" class="cardPlayerMage"><b>'+mage.nombre+'</b><p class="cardLife">Life: '+mage.vida+'</p><p style="color:red;">Damage: '+mage.daño+'</p><p style="color:blue;">Speed: '+mage.velocidad+'</p><img src="media/mage.jpg"></div>';
        }else if(ActualSetCardPlayer=="knight"){
            matchCardsPlayer.innerHTML = '';
            matchCardsPlayer.innerHTML += '<p>❤'+archer.vida+' Archer</p><img src="media/archer.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "archer"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsArcher = document.querySelectorAll('.cardPlayerArcher');//SELECCIUNAR NUEVAMENTE LAS CARTAS DE ARQUERO
            TotalPlayerCardsArcher[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            cartasJugador.innerHTML += '<div onclick="setCardKnightlayer()" class="cardPlayerKnight"><b>'+knight.nombre+'</b><p class="cardLife">Life: '+knight.vida+'</p><p style="color:red;">Damage: '+knight.daño+'</p><p style="color:blue;">Speed:'+knight.velocidad+'</p><img src="media/knight.jpg"></div>';
        }
    }
}

function setCardKnightlayer(){
    if(MatchStatus=="offline"){
        if(ActualSetCardPlayer=="none"){
            matchCardsPlayer.innerHTML += '<p>❤'+knight.vida+' Knight</p><img src="media/knight.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            matchCardsEnemy.innerHTML += '<p>❤? ???</p><img src="media/unknown.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "knight"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsKnight = document.querySelectorAll('.cardPlayerKnight');//SELECCIUNAR NUEVAMENTE LAS CARTAS DE ARQUERO
            TotalPlayerCardsKnight[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            var DeleteCardEnemy = document.querySelector('.unknown:nth-of-type(1)');
            DeleteCardEnemy.remove();
        }else if(ActualSetCardPlayer=="rogue"){
            matchCardsPlayer.innerHTML = '';
            matchCardsPlayer.innerHTML += '<p>❤'+knight.vida+' Knight</p><img src="media/knight.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "knight"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsKnight = document.querySelectorAll('.cardPlayerKnight');//SELECCIUNAR NUEVAMENTE LAS CARTAS DE ARQUERO
            TotalPlayerCardsKnight[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            cartasJugador.innerHTML += '<div onclick="setCardRoguePlayer()" class="cardPlayerRogue"><b>'+rogue.nombre+'</b><p class="cardLife">Life: '+rogue.vida+'</p><p style="color:red;">Damage: '+rogue.daño+'</p><p style="color:blue;">Speed: '+rogue.velocidad+'</p><img src="media/rogue.jpg"></div>';
        }else if(ActualSetCardPlayer=="mage"){
            matchCardsPlayer.innerHTML = '';
            matchCardsPlayer.innerHTML += '<p>❤'+knight.vida+' Knight</p><img src="media/knight.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "knight"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsKnight = document.querySelectorAll('.cardPlayerKnight');//SELECCIUNAR NUEVAMENTE LAS CARTAS DE ARQUERO
            TotalPlayerCardsKnight[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            cartasJugador.innerHTML += '<div onclick="setCardMagePlayer()" class="cardPlayerMage"><b>'+mage.nombre+'</b><p class="cardLife">Life: '+mage.vida+'</p><p style="color:red;">Damage: '+mage.daño+'</p><p style="color:blue;">Speed: '+mage.velocidad+'</p><img src="media/mage.jpg"></div>';
        }else if(ActualSetCardPlayer=="archer"){
            matchCardsPlayer.innerHTML = '';
            matchCardsPlayer.innerHTML += '<p>❤'+knight.vida+' Knight</p><img src="media/knight.jpg">'; //AÑADE CARTA A LA PARTE DE ENFRFENTAMIENTOS
            ActualSetCardPlayer = "knight"; //MODIFICAR LA VARIABLE PARA QUE NO SEA UN BUCLE
            var TotalPlayerCardsKnight = document.querySelectorAll('.cardPlayerKnight');//SELECCIUNAR NUEVAMENTE LAS CARTAS DE ARQUERO
            TotalPlayerCardsKnight[0].remove(); //ELIMINAR CARTA EN LA MANO DEL JUGADOR
            cartasJugador.innerHTML += '<div onclick="setCardArcherPlayer()" class="cardPlayerArcher"><b>'+archer.nombre+'</b><p class="cardLife">Life: '+ararcherquero.vida+'</p><p style="color:red;">Damage: '+archer.daño+'</p><p style="color:blue;">Speed: '+archer.velocidad+'</p><img src="media/archer.jpg"></div>';
        }
    }
}

//COLOCAR CARTAS//

var chatAttackMatch = document.querySelector('#chatAttack');

function MatchCards(){
    if(MatchStatus=="offline" && ActualSetCardPlayer!="none"){
        MatchStatus="ingame";
        var countNumberEnemy = 0;
        while(countNumberEnemy < 1){
            var randomNumberEnemy = Math.random()*40;
            if(Math.trunc(randomNumberEnemy )<=10){
                matchCardsEnemy.innerHTML = '<p>❤8 Rogue</p><img src="media/rogue.jpg">'
                var LifeEnemyCard = rogue.vida;
                var DamageEnemyCard = rogue.daño;
                var SpeedEnemyCard = rogue.velocidad;
            }else if(Math.trunc(randomNumberEnemy)>10 && Math.trunc(randomNumberEnemy)<=20){
                matchCardsEnemy.innerHTML = '<p>❤10 Mage</p><img src="media/mage.jpg">'
                var LifeEnemyCard = mage.vida;
                var DamageEnemyCard = mage.daño;
                var SpeedEnemyCard = mage.velocidad;
            }else if(Math.trunc(randomNumberEnemy)>20 && Math.trunc(randomNumberEnemy)<=30){  
                matchCardsEnemy.innerHTML = '<p>❤12 Archer</p><img src="media/archer.jpg">' 
                var LifeEnemyCard = archer.vida;
                var DamageEnemyCard = archer.daño;
                var SpeedEnemyCard = archer.velocidad;
            }else if(Math.trunc(randomNumberEnemy)>30 && Math.trunc(randomNumberEnemy)<=40){
                matchCardsEnemy.innerHTML = '<p>❤15 Knight</p><img src="media/knight.jpg">'
                var LifeEnemyCard = knight.vida;
                var DamageEnemyCard = knight.daño;
                var SpeedEnemyCard = knight.velocidad;
            }
            countNumberEnemy +=1;
        }
        if(ActualSetCardPlayer=="none"){
            alert('Debes seleccionar una carta');
        }else if(ActualSetCardPlayer=="rogue"){
            var LifePlayerCard = rogue.vida;
            var DamagePlayerCard = rogue.daño;
            var SpeedPlayerCard = rogue.velocidad;
        }else if(ActualSetCardPlayer=="mage"){
            var LifePlayerCard = mage.vida;
            var DamagePlayerCard = mage.daño;
            var SpeedPlayerCard = mage.velocidad;
        }else if(ActualSetCardPlayer=="archer"){
            var LifePlayerCard = archer.vida;
            var DamagePlayerCard = archer.daño;
            var SpeedPlayerCard = archer.velocidad;
        }else if(ActualSetCardPlayer=="knight"){
            var LifePlayerCard = knight.vida;
            var DamagePlayerCard = knight.daño;
            var SpeedPlayerCard = knight.velocidad;
        }
        if(SpeedPlayerCard>SpeedEnemyCard){
            chatAttackMatch.innerHTML = '';
            chatAttackMatch.innerHTML += ('<p>╰┈➤ Tu carta es más rapida, atacas primero.</p><br><p>Velocidad: <b>'+SpeedEnemyCard+'</b> ~ Velocidad: <b>'+SpeedPlayerCard+'</b><p><br>');
            matchCardsAttackPhase( LifePlayerCard, DamagePlayerCard, SpeedPlayerCard, LifeEnemyCard, DamageEnemyCard, SpeedEnemyCard);
        }else if(SpeedEnemyCard>SpeedPlayerCard){
            chatAttackMatch.innerHTML = '';
            chatAttackMatch.innerHTML += ('<p>╰┈➤ La carta de tu adversario es más rapida, ataca primero.</p><br><p>Velocidad: <b>'+SpeedEnemyCard+'</b> ~ Velocidad: <b>'+SpeedPlayerCard+'</b><p><br>');
            matchCardsAttackPhase( LifePlayerCard, DamagePlayerCard, SpeedPlayerCard, LifeEnemyCard, DamageEnemyCard, SpeedEnemyCard);
        }else{
            chatAttackMatch.innerHTML = '';
            chatAttackMatch.innerHTML += ('<p>╰┈➤ Las cartas son iguales, ambas se destruyen.</p><b>Puntos para ambos.</b><br>');
            setTimeout(function(){
                matchCardsPlayer.innerHTML = '';
                matchCardsEnemy.innerHTML = '';
                pointsEnemy.innerHTML = pointsEnemyCount+=1;
                pointsPlayer.innerHTML = pointsPlayerCount+=1;
                MatchsCount += 1;
                MatchsCounts();
                MatchStatus="offline"
                ActualSetCardPlayer="none"
            }, 1000);
        }
    }
}

function matchCardsAttackPhaseDraw() {
    matchCardsPlayer.innerHTML = '';
    matchCardsEnemy.innerHTML = '';
}

function  matchCardsAttackPhase(LifePlayerCard, DamagePlayerCard, SpeedPlayerCard, LifeEnemyCard, DamageEnemyCard, SpeedEnemyCard){
    var MaxLifeCardPlayer = LifePlayerCard;
    var MaxLifeCardEnemy = LifeEnemyCard;
    while(LifePlayerCard>=0 || LifeEnemyCard>=0 || LifeEnemyCard>=-1 || LifeEnemyCard>=2 || LifeEnemyCard>=3 || LifePlayerCard>=-1 || LifePlayerCard>=2 || LifePlayerCard>=3){
        if(SpeedPlayerCard>SpeedEnemyCard){
            LifeEnemyCard-=DamagePlayerCard;
            chatAttackMatch.innerHTML += ('<p style="color:green;">~ Dañas al enemigo, -'+DamagePlayerCard+', '+LifeEnemyCard+'/'+MaxLifeCardEnemy+'</p>');
            if(LifeEnemyCard==0){
                break;
            }
            LifePlayerCard-=DamageEnemyCard;
            chatAttackMatch.innerHTML += ('<p style="color:red;">~ El enemigo te golpea, -'+DamageEnemyCard+', '+LifePlayerCard+'/'+MaxLifeCardPlayer+'</p>');
            if(LifePlayerCard==0){
                break;
            }
        }else{
            LifePlayerCard-=DamageEnemyCard;
            chatAttackMatch.innerHTML += ('<p style="color:red;">~ El enemigo te golpea, -'+DamageEnemyCard+', '+LifePlayerCard+'/'+MaxLifeCardPlayer+'</p>');
            if(LifePlayerCard==0){
                break;
            }
            LifeEnemyCard-=DamagePlayerCard;
            chatAttackMatch.innerHTML += ('<p style="color:green;">~ Dañas al enemigo, -'+DamagePlayerCard+', '+LifeEnemyCard+'/'+MaxLifeCardEnemy+'</p>');
            if(LifeEnemyCard==0){
                break;
            }
        }
    }
    if(LifePlayerCard>LifeEnemyCard){
        setTimeout(function(){
            matchCardsPlayer.innerHTML = '';
            matchCardsEnemy.innerHTML = '';
            pointsPlayer.innerHTML = pointsPlayerCount+=1;
            MatchsCount += 1;
            chatAttackMatch.innerHTML += ('<b class="playerPointWin">¡Punto para ti!</b><br>');
            MatchStatus="offline";
            ActualSetCardPlayer="none";
            MatchsCounts();
        }, 1000);
    }else if(LifeEnemyCard>LifePlayerCard){
        setTimeout(function(){
            matchCardsPlayer.innerHTML = '';
            matchCardsEnemy.innerHTML = '';
            pointsEnemy.innerHTML = pointsEnemyCount+=1;
            MatchsCount += 1;
            chatAttackMatch.innerHTML += ('<b class="enemyPointWin">¡Punto para tu enemigo!</b><br>');
            MatchStatus="offline";
            ActualSetCardPlayer="none";
            MatchsCounts();
        }, 1000);
    }
}

var winnedPage = document.querySelector('.winnerPage'),
    LosePage = document.querySelector('.LosePage'),
    drawPage = document.querySelector('.drawPage'),
    resultMatch = document.querySelectorAll('.resultMatch');
       
function MatchsCounts(){
    if(MatchsCount==4){
        if(pointsEnemyCount>pointsPlayerCount){
            for(var i=0;i < resultMatch.length; i++){
                resultMatch[i].innerHTML = 'Enemy: '+pointsEnemyCount+' | Player: '+pointsPlayerCount+'';
            }
            LosePage.style.display="flex";
            LosePage.style.animation="matchStatus 1s";
        }else if(pointsPlayerCount>pointsEnemyCount){
            for(var i=0;i < resultMatch.length; i++){
                resultMatch[i].innerHTML += 'Enemy: '+pointsEnemyCount+' | Player: '+pointsPlayerCount+'';
            }
            winnedPage.style.display="flex";
            winnedPage.style.animation="matchStatus 1s";
        }else if(pointsPlayerCount==pointsEnemyCount){
            for(var i=0;i < resultMatch.length; i++){
                resultMatch[i].innerHTML += 'Enemy: '+pointsEnemyCount+' | Player: '+pointsPlayerCount+'';
            }
            drawPage.style.display="flex";
            drawPage.style.animation="matchStatus 1s";
        }
    }
}