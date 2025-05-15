# Apollo Example

This project demonstrates a basic GraphQL server using Go and the gqlgen library.

## Getting Started

1.  Clone the repository:

    ```bash
    git clone github.com/chinmay-sawant/Go-Apollo-Graphql-Example
    ```

2.  Install gqlgen:

    ```bash
    go get github.com/99designs/gqlgen
    ```

3.  Initialize gqlgen:

    ```bash
    go run github.com/99designs/gqlgen init
    ```
    Modify `gqlgen.yml` to enable federation:

    ```yaml
    federation:
        filename: graph/federation.go
        package: graph
    ```
4.  For federation details, visit:

    ```
    https://gqlgen.com/recipes/federation/
    ```

5.  Install Apollo Gateway and related packages:

    ```bash
    npm install --save @apollo/gateway apollo-server graphql
    ```

6.  Create `index.js` (see the URL above for the file content).
This will set up the basic project structure and generate the necessary files for your GraphQL server.
or refer the below index.js
```
https://github.com/chinmay-sawant/Go-Apollo-Graphql-Example/blob/master/index.js
```
7.  Run the Apollo Gateway:

    ```bash
    node index.js
    ```

8.  Access the Apollo Router at:

    ```
    http://localhost:4000/
    ```