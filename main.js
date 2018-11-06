class Ponto {
    constructor(nome, posX, posY) {
        this.nome = nome
        this.x = posX
        this.y = posY
    }

    mover_horizontalmente(distancia) {
        this.x += distancia
        return this.x
    }

    mover_verticalmente(distancia) {
        this.y += distancia
        return this.y
    }

    mover(distanciaX, distanciaY) {
        this.x += distanciaX
        this.y += distanciaY
        return [ this.x, this.y ]
    }

    distancia_entre_dois_pontos(outro_ponto) {
        const x1 = this.x
        const y1 = this.y
        const x2 = outro_ponto.x
        const y2 = outro_ponto.y
        return Math.sqrt( ( Math.abs( x1 - x2 ) ) ** 2 + ( Math.abs( y1 - y2 ) ) ** 2 )
    }
}

class Div extends Ponto {
    constructor(nome, cor, posX, posY, altura, largura) {
        super(nome, posX, posY)

        this.cor = cor
        this.altura = altura
        this.largura = largura
    }

    desenhar() {
        const body = document.querySelector("body")
        this.node = document.createElement("div")
        this.node.style.width = this.largura + "px"
        this.node.style.height = this.altura + "px"
        this.node.style.backgroundColor = this.cor
        this.node.style.left = this.x + "px"
        this.node.style.top = this.y + "px"
        body.appendChild(this.node)
    }
}

const Elemento = document.querySelector("div");

document.addEventListener("keydown", function(event){  
    //console.log(event.key) -->descobrir o nome  da tecla
    if(event.which === 37) { //left
         console.log(elemento)
        elemento.x -= 10;
        elemento.node.style.left = elemento.x + 'px'
    }else if(event.which === 38){  //top
        this.y += distancia
    }else if(event.which === 39) {  //right
        this.x += distancia
    }else if(event.whith === 40) { //down
        this.y -= distancia
    }

})

const elemento = new Div ("bolaazul", "blue", 30, 30, 100, 100)

elemento.desenhar()

