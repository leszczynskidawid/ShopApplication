import Header from "components/organisms/Header"


export const ApConnect = {
    KEY: 'X6TyMgzQpaZ1zGD7CXMGwdOa6tGhv8PY', 
    SECRET:"GIfpmTr97g5fkYQb",
    APP_ID: "a2ea9eb4-3559-486c-87e7-a33a36be1d63"
    
}

export const  fetchData = async () => 
{

 
    try {
   

 
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${ApConnect.KEY}`)

    
        const json = await response.json()
        console.log(json)
        return json.results.books
    } catch (error) {
        console.log(error)
    }

    
    
}