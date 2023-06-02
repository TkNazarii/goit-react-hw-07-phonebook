import { createAction } from "@reduxjs/toolkit"

// export const changeFilterValue = (value) => ({type: CHANGEFILTERVALUE,payload: value})

export const changeFilterValue = createAction('CHANGEFILTERVALUE')
