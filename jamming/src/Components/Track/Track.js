import React from 'react';
import './Track.css';

class Track extends React.Component {
  render () {
    return (
<div class="Track">
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  <a className="Track-action"><!-- + or - will go here --></a>
</div>
    );
  }
  renderAction() {
    if (isRemoval === true) {
      console.log('-')
    } else { console.log('+')

    }
  }
}

export default Track;
