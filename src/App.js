import { useState, useEffect } from 'react';

import './App.css';
import Dia from './Componentes/DiaCentral/Dia';
import Semana from './Componentes/Semana/Semana'; // importando o header
import Topo from './Componentes/Header/Topo';

//importando os fundos
import back from './Componentes/Imagens/ceu.jpg'
import back2 from './Componentes/Imagens/1005900.jpg';

// Fazendo com que os fundos troquem pelo horario
var data = new Date().getHours()
if (data >= 18 || data < 6) {
  back = back2;
}

console.log(data)
// A união e parte principal do codigo
function App() {
  const [cidade, setCidade] = useState('São Paulo');
  const [temperatura, setTemperatura] = useState(null);
  const [descricao, setDescricao] = useState(null);
  const [icone, setIcone] = useState(null);
  const [previsao, setPrevisao] = useState([]);
  const array = [];

  //consumo da API do dia
  useEffect(() => {
    //Temperatura do dia
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&cnt=3&appid=777fd6c175f16899b669ab9b22be7638`)
      .then(resposta => {
        return resposta.json()
      })
      .then(dado => {
        setTemperatura(Math.round(dado.main.temp))
        setDescricao(dado.weather[0].description)
        setIcone(dado.weather[0].icon)
      })
      .catch(erro => {
        console.log(erro)
      })

    // Fazendo consumo da API da semana
    //Temperatura da semana
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`)
      .then(resposta => {
        return resposta.json()
      })
      .then(dado => {
        for (let i = 2; i <= dado.list.length; i += 8) {
          array.push(dado.list[i])
        }
        setPrevisao(array)
      })
      .catch(erro => {
        console.log(erro)
      })
  }, [cidade])

  return (
    <div className="App" style={{
      backgroundImage: `url(${back})`
    }}>
      {/* Construindo, enviando e pegando os dados da API */}
      <Topo pegarCidade={setCidade}></Topo>
      <Dia municipio={cidade} temp={temperatura} desc={descricao} icon={icone}></Dia>
      <Semana diasTemp={previsao}></Semana>
    </div>
  );
}

export default App;
