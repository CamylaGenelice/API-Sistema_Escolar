<template>
    <div class="flex justify-content-center align-items-center cor-body" style="min-height: 100vh;">
        <Card class="w-full md:w-6 borda">
          <template #title >
            <div id="titulo">Cadastro de Turmas </div>
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