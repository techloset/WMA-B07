
export default function BlogDetails(props) {
    console.log(props.params);
    
  return (
    <div>{props?.params?.abc}</div>
  )
}
