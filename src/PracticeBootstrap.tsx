import React from 'react'

const PracticeBootstrap = () => {
  return (
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Oh snap! You got an error!</strong>
      <p>Change this and that and try again.</p>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default PracticeBootstrap
