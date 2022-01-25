const images = {
  // FIXME howitworks images to svg
  howitworks: {
    first: require('./howitworks/howitworks-1.png').default,
    second: require('./howitworks/howitworks-2.png').default,
    third: require('./howitworks/howitworks-3.png').default,
  },
  train: {
    white: require('./icons/train.svg').default,
    orange: require('./icons/train_orange.svg').default,
  },
  passenger: {
    round: require('./icons/passenger-round.svg').default,
  },
  orderingSucceeded: {
    first: require('./ordering-succeeded/ordering-succeeded-1.svg').default,
    second: require('./ordering-succeeded/ordering-succeeded-2.svg').default,
    third: require('./ordering-succeeded/ordering-succeeded-3.svg').default,
  }
};

export default images;
