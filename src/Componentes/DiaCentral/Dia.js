import Card from '../Cards/Card';
import './Dia.css'

function Dia(props){
    return(
        <div className='temperatura-dia'>
            <Card cidade={props.municipio} temperatura={props.temp + '°C'} descricao={props.desc} icone={props.icon}></Card>
        </div>
    )
}

export default Dia;