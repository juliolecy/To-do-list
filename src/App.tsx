import * as K from './App.styles'
import {useState} from 'react'
import {Item} from './types/item'
import { ListItem} from './components/ListItem'
import {AddItem} from './components/AddItem'
//import Nav from './components/Navbar'

const App = () => {
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
      <K.Container>
        <K.Area>
          <K.Header> Lista de tarefas</K.Header>

          <AddItem onEnter={handleAddTask}/>


          {list.map((item, index)=> (
            <ListItem key={index} item={item}/>
          ))}
        </K.Area>
      </K.Container>

    );
}

export default App