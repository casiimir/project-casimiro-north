// export async function GET_CART (Uuid){
//     const resp = await fetch("https://api.musement.com/api/v3/carts/"+Uuid, {
//          method: 'GET',
//          headers: {
//             'Accept-Language': 'it',
//             'X-Musement-Application': 'Polarix',
//             'X-Musement-Currency': 'EUR',
//             'X-Musement-Market': 'it',
//             'X-Musement-Version': '3.4.0'
//           },
//       }
//       )
//       const data = await resp.json()
//       console.log(data)
//       return data;
//  }



// export async function POST (data){
//    const res = await fetch("https://api.musement.com/api/v3/carts", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept-Language': 'it',
//             'X-Musement-Application': 'Polarix',
//             'X-Musement-Currency': 'EUR',
//             'X-Musement-Market': 'it',
//             'X-Musement-Version': '3.4.0'
//           },
//           body: JSON.stringify({data})
//      })

//      return res.json();
// }

// export async function POST_ITEM (item, cartUuid) {

//      const resp = await fetch(
//           `https://api.musement.com/api/v3/carts/${cartUuid}/items`,
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//               'Accept-Language': 'en-US',
//               'X-Musement-Application': 'Polarix',
//               'X-Musement-Currency': 'USD',
//               'X-Musement-Market': 'us',
//               'X-Musement-Version': '3.4.0'
//             },
//             body: JSON.stringify({})
//           }
//         );
      
//         const data = await resp.json();
//         return data
// }