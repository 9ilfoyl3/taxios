import Taxios from '../../src/index'

// Taxios({
//   method: 'get',
//   url: '/testAll/get',
//   params: {
//     x: ['git', 'svn']
//   }
// })

// Taxios({
//   method: 'get',
//   url: '/testAll/get',
//   params: {
//     x: {
//       extendX: 'extra-X'
//     }
//   }
// })

// const date = new Date()

// Taxios({
//   method: 'get',
//   url: '/testAll/get',
//   params: {
//     date
//   }
// })

// Taxios({
//   method: 'get',
//   url: '/testAll/get',
//   params: {
//     x: '@$: '
//   }
// })

// Taxios({
//   method: 'get',
//   url: '/testAll/get#hash',
//   params: {
//     x: 'git'
//   }
// })

// Taxios({
//   method: 'get',
//   url: '/testAll/get',
//   params: {
//     x: 'git',
//     y: null
//   }
// })

// Taxios({
//   method: 'get',
//   url: '/testAll/get?x=git',
//   params: {
//     y: 'svn'
//   }
// })

Taxios({
  method: 'post',
  url: '/testAll/post',
  data: {
    git: 'x'
  }
})

// const array = new Int32Array([11, 23])

// Taxios({
//   method: 'post',
//   url: '/testAll/bufferPost',
//   data: {
//     array
//   }
// })

Taxios({
  method: 'post',
  url: '/testAll/post',
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
  data: {
    git: 'x'
  }
})

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

Taxios({
  method: 'post',
  url: '/testAll/post',
  data: searchParams
})
