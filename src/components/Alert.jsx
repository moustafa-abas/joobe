import {  faShare, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  getPosts, makeComment, setAlert } from "../pages/store/CommunitySlice"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { createPost, deletePost, updatePost } from "../pages/store/CommunitySlice"

const Alert = () => {
    const dispatch=useDispatch()
    const alert=useSelector((state)=>state.community.alert)
    const post=useSelector((state)=>state.community.post)
    const comments=useSelector((state)=>state.community.post.comments)
    const {register,watch,handleSubmit} = useForm({
defaultValues:{
  content:'',
}
    });
    const onSubmit = async(data ,e) => {
      e.preventDefault();
      if(alert==="create post"){
await dispatch(createPost(data))
dispatch(getPosts())
}else if(alert==="update post"){
  await dispatch(updatePost(data))
  dispatch(getPosts())
}else if(alert==='comment'){
  await dispatch(makeComment({data , id:post._id}))
  dispatch(getPosts())
}
};
  return (
    <div className="alert position-fixed top-0 bottom-0  end-0  start-0  mb-0    ">
      {alert==='comment'?
      <div className={`comments w-50  position-absolute bottom-0 start-50 translate-middle-x  ${alert!=null?'overflow-y-scroll':''} `}>
    <FontAwesomeIcon icon={faX} className=" x-mark  position-sticky    " onClick={()=>dispatch(setAlert(null))}/>
      <div className="mt-4">
    {
      comments?.map((comment)=>(
        <div className="one-comment d-flex align-items-center my-3 gap-3 " key={comment._id}>
            <img src={comment.studentId.profileImage} alt="" className='source mx-3' width={60}/>
            <div className="info ">
                <h2 className='fs-6 fw-semibold'> {comment.studentId.username}</h2>
                <h3 className='fs-6 fw-light'>{comment.content}</h3>
            </div>
        </div>
      ))
    }
    <form action=""  onSubmit={handleSubmit(onSubmit)} className="position-sticky ">
        <input type="text"
        placeholder='Write a comment'
        className='py-3 px-2'
        {...register('content',
            {required:true}
        )}
        />
        <button type="submit" className=" position-absolute top-50 end-0 translate-middle-y me-3 fs-3"><FontAwesomeIcon icon={faShare}  /></button>
    </form>
    </div>
    </div>
      :
    <div className="content  w-50 position-absolute top-50 start-50 p-5 text-center">
    <FontAwesomeIcon icon={faX} className=" x-mark mt-4 position-absolute top-0 end-0 me-5" onClick={()=>dispatch(setAlert(null))}/>
{alert==='create post' || alert==='update post'?
<>
  <h2 className='text-center mb-5 fw-bold'>{alert==='update post'?'update post':'Create Post'}</h2>
    <form action="" onSubmit={ handleSubmit(onSubmit)} >
            <div className="group d-flex my-4">
        <input type="text" placeholder='What do you want to talk about?' className='border-0 ms-3 d-flex  ' 
        {...register('content',
            {required:true}
        )
        }
        />
        </div >
        {/* <div className='upload mt-5 border position-relative '>
        <input type="file" id='image' className='opacity-0 text-center w-100 position-relative '
    name='image'
    {...register('img')}
    accept='image/*'
    onChange={ handleFileChange}
    />
        <FontAwesomeIcon icon={faXmark}  className='icon position-absolute p-2 mt-2 z-2 'onClick={()=>setSrc()}/>

    <label htmlFor="image" className='start-50 w-100 h-100 top-50 text-center position-absolute file '>
            {src? <img src={src} alt="" className='w-100 h-100'/>:<div className='label position-absolute start-50 top-50 '>
    <FontAwesomeIcon icon={faImage} className='fs-2 mb-2'/>   
    <h5>Add Photo</h5>
</div>
}
    </label>
</div> */}
    <button type='submit' className={`${!watch('content')?'text-bg-secondary':''}  w-100 py-2 mt-4`} disabled={!watch('content')}>Post</button>
</form>
</>:null}
{alert==='post'?
 <>
 <h2 className='text-center pb-3'>what do you want...? </h2>
<div className=" d-flex justify-content-center gap-4">

<button className=' p-1  w-50'  onClick={()=>dispatch(setAlert('update post' ))}>Edit Post</button> 
<button className=' p-1  w-50' onClick={async()=>{await dispatch(deletePost({id:post._id}))
dispatch(getPosts())}}>Delete Post</button>
</div>
</>
:null}
{alert==='not logined'?
  <>
    <h2>you are not logined</h2>
    <div className=" d-flex justify-content-between w-75 mx-auto gap-4 mt-5">
      <button className="w-50 py-2"><a href="/login">log in</a></button>
      <button className="w-50 py-2"><a href="/signup">sign up </a></button>
    </div>
    </>:null
}
{
  alert==='failed'?
  <h2 className=" text-center text-capitalize"> failed to complete</h2>:
  null
}
    </div>
}
  </div>  )
}

export default Alert