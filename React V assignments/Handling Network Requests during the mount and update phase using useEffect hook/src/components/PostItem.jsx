export function PostItem({data}){
    return(
        <>
        {data.map((post)=>{
            return(
                <div style={{border:"1px solid white",marginTop:"3%"}} key={post.id}>
                    <div style={{display:"flex"}}>
                    <p style={{width:"20%"}}>{post.id}</p>
                    <h3 style={{width:"80%",color:"red"}}>{post.title}</h3>
                    </div>
                    <p>{post.body}</p>

                </div>
            )
        })}
        </>
    )
}