import { useState } from 'react'
import * as k from './styles'
import {Item} from '../../types/item'

type Props = {
    item: Item;
}

export const ListItem = ({item}: Props) =>{
    const [check, setCheck]=useState(item.done);
    return(
        <k.Container done={check}>
            <input 
            type='checkbox' 
            checked={check}
            onChange={e => setCheck(e.target.checked)}
            />
            <label>{item.name}</label>
        </k.Container>

    )
}