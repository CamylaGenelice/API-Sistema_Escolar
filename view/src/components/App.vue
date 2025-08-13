<template> 

    <div class="card">
        <Button label="Cadastrar ALuno" icon="pi pi-user-plus" @click="showDialog = true"/>

        <Dialog v-model:visible="showDialog" header="Cadastro" :modal="true">
            <div class="p-fluid">
                <InputText v-model="nome" placeholder="Nome"/>
                <InputText v-model="email" placeholder="E-mail" class="mt-3" />
                <InputText v-model="matricula" placeholder="matricula" class="mt-3" />
                <Password v-model="senha" placeholder="Senha" class="mt-3" />
                <Button label="Salvar" @click="cadastrarAluno" class="mt-3" />
            </div>

        </Dialog>
    </div>


</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'

const nome = ref('');
const matricula = ref('');
const email = ref('');
const senha = ref('');
const showDialog = ref(false) // Declaração reativa

const cadastrarAluno = () => {
    console.log({nome: nome.value, email: email.value, matricula: matricula.value})
    showDialog.value = false
}
</script>

<style lang="css" scoped>
.card {
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
}
</style>