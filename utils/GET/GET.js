
export default function GET(url, id = "", method = () => {}, type) {
  fetch(url + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'it-IT',  
      // ^^ CAMBIO LINGUA
      'X-Musement-Application': 'Polarix',
        'X-Musement-Version': '3.4.0',
        'X-Musement-Currency': 'EUR'
      // ^^ CAMBIO VALUTA
    }
  })
    .then((res) => res.json())
    .then((data) => method({ type: type, payload: data }));
}
