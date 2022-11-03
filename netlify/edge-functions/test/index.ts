import type { Request, Context } from 'https://edge.netlify.com'

export default async (req: Request, context: Context) => {
  const { pathname } = new URL('./test.gql', import.meta.url)
  
  // const query = await Deno.readTextFile(pathname)
  const query = await Deno.readTextFile(import.meta.url)
  

  return context.json({
    //
    meta: import.meta.url,
    pathname,
    query,
  })
}
