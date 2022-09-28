
export default function GET(url, id = "", method = () => {}, type) {
  fetch(url + id)
    .then((res) => res.json())
    .then((data) => method({ type: type, payload: data }));
}
