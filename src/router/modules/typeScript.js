import LayoutTwo from '@/views/layout/LayoutTwo'

export default [
    {
        path: '/typeScript/index',
        name: 'TypeScript',
        component: LayoutTwo,
        redirect: '/typeScript/page1',
        meta: {
            isInside: true,//是否是内页的菜单
            title: 'TypeScript',
        },
        children: [
            {
                path: '/typeScript/page1',
                name: 'page1',
                component: () => import('@/views/typeScript/page1'),
                meta: {
                    title: '页面1',
                },
            },
            {
                path: '/typeScript/page2',
                name: 'page2',
                component: () => import('@/views/typeScript/page2'),
                meta: {
                    title: '页面2',
                },
            },
            {
                path: '/typeScript/page3',
                name: 'blankPage1',
                redirect: '/typeScript/page3',
                component: () => import('@/views/typeScript/page3'),
                meta: {
                    title: '组合1',
                },
                children: [
                    {
                        path: '/typeScript/page3',
                        name: 'page3',
                        component: () => import('@/views/typeScript/page3'),
                        meta: {
                            title: '页面3',
                        }
                    },
                ]
            },
            {
                path: '/typeScript/page4',
                name: 'page4',
                component: () => import('@/views/typeScript/page4'),
                meta: {
                    title: '页面4',
                },
            },
        ]
    },
]
