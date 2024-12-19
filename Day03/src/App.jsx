import React from 'react'
import categories from './utility/data';
import ListComponents from './Components/ListComponents';

const App = () => {
  return (
    <div className="bg-gradient-to-t from-slate-200 to-slate-600 w-full h-screen flex flex-wrap">
    <ListComponents categories={categories}/>
    </div>
  )
}

export default App;






