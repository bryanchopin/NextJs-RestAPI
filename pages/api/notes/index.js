export default async function handler(req, res) {

  // only allow by post request
  if(req.method === 'POST') {
    await fetch ('http://localhost:3001/notes',{
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: req.body
    })
    return res.status(202).json({ message: 'Success' })
  }

  // only allow by get request and return all notes
  // if(req.method === 'GET') {
  //   const res = await fetch('http://localhost:3001/notes',{
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   const data = await res.json()
  //   return res.status(200).json(data)
  // }

  return res.status(400).json({ message: 'Only post request' })
}





// export default handler