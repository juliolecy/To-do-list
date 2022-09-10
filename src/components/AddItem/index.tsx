import { useState, KeyboardEvent } from 'react'
import * as k from './styles'

type Props = {
    onEnter: (task:string) => void
};

export const AddItem = ({onEnter}:Props) =>{
   const [inputText, setInputText] = useState('')

   const handleKeyUp=(e: KeyboardEvent)=>{
        if(e.code ==='Enter' && inputText !== ''){
                onEnter(inputText);
                setInputText(""); 
        }
   }
    return (
        <k.Container>
            <div className='image'>
            ➕
            </div>
            <input 
            type="text"
            placeholder='Add'
            value={inputText}
            onChange={e=>setInputText(e.target.value)} 
            onKeyUp={handleKeyUp}
            />
        </k.Container>
    )
}