// import axios from 'axios'

export default defineEventHandler(async (event) => {
  //   setHeader(event, 'Content-Type', 'text/plain')

  // const { host } = event.node.req.headers

  // const url = `//${host}/test.Query.gql`
  // const { data: query } = await axios.get(url)

  // const query = await event.$fetch(`/test.Query.gql`)

  return { test: 'hi' }
})
