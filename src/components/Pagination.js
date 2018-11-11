import React from 'react';

const Pagination = ({ previous, next, current, changePage }) => {

  return(    
    <div className="pagination">
      {
        previous &&
        <a
          onClick={() => changePage(previous, -1)}
          href={`/${current}`}
          className='prev-page'
        >{"<"}</a>
      }

      <span className='curr-page'>{`Page ${current}`}</span>
      
      {
        next &&
        <a
          onClick={() => changePage(next, 1)}
          href="#!"
          className='next-page'
        >{">"}</a>
      }
    </div>  
  )
}

export default Pagination;