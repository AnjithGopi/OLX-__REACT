

import React ,{useState,useEffect,useContext} from 'react';
import { FirebaseContext } from '../../store/firebaseContext';

import { PostContext } from '../../store/postContext';

import './View.css';
function View() {

  const [userDetails,setUserDetails]=useState()
  const{postDetails}=useContext(PostContext)
  const {firebase}=useContext(FirebaseContext)

  // useEffect(()=>{

  //   const {userId}=postDetails
  //   firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
  //     res.forEach(doc=>{
  //       setUserDetails(doc.data())
  //     })
  //   })

  useEffect(() => {
    if (postDetails) {
      const { userId } = postDetails;
      firebase.firestore().collection('users').where('id', '==', userId).get()
        .then((res) => {
          res.forEach(doc => {
            setUserDetails(doc.data());
          });
        });
    }
  }, [postDetails, firebase]);
  // },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        {postDetails && postDetails.url ? ( // Check if postDetails and url exist
          <img src={postDetails.url} alt="" />
        ) : (
          <p>Loading...</p> // Optional loading state
        )}
      </div>
      <div className="rightSection">
        <div className="productDetails">
          {postDetails && (
            <>
              <p>&#x20B9; {postDetails.price}</p>
              <span>{postDetails.name}</span>
              <p>{postDetails.category}</p>
              <span>{postDetails.createdAt}</span>
            </>
          )}
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
