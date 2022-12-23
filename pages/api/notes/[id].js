// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

    if(req.method === 'GET') {
      const { id } = req.query
      const response = await fetch(`http://localhost:3001/notes/${id}`,{
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if(!response.ok){
        return res.status(response.status).end()
      }

      const note = await response.json()
      return res.status(200).json(note)
    }
  
    return res.status(400).json({ message: 'Only post request' })
  }
  
  