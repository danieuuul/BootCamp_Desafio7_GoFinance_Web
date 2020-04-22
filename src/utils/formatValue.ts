// import moment from 'moment';
// import 'moment/locale/pt-br';

// export const formatDate = (value: Date): string => moment(value).format('L');

const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;
