import React from 'react';

const Categories = ({filterItems,categories}) => {
  return( 
    <div className='btn-container'>
      
      {/*Manual Aproach

      <button className='filter-btn' onClick={()=>filterItems('all')}>
          All
      </button>
      
      <button className='filter-btn' onClick={()=>filterItems('breakfast')}>
          breakfast
      </button>
  */}

      <div className='btn-container'>
          {categories.map((category,index)=>{

              return(
                <button 
                type='button' 
                className='filter-btn' 
                key={index}
                onClick={()=>filterItems(category)}
                >
               
                  {category}

                </button>
              )

          })}
      </div>
      
    </div>
  );
};

export default Categories;
