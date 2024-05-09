const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.get('/api/tasaCambio', (req, res) => {
    
    const url = `https://si3.bcentral.cl/SieteRestWS/SieteRestWS.ashx?user=pa.nadinic@duocuc.cl&pass=Realagasajo18023009-2&firstdate=2024-05-05&lastdate=2024-05-05&timeseries=F073.TCO.PRE.Z.D&function=GetSeries`;
  
    fetch(url)
        .then(apiRes => apiRes.json())
        .then(apiData => res.json(apiData))
        .catch(err => {
            console.error(err);
            res.status(500).send(err.message);
        });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
