import { useState } from 'react';
import {Item} from '../../types/item'
import {AddItem} from '../../components/AddItem'
import { ListItem} from '../../components/ListItem'
import * as k from './styles';

const Home = ()=>{
    const [list,setList] = useState<Item[]>([
        {id:1, name:'visitar meu portfólio', done:false}
      ]);
    
      const handleAddTask = (task:string) =>{
        let newList = [...list];
        newList.push({
          id: (list.length+1),
          name: task,
          done:false
        });
    
        setList(newList);
      }
    

    return( 
        <k.Container>
        <k.Area>
          <k.Header> Lista de tarefas</k.Header>

          <AddItem onEnter={handleAddTask}/>


          {list.map((item, index)=> (
            <ListItem key={index} item={item}/>
          ))}
        </k.Area>
      </k.Container>
    )
}

export default Home