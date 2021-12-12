import React from 'react';
import Review from './Review';
{/*import {FaGithubSquare} from 'react-icons/fa'*/}

function App() {  
  
  return(
      /*<h2>
        /*<FaGithubSquare className='icon'/>
      </h2>*/

      <main>
        <section className='container'>
          <div className='title'>
              <h2>Our Reviews</h2>
              <div className='underline'></div>    
          </div>
          <Review />
        </section>
      </main>

  )
}

export default App;
