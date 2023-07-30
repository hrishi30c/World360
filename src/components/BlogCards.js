import React from 'react'
export default function BlogCards(props) {
  
  const [detail,setDetail]=React.useState({
    likes: props.likes,
    isFavourite:false
  })

  let starIcon = detail.isFavourite ? "https://img.icons8.com/?size=512&id=8uAtuJQJ4jhd&format=png" : "https://img.icons8.com/color/48/star--v1.png"
  
  function toggle()
  {
    setDetail(prevDetail=>{
      return {
        likes: prevDetail.isFavourite? prevDetail.likes-1:prevDetail.likes+1 ,
        isFavourite: !prevDetail.isFavourite
      }
    })
  }

  let latest;
  const d = new Date();
  if(props.year===d.getFullYear())
  {
    if(props.month===d.getMonth())
    {
        if((d.getDate() - props.day) < 2)
        {
            latest="Latest"
        }
        
    }
    
  }
  
  let popular;
  if(props.likes>=60)
  {
    popular="Trending";
  }

  return (
    <div>
        <div className="container">
            { latest && <div className='latest-label'>{latest}</div> }
            { popular && <div className='trend-label'>{popular}</div> }
            <img className='image' src={props.img} alt='biden' width="300px" height="190px"/>
            
            <div className="desc">
                <ul className="info">
                    <li><p className="tag">{props.location}</p></li>
                    <li>
                    <div className="likestats">
                    <img className="star" onClick={toggle} src={starIcon} alt="star" width="18px" height="18px"/><p className="likecount">{detail.likes}</p>
                    
                    </div>
                    </li>
                </ul>
                <p className="author">{props.author}</p>
                <h3 className="title">{props.title}</h3>
                <p className="preview">{props.preview}</p>
            </div>
        </div>
        
    </div>
    
  )
}
