import Card from "../Cards/Card";
import './Semana.css'

var data = new Date().getHours()

function Semana(props) {
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']

    return (
        <div className='diariamente'>
            <h2>Dias seguintes</h2>

            <hr></hr>
            <div className='temperatura-semana'>
                {props.diasTemp.map((dado, index) => {
                    return (
                        <Card cidade={diasSemana[new Date(dado.dt_txt).getDay()]} temperatura={Math.round(dado.main.temp) + '°C'} descricao={dado.weather[0].description} icone={dado.weather[0].icon}></Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Semana;