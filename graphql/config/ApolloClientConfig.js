import { ApolloClient, InMemoryCache } from "@apollo/client";

const ApolloClientConfig = new ApolloClient({
    uri: process.env.GRAPH_CMS_CONTENT_API,
    headers: {
        Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`
    },
    cache: new InMemoryCache()
});

export default ApolloClientConfig;