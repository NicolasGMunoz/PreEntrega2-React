import { useParams } from "react-router-dom";
import categories from '../../Mocks/categories.json';
import useMockData from "../Hooks/useMockData";
import { Grid, Typography } from "@mui/material";
import ProductsD from "../Products/ProductsD";

const CategoryProductList = () => {
    const {categoryId} = useParams();
    const {data, loading} = useMockData(categories);

    if (loading) return (<div ><h1>Cargando....</h1></div>)
    const category = data.filter(category => category.id === parseInt(categoryId))

    if(!category) return <Typography>Categoria no encontrada</Typography>


    return ( <>
    

                <div className='cont'>
                
                    <Grid container spacing={3}>
                        {
                            category.map((category) =>{
                                return category.products.map((product)=>{
                                    return <ProductsD key={product.id} product={product}/>
                                })
                            })
                        }
                    </Grid>

                </div>

    
    
    </> );
}
 
export default CategoryProductList;