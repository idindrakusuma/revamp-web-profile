import React, { PureComponent } from 'react';
import { string, shape, arrayOf } from 'prop-types';

import { slidesWrapper, imageOverlay, backstrech, quoteText, imageTitle } from './styles';

class HomeSlider extends PureComponent {
  static propTypes = {
    items: arrayOf(
      shape({
        title: string.isRequired,
        imageSrc: string.isRequired,
      }),
    ),
    quote: shape({
      text: string.isRequired,
      author: string.isRequired,
      authorTitle: string.isRequired,
    }),
  };

  constructor() {
    super();

    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.loopImagesHandler();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  loopImagesHandler = () => {
    this.timer = setInterval(() => {
      this.nextImageHandler();
    }, 5000);
  };

  nextImageHandler = () => {
    const { currentIndex } = this.state;
    const { items } = this.props;
    const lastIndex = items.length - 1;
    const shouldResetState = currentIndex === lastIndex;

    const nextIndex = shouldResetState ? 0 : currentIndex + 1;

    this.setState({ currentIndex: nextIndex });
  };

  render() {
    const { currentIndex } = this.state;
    const { items, quote } = this.props;

    return (
      <div css={slidesWrapper}>
        <div css={quoteText}>
          <h2>{`"${quote.text}"`}</h2>
          <span>{`- ${quote.author}, ${quote.authorTitle} -`}</span>
        </div>
        <div css={imageOverlay} />
        <div css={backstrech}>
          <img src={items[currentIndex].imageSrc} alt={items[currentIndex].title} />
        </div>
        <div css={imageTitle}>
          <i className="fa fa-camera-retro"></i> <span>{items[currentIndex].title}</span>
        </div>
      </div>
    );
  }
}

export default HomeSlider;