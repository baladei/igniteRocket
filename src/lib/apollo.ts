import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl9vwmcjl4eeg01ufcnn30nu2/master',
    cache: new InMemoryCache()
})
