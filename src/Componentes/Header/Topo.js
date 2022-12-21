import {useState} from 'react';
import './Topo.css';

function Topo(props){
    const [entrada, setEntrada] = useState('São Paulo');


    const enviaCidade = () =>{
        props.pegarCidade(entrada);
        // props.pegarCidade() == setCidade
    };
    return(
        <header>
            <div>
                <h2 className='pre'>Previsão do tempo:</h2>
            </div>
            <div className='pesquisa'>
                <input
                    type='text'
                    placeholder='buscar cidade'
                    onChange={(evento) =>{setEntrada(evento.target.value)}}
                />
                <span onClick={enviaCidade}>&#x1F50E;&#xFE0E;</span>
            </div>
        </header>
    );
}
export default Topo;