import { createRouter, createWebHistory } from 'vue-router'

import CadastroAluno from '@/components/CadastroAluno.vue'

const routes = [
    {
        path: '/',
        nome: 'Home',
        component: CadastroAluno
    },
    {
        path: '/alunos',
        name: 'Cadastro',
        component: CadastroAluno

    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router