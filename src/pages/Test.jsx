import Button from "../components/Button.jsx"
import {useState} from "react"

const Test = () => {

    const [numero,setNumero] = useState(15)

    const [frutas,setFrutas] = useState(["Banana"])

    const aumentar = () => {
        setNumero(numero + 1)

    }

    const diminuir = () => {
        setNumero(numero - 1)

    }

    const addMaca = () => {
        setFrutas([...frutas,"Maçã"])
    }

    const se = (numero) => {

        numero === 10 && console.log("é o numero 10")

        if(numero === 10){
            console.log("é o numero 10")
        }

        numero > 10 ? console.log("maior que 10") : console.log("menor que 10")

        if(numero > 10){
            console.log("maior que 10")
        } else {
            console.log("menor que 10")
        }

    }

    const loop = () => {
        const nomes = [{nome:"João",sobrenome:"Grisolia"},{nome:"JP",sobrenome:"Mata"}]
        
        nomes.forEach((nome) => {
            console.log(nome)
        })

        const novoArray = nomes.map((nome) => {
            return {
                marca:"Fiat"
            }
        })
    
            console.log(novoArray)

    }

    return (

        <>
        
            <ul>

                {frutas.map((fruta,i) => 
                    <li key={i}> {fruta} </li>
                )}

            </ul>

            <h1> {numero} </h1>
            
            <Button onClick={diminuir}>
                Diminuir
            </Button>

            <Button onClick={aumentar}>
                Aumentar
            </Button>

            <Button onClick={addMaca}>
                Adicionar maçã
            </Button>

            <Button onClick={() => se(10)}>
                Clicar
            </Button>

            <Button onClick={loop}>
                Loop
            </Button>
        
        </>

    )

}


export default Test