import {
  getAddPost,
  getDeletePost,
  likeTogglePost,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postsData: state.profileReducer.postsData,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  getAddPost,
  getDeletePost,
  likeTogglePost,
})(MyPosts);

export default MyPostsContainer;
