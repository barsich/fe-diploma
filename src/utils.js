import moment from 'moment';

export function createQuery(data) {
  let queryString = '';
  for (const option in data) {
    if (Object.hasOwnProperty.call(data, option) && data[option]) {
      queryString += `${option}=${data[option]}&`;
    }
  }
  if (queryString !== '') {
    queryString = queryString.slice(0, -1);
  }
  return queryString;
}

export function getFormattedDate(date) {
  return moment(date).format('YYYY-MM-DD');
}
