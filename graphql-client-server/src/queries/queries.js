import { gql } from '@apollo/client';

const getBookQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

const getAuthorsQuery = gql`
    {
        authors{
            id
            name
        }
    }`;

const addBookMutation  = gql`
{
   mutation {
     addBook(name: "", genre: "", authorID: ""){
       name
       id
     }
   }
}`;

export { 
    getAuthorsQuery, 
    getBookQuery,
    addBookMutation
};