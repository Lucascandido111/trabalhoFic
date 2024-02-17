let intervalId;

function startAutomaticCommand(){
  const intervalId = setInterval(() => {
    nextImage();
    console.log('Comando automático executado!');
  }, 15000);
}

function stopAutomaticCommand() {
  clearInterval(intervalId>onclick);
}

// Parar o comando automático após 5 segundos
setTimeout(() => {
    nextImage();
  stopAutomaticCommand(intervalId>onclick);
  console.log('Comando automático interrompido!');
}, 15000);

// Recuperar o comando automático após 25 segundos
setTimeout(() => {
  startAutomaticCommand(nextImage);
  console.log('Comando automático recuperado!');
}, 15000);

let count = 1;
    document.getElementById("radio1").checked = true;

    function nextImage(){
        count++;
        if(count>3){
            count = 1;
        }
    
        document.getElementById("radio"+count).checked = true;
    }       



const barraPesquisa = document.getElementById('barra-pesquisa');
const resultados = document.getElementById('resultados');

barraPesquisa.addEventListener('keyup', function(event) {
  const termoBusca = barraPesquisa.value.toLowerCase();
  limparResultados();

  if (termoBusca.length >= 3) {
    const resultadosFiltrados = realizarBusca(termoBusca);

    resultadosFiltrados.forEach(function(resultado) {
      const li = document.createElement('li');
      li.textContent = resultado;
      resultados.appendChild(li);
    });
  }
});

function realizarBusca(termo) {
  // Aqui você pode implementar a lógica de busca do seu site
  // Por exemplo, você pode retornar um array com os resultados encontrados
  const resultados = ['Resultado 1', 'Resultado 2', 'Resultado 3'];

  return resultados.filter(function(resultado) {
    return resultado.toLowerCase().includes(termo);
  });
}

function limparResultados() {
  while (resultados.firstChild) {
    resultados.removeChild(resultados.firstChild);
  }
}