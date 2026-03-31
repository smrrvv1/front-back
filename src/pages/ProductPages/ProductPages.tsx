import { useEffect, useState } from "react"
import type { IProduct } from "../../types"
import { axiosApi } from "../../axiosApi"
import { ProductCard } from "../../components/ProductCard/ProductCard"
import { Link } from "react-router"

export const ProductPages = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect( () =>{
            const getProducts = async() => {
              try{
                const response = await axiosApi('/products')
                setProducts(response.data)
              } catch(error) {
                console.log(error)
              }
            }
            getProducts()
          },[])

    return(
        <div>
          <Link to='/product/create'>
          Create Product
          </Link>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {
                  products.map((productItem) => (
                      <ProductCard
                      product={productItem} 
                      key={productItem.id}
                      />
                  ))
              }
            </div>
        </div>
    )
}