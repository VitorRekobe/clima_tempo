import './Card.css'

function Card(props){

    return(
        <div className='card'>
            <h3>{props.cidade}</h3>
            {/* <img src={`http://openweathermap.org/img/wn/${props.icone}@2x.png`}></img> */}
            <h1>{props.temperatura}</h1>
            <p>{props.descricao}</p>
        </div>
    )
}

export default Card;