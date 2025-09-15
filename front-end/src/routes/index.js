import { createRouter, createWebHistory } from 'vue-router'

import CadastroAluno from '@/components/CadastroAluno.vue'
import LoginAdmistrativo from '@/components/LoginAdmistrativo.vue'
import CadastroProfessor from '@/components/CadastroProfessor.vue'

const routes = [
    {
        path: '/',
        nome: 'Login',
        component: LoginAdmistrativo
    },
    {
        path: '/professores',
        nome: 'CadastroProfessor',
        component: CadastroProfessor
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