import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Workspaces = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [workspace, setWorkspace] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/workspaces')
            .then(res => {
                setWorkspace(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

  return (
      <main>
          <div className="container mx-auto">
            <h2>Workspaces: {workspace.length}</h2>
          </div>
      </main>
  )
}

export default Workspaces