import type { Request, Context } from 'https://edge.netlify.com'

export default async (req: Request, context: Context) => {
  const { pathname } = new URL('./.deps/test.gql', import.meta.url)
  const query = await Deno.readTextFile(pathname)

  return context.json({
    //
    meta: import.meta.url,
    pathname,
    query,
  })
}
