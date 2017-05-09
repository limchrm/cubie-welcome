import React, { Component, StatelessComponent } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
const styles = require('./Detail.css');

interface DetailSliderProps {
  title: string;
  maxStep: number;
}
interface DetailSliderState {
  step: number;
}
class DetailSlider extends Component<DetailSliderProps, DetailSliderState> {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    }
  }

  renderImg = (title: string, step: number) => (
    <img
      src={require(`../../common/images/${title}_0${step}.png`)}
      alt={title}
    />
  );

  handleGoToNext = () => this.setState({ step: this.state.step + 1 });
  handleGoToPrev = () => this.setState({ step: this.state.step - 1 });

  render() {
    return (
      <div className={styles.sliderBg}>
        <div className={styles.slider}>
          <Link className={styles.backToHome} to="/">
            BACK TO HOME
          </Link>

          {this.renderImg(this.props.title, this.state.step)}

          <div className={styles.sliderBottomBar}>
            <button
              onClick={this.handleGoToPrev}
              disabled={this.state.step === 0}
              className={styles.sliderPrevButton}
            >PREV</button>

            <p className={styles.sliderIndicator}>
              {this.state.step} / 4
            </p>

              <button
                onClick={this.handleGoToNext}
                disabled={this.state.step === this.props.maxStep}
                className={styles.sliderNextButton}
              >NEXT</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailSlider;
