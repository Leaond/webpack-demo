import b from './a'
import './test.css'

const r = require.context('./mode', false, /.js/)
r.keys().forEach(item => {
  console.log(r(item).default)
});

() => {
  const a = 23
  console.log('=====>>> ', b)
  console.log('=====>>> ', a)
}
