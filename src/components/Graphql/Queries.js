import { GraphQLClient, gql } from 'graphql-request';

export const graphcms = new GraphQLClient(process.env.REACT_APP_API_GRAPHQL);

const post = `
id,
title,
slug,
content { html },
createdAt,
description,
photo { url }
`;

export const QUERY_POSTS = gql`
    {
        posts()
        {
            ${post}
        }
    }
`;

export const QUERY_ONE_POSTS = gql`
    query getOnePost($slug: String!) 
    {
        posts(where: {slug: $slug}) 
        {
        ${post}
    }
    }
`;
