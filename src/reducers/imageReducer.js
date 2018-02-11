import initialState from "./initialState"
import * as types from "../constants/actionTypes"

// Handles image related actions
// The idea is to return an updated copy of the state
export default function(state = initialState.images, action) {
  switch (action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return [...state, action.images]
    case types.SELECTED_IMAGE:
      // For context, { …state, videos: action.videos }
      // evaluates to Object.assign({}, state, action.videos)
      return { ...state, selectedImage: action.image }
    default:
      return state
  }
}
