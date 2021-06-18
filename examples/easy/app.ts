import Taxios from '../../src/index'

Taxios({
  method: 'get',
  url: '/easy/get',
  params: {
    x: 1,
    y: 2
  }
})
