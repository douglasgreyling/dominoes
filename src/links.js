class Links {
  constructor(domino) {
    this._links = [domino];
  }

  all = () => [...this._links];

  link = (domino) => {
    if (this._linkedLeft(domino)) {
      return { domino: domino, linkedTo: this.all()[1] };
    } else if (this._linkedRight(domino)) {
      return { domino: domino, linkedTo: this.all()[this.length - 2] };
    }

    return;
  };

  get length() {
    return this._links.length;
  }

  _linkedLeft(domino) {
    if (domino.canLink(this._first())) {
      this._links.unshift(domino);
      return true;
    } else if (domino.rotate().canLink(this._first())) {
      this._links.unshift(domino);
      return true;
    }

    return false;
  }

  _linkedRight(domino) {
    if (this._last().canLink(domino)) {
      this._links.push(domino);
      return true;
    } else if (this._last().canLink(domino.rotate())) {
      this._links.push(domino);
      return true;
    }

    return false;
  }

  _first = () => this._links[0];

  _last = () => this._links[this._links.length - 1];
}

Links.prototype.toString = function () {
  return this.all().toString();
};

module.exports = Links;
