import points from "../images/3points.svg";
import comment from "../images/comment.svg";
import share from "../images/share.svg";
import photoShare from "../images/heroicons_photo.svg";
import video from "../images/lucide_video.svg";
import file from "../images/mynaui_file.svg";
import { useEffect } from "react";
import {getPost,getPosts,setAlert,makeLike,} from "../pages/store/CommunitySlice";
import { useDispatch, useSelector } from "react-redux";
import { faHeart as liked } from "@fortawesome/free-solid-svg-icons";
import { faHeart as unliked } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CommunityPart = () => {
const dispatch = useDispatch();
const alert = useSelector((state) => state.community.alert);
const posts = useSelector((state) => state.community.posts?.data);
const profile = useSelector((state) => state.user.userData);
const userId = useSelector((state) => state.user.userData._id) || ((state)=>state.user._id)  
console.log(profile)
useEffect(() => {
dispatch(getPosts());
}, []);
useEffect(() => {
if (alert != null) {
    document.body.style.overflow = "hidden";
} else {
    document.body.style.overflow = "auto";
}
}, [alert]);
return (
<div className="publish  p-1 overflow-y-scroll  ">
    <div className="head">
    <div className="d-flex align-items-center gap-3 mb-3 ms-3">
        <img src={profile.profileImage} alt="" className="rounded-circle" width={50} height={50} />
        <h5
        className="text-secondary "
        onClick={() => dispatch(setAlert("create post"))}
        >
        What do you want to talk about?
        </h5>
    </div>
    <ul className="d-flex p-0">
        <li className="d-flex w-25 justify-content-center align-items-center py-3 gap-2 fs-6 fw-semibold">
        <img src={photoShare} alt="" /> Photo
        </li>
        <li className="d-flex w-25 justify-content-center align-items-center py-3 gap-2 fs-6 fw-semibold">
        <img src={video} alt="" />
        Video
        </li>
        <li className="d-flex w-25 justify-content-center align-items-center py-3 gap-2 fs-6 fw-semibold">
        <img src={file} alt="" />
        File
        </li>
        <li className="d-flex w-25 justify-content-center align-items-center py-3 gap-2 fs-6 fw-semibold active">
        Post
        </li>
    </ul>
    </div>
    {posts?.map((post) => (
    <div className="post py-4 px-3" key={post._id}>
        <div className="info d-flex position-relative">
        <img
            src={post.studentId?.profileImage}
            alt=""
            className="source rounded-circle"
        />
        <div className="name ms-3 mt-1">
            <h5>{post.studentId?.username}</h5>
            <h6>1 h</h6>
        </div>
        {post.studentId?._id === userId ? (
            <img
            src={points}
            alt=""
            className="more  "
            onClick={async (e) => {
                e.preventDefault()
                await dispatch(getPost({ id: post._id }));
                dispatch(setAlert("post"));
            }}
            />
        ) : null}
        </div>
        <div className="content">
        <h2 className="my-3 fs-5 fw-light">{post.content}</h2>
        {post.img ? <img src={post.img} alt="" width={100} height={300} /> : null}
        </div>
        <div className="tools d-flex justify-content-between mt-3">
        <div
            className={`likes ${
            post.likes.includes(userId) ? "liked" : ""
            }`}
            onClick={async(e) =>{e.preventDefault()
            await dispatch(makeLike({ id: post._id }))
        dispatch(getPosts())}}
        >
            <h3 className="fs-6 fw-semibold ">Likes</h3>
            <p className="fs-6 fw-semibold d-flex align-items-center gap-1">
            {post.likes.includes(userId) ? <FontAwesomeIcon icon={liked}  />:<FontAwesomeIcon icon={unliked} style={{color:'gray',}}/> }
                {post.likes.length}
            </p>
        </div>
        <div
            className="comment"
            onClick={async () => {
            await dispatch(getPost({ id: post._id }));
            dispatch(setAlert("comment"));
            }}
        >
            <h3 className="fs-6 fw-semibold">Comments</h3>
            <p className="fs-6 fw-semibold d-flex align-items-center gap-1">
            <img src={comment} alt="" />
            {post.comments.length}
            </p>
        </div>
        <div className="share">
            <h3 className="fs-6 fw-semibold">Share</h3>
            <p className="fs-6 fw-semibold d-flex align-items-center gap-1">
            <img src={share} alt="" />
            32
            </p>
        </div>
        </div>
    </div>
    ))}
    
</div>
);
};

export default CommunityPart;
