import axios from 'axios'

const baseUrl = 'http://localhost:3002/anecdotes'

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const createNew = async (content) => {
    const object = { content, votes: 0 }
    const res = await axios.post(baseUrl, object)
    return res.data
}

const postVote = async (anec) => {
    const res = await axios.put(`${baseUrl}/${anec.id}`, { ...anec, votes: anec.votes + 1 })
    return res.data
}

export default { getAll, createNew, postVote }