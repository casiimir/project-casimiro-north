
export default function GET(url, id = "", method = () => {}, type, lang, currency) {

  fetch(url + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': lang ,  
      // ^^ CAMBIO LINGUA
      'X-Musement-Application': 'Polarix',
        'X-Musement-Version': '3.4.0',
        'X-Musement-Currency': currency,
      // ^^ CAMBIO VALUTA
    }
  })
    .then((res) => res.json())
    .then((data) => method({ type: type, payload: data }));
}
