import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
      path: '',
      component: r => require.ensure([], () => r(require('../page/home')), 'home')
    },
    {
      path: 'test',
      component: r => require.ensure([], () => r(require('../page/test')), 'test')
    }]
}]
