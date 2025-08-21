import { createRouter, createWebHistory } from 'vue-router'
import cadastroAluno from '@/components/cadastroAluno.vue'

const routes = [
    {
        path: '/',
        nome: 'Home',
        component: cadastroAluno
    },
    {
        path: '/alunos',
        name: 'Cadastro',
        component: cadastroAluno

    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router