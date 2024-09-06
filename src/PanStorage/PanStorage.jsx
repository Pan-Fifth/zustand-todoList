import React from 'react'
import {create} from 'zustand'

const PanStorage = (set)=> ({
test1:'PanStorage',
arr: [],
addArr:(newValue)=>set((state)=>({
    arr: [...state.arr,{id:Date.now(),title: newValue}]
})),

delArr:(delId)=>set((state)=>({
    arr: state.arr.filter((el)=>el.id !== delId)
}))

})

const labStore = create(PanStorage)
export default labStore