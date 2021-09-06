export const getStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products/');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://fakestoreapi.com/products/' + id);
  const data = await res.json();

  return {
    props: { ninja: data }
  }
}

const Details = ({ ninja }) => {
  return (
    <div>
       <img src ={ninja.image} width={250}  height={250}    alt="" />
      <h1>{ ninja.title }</h1>
      <p>{ ninja.description }</p>
      <p>{ ninja.price }</p>
     
    </div>
  );
}

export default Details;