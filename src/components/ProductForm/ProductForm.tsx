import type { ProductCreate } from "../../types"
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { useState } from "react";
import { Button } from "@mui/material";


interface Props {
    onSubmit: (product: ProductCreate) => void
}
export const ProductForm = ({onSubmit}:Props) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('0')

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        const productForCreating: ProductCreate = {
            name: name,
            price: Number(price)
        }
        onSubmit(productForCreating)
    }

    return(
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="product-name">Name</InputLabel>
                <OutlinedInput label="name" value={name} id='product-name' onChange={(e) => setName(e.target.value)} />
            </FormControl>
                
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">som</InputAdornment>}
                    label="price"
                />
            </FormControl>
            <Button type="submit">Send</Button>
        </form>
    )
}
