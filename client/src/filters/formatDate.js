import moment from 'moment'
export default function (value) {
  if (!value) return ''
  const date = moment(value)
  if (date.isValid()) {
    return date.format('DD.MM.YYYY')
  } else {
    return ''
  }
}
