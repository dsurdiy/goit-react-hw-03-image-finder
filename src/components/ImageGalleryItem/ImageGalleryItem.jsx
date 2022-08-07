import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  handleItemClick = e => {
    if (e.currentTarget !== e.target) {
      this.setState({ showModal: true });
    }
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { id, webformatURL, largeImageURL } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <li className={css.gallery_item} onClick={this.handleItemClick}>
          <img src={webformatURL} alt={id} />
        </li>

        {showModal && <Modal src={largeImageURL} onClose={this.hideModal} />}
      </>
    );
  }
}
