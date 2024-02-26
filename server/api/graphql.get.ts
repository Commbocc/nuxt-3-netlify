export default defineEventHandler(async (event) => {
  const keys = await useStorage("graphql").getKeys();
  const queryAssetAll = await useStorage("graphql").getItem(
    "AssetAll.Query.gql"
  );

  return { keys, queryAssetAll };
});
