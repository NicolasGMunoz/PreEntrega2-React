import useMockData from "../Hooks/useMockData";
import products from '../../Mocks/products.json'
import { Grid, Typography } from "@mui/material";
import ProductsD from "./ProductsD";


const ProductList = () => {

    const { data, loading } = useMockData(products)



    return (<>

        {loading ?
            <h1>Cargando....</h1> :
            (
                <div className='cont'>
                    <Typography variant='h3' sx={{ color: "white" }}>Productos</Typography>
                    <Grid container spacing={3}>
                        {
                            data.map((product)=>{
                                return <ProductsD key={product.id} product={product}/>
                            })
                        }
                    </Grid>

                </div>
            )
        }


    </>);
}

export default ProductList;