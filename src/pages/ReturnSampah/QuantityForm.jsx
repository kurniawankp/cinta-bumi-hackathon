import React from 'react'
import { Grid, IconButton, TextField, Switch } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import Order from 'assets/images/order.svg'
import Bag from 'assets/images/bag.svg'

const QuantityForm = () => {
  return (
    <div className="quantity-form">
      <div className="quantity-form-header">Kemasan yang mau kamu sumbang</div>
      <div className="quantity-form-body">
        <Grid container spacing={2}>
          <Grid item xs={6} alignItems="center">
            <img src={Order} alt="order" />
            <span>Kardus</span>
          </Grid>
          <Grid item xs={6} className="quantity-form-input">
            <IconButton aria-label="add" size="small">
              <Remove fontSize="inherit" />
            </IconButton>

            <TextField
              id="outlined-basic"
              variant="outlined"
              defaultValue={0}
              type="number"
              placeholder="0"
              hiddenLabel
            />

            <IconButton aria-label="add" size="small">
              <Add fontSize="inherit" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={6} alignItems="center">
            <img src={Bag} alt="bag" />
            <span>Plastik</span>
          </Grid>
          <Grid item xs={6} className="quantity-form-input">
            <Switch defaultChecked />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default QuantityForm
