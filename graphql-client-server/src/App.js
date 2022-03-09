import BookList from "./components/bookList.component";
import AddBook from "./components/addBook.component";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
        <div className="App">
            <BookList/>
            <AddBook/>
        </div>
    </ApolloProvider>
  );
}

export default App;
