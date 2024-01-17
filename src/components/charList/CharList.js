import { Component } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import MarvelService from "../../services/MarvelService";

import "./charList.scss";

class CharList extends Component {
  state = {
    charList: [],
    loading: true, //первичная закрузка
    error: false,
    newItemLoading: false, //вызывается вручную more,
    offset: 210,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequest();
  }

  onRequest = (offset) => {
    this.onCharListLoading();
    this.marvelService
      .getAllCharacters(offset)
      .then(this.onCharListLoaded)
      .catch(this.onError);
  };

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true,
    });
  };

  onCharListLoaded = (newCharList) => {
    this.setState(({ charList, offset }) => ({
      charList: [...charList, ...newCharList],
      loading: false,
      newItemLoading: false,
      offset: offset + 9,
    }));
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  itemRefs = [];

  // setRef = (ref) => {
  //   this.itemsRef.push(ref);
  // };

  // focusOnItem = (id) => {
  //   this.itemRefs.forEach((item) =>
  //     item.classList.remove("char__item_selected")
  //   );
  //   this.itemRefs[id].classList.add("char__item_selected");
  //   this.itemRefs[id].focus();
  // };

  renderItems(charList) {
    const items = charList.map((item, i) => {
      let imgStyle = { objectFit: "contain" };
      if (
        item.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle = { objectFit: "contain" };
      }

      return (
        <li
          className="char__item"
          ref={this.setRef}
          key={item.id}
          onClick={() => {
            this.props.onCharSelected(item.id);
            // this.focusOnItem(i);
          }}
        >
          <img src={item.thumbnail} alt={item.name} style={imgStyle} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });

    return <ul className="char__grid">{items}</ul>;
  }

  render() {
    const { charList, loading, error, offset, newItemLoading } = this.state;

    const items = this.renderItems(charList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? items : null;

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}

        {/* <ul className="char__grid">
          <li className="char__item char__item_selected">
            <img src={abyss} alt="abyss" />
            <div className="char__name">Abyss</div>
          </li>
        </ul> */}
        <button
          onClick={() => this.onRequest(offset)}
          disabled={newItemLoading}
          className="button button__main button__long"
        >
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
