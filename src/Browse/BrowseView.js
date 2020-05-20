import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag'

export default function BrowseView() {
    return (
        <>
            <Query query={gql` 
                {
                    recipes {
                        author
                        id
                        ingredients
                        name
                        steps
                    }  
                }   
                `} 
            >

                {({loading, error, data}) => {
                    if(loading) return <p>loading</p>;
                    if(error) return <p>error</p>;

                    return(data.recipes.map(({author, id, ingredients, name, steps}) => (
                      <div key={id}>
                        {steps}
                      </div>   
                    )
                    )

                    )
                }   
                }
            </Query>

            <h1>browse</h1>
        </>
    )
}