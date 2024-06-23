const ItemComponent = ({ item }) => (
    <div>
      <p className="title">Title  {item.title}</p>
      <p>Author: {item.author}</p>
      <p>image:   {item.url}</p>
      <p>Comments: {item.num_comments}</p>
      <p>Points: {item.points}</p>
    </div>
  );
  
  export default ItemComponent;
  