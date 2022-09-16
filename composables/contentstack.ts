import pkg from "contentstack";
const { Stack, Region } = pkg;

const stack = new Stack({
  api_key: process.env.CONTENTSTACK_API_KEY || "",

  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN || "",

  environment: process.env.environment || "",

  region: Region.US,
});

export const useContentstack = () => {
  return { stack };
};
