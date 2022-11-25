import React,{useState} from "react";
import "./SearchButton.css"



const SearchButton =  (props) =>{

    const [productState, setProductState] = useState([])
    const [BookShelfVolumeInfo, setBookShelfVolumeInfo] = useState([])

    const handleSearchClick = () =>{

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${props.children}`)
        .then((res) => res.json())
        .then((productsArray) => {

            const booksName =  productsArray.items.map((product) => {
                return product.volumeInfo.title

      })
        setProductState(booksName)
        
        const booksInBookShelf =  productsArray.items.map((product) => {
            return product

      })
        setBookShelfVolumeInfo(booksInBookShelf)
  
      })
        setTimeout(() => {
            

        }, 1000)


    }


    const handleBookClick = (product) =>{

        for(let i = 0; i < BookShelfVolumeInfo.length; i++){
            console.log(i)
            if(BookShelfVolumeInfo[i].volumeInfo.title === product){
                alert(BookShelfVolumeInfo[i].volumeInfo.description)

            }
        }
        

    }

    return (
    <div>
        <button onClick={handleSearchClick}>Search</button>
        <ul> 
            {productState.map((product) => {

                return <li key={product} onClick={() => { return handleBookClick(product)}}>{product}</li>
            })}
        </ul>
        
    </div>


    )

}


export default SearchButton