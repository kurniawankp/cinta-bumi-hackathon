import React from 'react'
import { TextField } from '@mui/material'
import MapImg from 'assets/images/map.svg'

const Maps = () => {
  return (
    <div className="maps-form">
      <TextField
        label="Lokasi Kamu"
        variant="outlined"
        fullWidth
      />
      <img src={MapImg} alt="maps" />
      <TextField
        label="Drop off Point"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Dijemput / pickup (min 20 qty)"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Dijemput BES yang mengantar paket"
        variant="outlined"
        fullWidth
      />
    </div>
  )
}

export default Maps
