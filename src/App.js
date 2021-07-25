import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import searchApi from "./services/searchApi";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    searchPage: 1,
    isLoaderOn: false,
    isModalOpen: false,
    modalImage: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.images !== prevState.images) {
      if (this.state.images.length > 12) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }

  searchSubmit = async (e) => {
    e.preventDefault();

    if (!this.state.searchQuery) {
      return;
    }

    this.setState({ isLoaderOn: true });
    await searchApi(this.state.searchQuery, this.state.searchPage)
      .then((data) => {
        this.setState({ images: data, searchPage: 1 });
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

    this.setState({ isLoaderOn: false });
  };

  loadMoreBtn = async () => {
    await this.setState((prevState) => ({
      searchPage: prevState.searchPage + 1,
    }));

    this.setState({ isLoaderOn: true });

    await searchApi(this.state.searchQuery, this.state.searchPage).then(
      (data) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...data],
        }))
    );

    this.setState({ isLoaderOn: false });
  };

  inputChange = ({ target }) => {
    const { value } = target;

    this.setState({ searchQuery: value });
  };

  openModal = async ({ target }) => {
    if (target.nodeName !== "IMG") {
      return;
    }

    await this.setState({ modalImage: target.dataset.image });
    this.toggleModal();
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  toggleModal = () => {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar
          onSubmit={this.searchSubmit}
          value={this.searchQuery}
          onChange={this.inputChange}
        />

        <ImageGallery onClick={this.openModal} images={this.state.images} />

        {this.state.isLoaderOn && (
          <Loader type="Oval" color="#3f51b5" height={40} width={40} />
        )}

        {this.state.images.length > 0 && !this.state.isLoaderOn && (
          <Button onClick={this.loadMoreBtn} />
        )}

        {this.state.isModalOpen && (
          <Modal image={this.state.modalImage} onClose={this.closeModal}>
            <img src={this.props.image} alt="Modal IMG" />
          </Modal>
        )}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default App;
