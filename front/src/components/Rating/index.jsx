import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  scale: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  onSelect: PropTypes.func.isRequired,
};

const maxWidth = 300;


class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayWidth: 0,
    };


    this.getDistance = this.getDistance.bind(this);
  }


  renderCircle(rating, index) {
    const width = maxWidth - (maxWidth / this.props.scale.length) * index;
    const style = {
      width: width,
      height: width,
      borderRadius: '50%',
      border: '1px solid black',
      // background: rating.color,
      position: 'absolute',
      left: (maxWidth - width) / 2,
      top: (maxWidth - width) / 2,
    };
    return (
      <div
        key={rating.id}
        style={style}
      />

    )
  }


  getDistance(e) {
    const rect = this.container.getBoundingClientRect();
    const centerX = rect.left + maxWidth / 2;
    const centerY = rect.top + maxWidth / 2;
    const distance = Math.sqrt((Math.pow((centerX - e.clientX), 2) + (Math.pow((centerY - e.clientY), 2))));

    this.setState({
      overlayWidth: distance,
    })
    // console.log(res);
    // console.log('y y: ' + y);
  }

  render() {
    const style = {
      width: maxWidth,
      height: maxWidth,
      borderRadius: '50%',
      border: '1px solid black',
      position: 'absolute',
    };

    const overlayStyles= {
      width: this.state.overlayWidth * 2,
      height: this.state.overlayWidth * 2,
      borderRadius: '50%',
      border: '1px solid black',
      position: 'absolute',
      left: (maxWidth - this.state.overlayWidth * 2) / 2,
      top: (maxWidth - this.state.overlayWidth * 2) / 2,
      background: 'tomato',
    };

    // const reversedScale = this.props.scale.reverse();
    return (
      <div>
        <div
          onMouseMove={this.getDistance}
          ref={(el) => {
            this.container = el;
          }}
          className="rating"
          style={style}>
          {this.props.scale.map((rating, index) => {
            return this.renderCircle(rating, index)
          })
          }
          <div
            style={overlayStyles}
          />
        </div>

      </div>
    );
  }
}


Rating.propTypes = propTypes;

export default Rating;




