import initialState from "./initialState"
import * as types from "../constants/actionTypes"

// Handles video related actions
// The idea is to return an updated copy of the state
export default function(state = initialState.videos, action) {
  switch (action.type) {
    case types.SHUTTER_VIDEOS_SUCCESS:
      return [...state, action.videos]
    case types.SELECTED_VIDEO:
      // For context, { …state, videos: action.videos }
      // evaluates to Object.assign({}, state, action.videos)
      return { ...state, selectedVideo: action.video }
    default:
      return state
  }
}
