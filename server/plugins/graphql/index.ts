import { gql } from 'graphql-tag'
import { print } from 'graphql'

export default defineNitroPlugin(async (nitroApp) => {
  await useStorage('graphql').clear()

  const fileNames = await useStorage('rawGraphql').getKeys()

  const regex = new RegExp(/(.*).Query.(gql|graphql)/i)
  const queryFiles = fileNames.filter((f) => regex.test(f))

  for await (const qf of queryFiles) {
    const query = await compileQuery(qf)
    if (!query) continue
    await useStorage('graphql').setItem(qf, query)
  }
})

/**
 *
 * @param path
 * @returns
 */
async function compileQuery(fileName?: string) {
  if (!fileName) return

  const regex = /\#import\s*\"(.*)\"/

  let query = ''

  while (fileName) {
    query += await useStorage('rawGraphql').getItem(fileName)
    const importStr = query.match(regex)?.[1] ?? null
    fileName = importStr ?? undefined
    query = query.replace(regex, '')
  }

  const compiledQuery = print(
    gql`
      ${query}
    `
  )

  return compiledQuery.replace(/\s+/g, ' ').trim()
}
