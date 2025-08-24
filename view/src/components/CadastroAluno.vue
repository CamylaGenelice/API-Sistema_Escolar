<template> 
    <div class="flex justify-content-center align-items-center" style="min-height: 100vh;">
        <Card class="w-full md:w-6">
            
            <template #title>Cadastro de Aluno</template>
            <template #content>
                <div class="p-fluid">

                    <div class="field">
                        <label for="nome">Nome</label>
                        <InputText id="nome" v-model="form.nome" />
                    </div>

                    <div class="field mt-3">
                        <label for="email">E-mail</label>
                        <InputText id="email" v-model="form.email" />
                    </div>

                    <div class="field mt-3">
                        <label for="email">Senha</label>
                        <Password id="senha" v-model="form.senha" toggleMask/>
                    </div>

                    <div class="field mt-3">
                        <label for="email">Matricula</label>
                        <InputText id="matricula" v-model="form.matricula" />
                    </div>
                    <Button 
                        label="Cadastrar" 
                        icon="pi pi-user-plus" 
                        class="mt-3" 
                        @click="submitForm" 
                        :loading="loading" 
                    />
                </div>
            </template>

        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import api from '@/services/api.js'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const loading = ref(false)

const form = ref({
  nome: '',
  email: '',
  senha: '',
  matricula: ''
})

const submitForm = async () => {
    try {
        
        loading.value = true
       
        await api.post('/usuarios/alunos',form.value)
        
        toast.add({
            severity: 'success',
            summary: 'Sucesso!',
            detail: 'Aluno cadastrado com sucesso',
            life: 3000
        })
        form.value = {nome: '', email: '', senha: '', matricula: ''}
    }
     catch (error) {
        toast.add({
            severity:  'error',
            summary: 'Erro',
            detail: error.response?.data.message || 'Falha no cadastro',
            life: 5000
        })

    }
    finally {
        loading.value = false
    }
}

</script>