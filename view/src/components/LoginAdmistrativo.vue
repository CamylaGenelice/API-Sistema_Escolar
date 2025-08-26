<template>
    <div class="flex justify-content-center align-items-center cor-body" style="min-height: 100vh;">
     <Card class="w-full md:w-6 borda"> 
        <template #title >
            <div id="titulo">Login Admin</div>
        </template>
        <template #content>
            <div class="p-fluid">

                <div class="field">
                    <label for="email">Email</label>
                    <InputText id="email" v-model="form.email" />
                </div>

                <div class="field mt-3">
                    <label for="senha">Senha</label>
                    <Password id="senha" v-model="form.senha" toggle-mask />
                </div>
                <Button 
                    label="Entrar"
                    icon="pi pi-user-plus"
                    class="mt-3"
                    @click="login"
                    :loading="loading"
                />    
            </div>
            <div class="footer"> &copy; 2025 Sabiá</div>
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

const toast =  useToast()
const loading = ref(false)

const form = ref ({
    email: '',
    senha: ''
})

const login = async () => {
    try {
        loading.value = true

        await api.post('/',form.value)

        toast.add({
            severity: 'success',
            summary: 'Sucesso!',
            detail: 'Login realizado com sucesso',
            life: 3000
        })

        form.value = {email: '', senha: ''}
    } 
    catch (error) {
        toast.add({
            severity:  'error',
            summary: 'Erro',
            detail: error.response?.data.message || 'Falha no login',
            life: 5000
        })
    }
    finally{
        loading.value = false
    }
}
</script>

<style>

#titulo {
    text-align: center;
    color:#0077d8;
}

.footer {
    margin-top: 20px;
      text-align: center;
      font-size: 14px;
      color: #666;
}
.cor-body {
    
    background: linear-gradient(135deg, #2c57a8, #2a5298);
}
.borda {
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>