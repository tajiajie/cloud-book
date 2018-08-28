import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/layout/index'
import Login from '../view/user/login'
import Get from '../view/user/get'
import Add from '../view/user/add'
import Category from '../view/category/category'
import Edit from '../view/category/edit'

import Test2 from '../view/layout/edit'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: 'person',
          name: 'person',
          component: () => import('@/view/layout/person'),
          meta: {
            title: '个人中心'
          }
        },
        {
          path: 'get',
          name: 'get',
          component: Get,
          meta: {
            title: '管理员列表'
          }
        },
        {
          path: 'add',
          name: 'add',
          component: Add,
          meta: {
            title: '添加管理员'
          }
        },
        {
          path: 'detail',
          name: 'detail',
          component: () => import('@/view/user/detail'),
          meta: {
            title: '管理员详情页'
          }
        },
        {
          path: 'password',
          name: 'password',
          component: () => import('@/view/layout/password'),
          meta: {
            title: '修改密码'
          }
        },
        {
          path: 'my/edit',
          name: 'my-edit',
          component: () => import('@/view/layout/edit'),
          meta: {
            title: '修改个人信息'
          }
        },
        {
          path: 'category',
          name: 'category',
          component: Category,
          meta: {
            title: '分类列表'
          }
        },
        {
          path: 'category/edit',
          name: 'edit',
          component: Edit,
          meta: {
            title: '编辑分类'
          }
        },
        {
          path: 'category/add',
          name: 'add-cate',
          component: () => import('@/view/category/add-cate'),
          meta: {
            title: '添加分类'
          }
        },
        {
          path: 'category/book',
          name: 'category-book',
          component: () => import('@/view/category/category-book'),
          meta: {
            title: '该分类下的书'
          }
        },
        {
          path: 'add-book',
          name: 'add-book',
          component: () => import('@/view/book/add-book'),
          meta: {
            title: '添加图书'
          }
        },
        {
          path: 'books',
          name: 'books',
          component: () => import('@/view/book/books'),
          meta: {
            title: '图书列表'
          }
        },
        {
          path: 'book/detail',
          name: 'book-detail',
          component: () => import('@/view/book/detail'),
          meta: {
            title: '图书详情页'
          }
        },
        {
          path: 'book/edit',
          name: 'book-edit',
          component: () => import('@/view/book/edit'),
          meta: {
            title: '编辑图书'
          }
        },
        {
          path: 'swiper',
          name: 'swiper',
          component: () => import('@/view/swiper/swiper'),
          meta: {
            title: '轮播图列表'
          }
        },
        {
          path: 'swiperid',
          name: 'swiperid',
          component: () => import('@/view/swiper/swiper-id'),
          meta: {
            title: '轮播图详情'
          }
        },
        {
          path: 'swiper/edit',
          name: 'swiper-edit',
          component: () => import('@/view/swiper/edit'),
          meta: {
            title: '编辑轮播图'
          }
        },
        {
          path: 'swiper/add',
          name: 'swiper-add',
          component: () => import('@/view/swiper/add'),
          meta: {
            title: '编辑轮播图'
          }
        }
      ]
    }

  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})
export default router
