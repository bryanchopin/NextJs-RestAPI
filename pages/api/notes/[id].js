
export default async function handler(req, res) {

    //retuns note by id
    if(req.method === 'GET') {
      const { id } = req.query
      const response = await fetch(`http://localhost:3001/notes/${id}`,{
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      //if response is not ok, redirect to /api/notes/1
      if(!response.ok){
        // return res.redirect(307,'/api/notes/1')
        return res.status(response.status).end()
      }
      
      //if response is ok, return note
      const note = await response.json()
      return res.status(200).json(note)
    }
  
    return res.status(400).json({ message: 'Only post request' })
  }
  
  