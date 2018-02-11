import React, { Component } from "react"
// import PropTypes from "prop-types"

import { connect } from "react-redux"
import { searchMediaAction } from "../actions/mediaActions"

// MediaGalleryPage Component
class MediaGalleryPage extends Component {
  // Dispatches *searchMediaAction* immediately after initial rendering.
  // Note that we are using the dispatch method from the store to execute this task, courtesy of react-redux
  componentDidMount() {
    this.props.dispatch(searchMediaAction("cloud"))
  }

  render() {
    console.log(this.props.images, "Images")
    console.log(this.props.videos, "Videos")
    console.log(this.props.selectedImage, "SelectedImage")
    console.log(this.props.selectedVideo, "SelectedVideo")
    return (
      <div>
        <div>
          <h1>IMAGES</h1>
          <ul>
            {this.props.images &&
              this.props.images.map((image) => {
                return <li key={image.id}>{image.title}</li>
              })}
          </ul>
        </div>
        <div>
          <h1>VIDEOS</h1>
          <ul>
            {this.props.videos &&
              this.props.videos.map((video) => {
                return <li key={video.id}>{video.description}</li>
              })}
          </ul>
        </div>
      </div>
    )
  }
}

// -----------------------------------------------------------------------------

// Define PropTypes
MediaGalleryPage.propTypes = {
  // Define your PropTypes here
}

// -----------------------------------------------------------------------------

// Subscribe component to redux store and merge the state into
// component's props
const fromStoreToProps = ({ images, videos }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo
})

// -----------------------------------------------------------------------------

// connect method from react-redux connects the component with redux store
export default connect(fromStoreToProps)(MediaGalleryPage)
