function obtenerTasaDeCambio() {
  const url = `https://si3.bcentral.cl/SieteRestWS/SieteRestWS.ashx?user=pa.nadinic@duocuc.cl&pass=Realagasajo18023009-2&firstdate=2023-01-01&lastdate=2023-01-01&timeseries=F022.VFWP4.PRE.D035.Z.USD.D&function=GetSeries`;
  
  return fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Error al obtener la tasa de cambio');
          }
          return response.json();
      })
      .then(data => {
          if (data && data.Series && data.Series.Obs && data.Series.Obs.length > 0) {
              const tasaCambio = data.Series.Obs[0].value;  // Acceso a la tasa de cambio según tu estructura de datos
              document.getElementById('tasaCambio').innerText = `Tasa de cambio: $${tasaCambio}`;
              return tasaCambio;
          } else {
              throw new Error('No data found');
          }
      })
      .catch(error => {
          console.error('Error en la API del Banco Central:', error);
          document.getElementById('tasaCambio').innerText = 'Error al cargar la tasa de cambio.';
      });
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', function () {
  obtenerTasaDeCambio();
});
