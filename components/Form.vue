<template>
    <div class="block p-6 md:rounded-lg md:shadow-lg bg-white max-w-lg">
        <form @submit.prevent="onSubmit">
            <div class="grid grid-cols-2 gap-4">
                <div class="form-group mb-6">
                    <input v-model="form.firstName" type="text" required class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    valid:border-emerald-500
                    focus:valid:border-emerald-500
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Nombre">
                </div>
                <div class="form-group mb-6">
                    <input v-model="form.secondName" type="text" class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Segundo Nombre">
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="form-group mb-6">
                    <input v-model="form.firstSurname" type="text" required class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    valid:border-emerald-500
                    focus:valid:border-emerald-500
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Apellido Paterno">
                </div>
                <div class="form-group mb-6">
                    <input v-model="form.secondSurname" required type="text" class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    valid:border-emerald-500
                    focus:valid:border-emerald-500
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Apellido Materno">
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="form-group mb-6">
                    <input type="text" v-model="form.city" class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Ciudad">
                </div>
                <div class="form-group mb-6">
                    <input type="text" v-model="form.province" class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Provincia">
                </div>
            </div>
            <div class="form-group mb-6">
                    <input type="text" v-model="form.address" class="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Dirección">
                </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="form-group mb-6">
                    <input type="email" v-model="form.email" required class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        valid:border-emerald-500
                        focus:valid:border-emerald-500
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Email">
                </div>
                <div class="form-group mb-6">
                    <input type="text" v-model="form.phoneNumber" maxlength="10" minlength="10" required pattern="[0-9]{10}" inputmode="numeric" class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        valid:border-emerald-500
                        focus:valid:border-emerald-500
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Celular">
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="form-group mb-6">
                    <input type="text" v-model="form.work" class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Empresa donde trabaja">
                </div>
                <div class="form-group mb-6">
                    <input type="text" v-model="form.workCity" class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Ciudad">
                </div>
            </div>
            <br/>
            <div class="grid grid-cols-2 gap-4">
                <div class="flex justify-center">
                    <div class="mb-3 w-96">
                         <ID4FaceFileInput :idNumber="form.id" format="image" type="id-front" @file="f => idFrontImage.file = f" :description="idFrontImage.description" />
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="mb-3 w-96">
                        <ID4FaceFileInput :idNumber="form.id" format="image" type="id-rear" @file="f => idRearImage.file = f" :description="idRearImage.description" />
                    </div>
                </div>
                <div v-for="item,i in requiredFiles" class="flex justify-center">
                    <div class="mb-3 w-96">
                        <FileInput @file="f => item.file = f" :description="item.description" />
                    </div>
                </div>
                <!-- <div class="flex justify-center">
                    <div class="mb-3 w-96">
                        <FileInput :idNumber="form.id" format="document" type="planilla" @file="f => files.billFile = f" description="Planilla" />
                    </div>
                </div> -->
            </div>
            <br />
            <div class="grid grid-cols-2 gap-4">
                <Button :disabled="!valid" type="submit" variant="confirm">Siguiente</Button>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
import ID4FaceFileInput from './ID4FaceFileInput.vue';
import FileInput from './FileInput.vue';
import Button from '@/components/ui/Button.vue';

    const props = defineProps<{
        checkIdData?: CheckIdData
        requiredFiles?: any[]
    }>()
    
    const emit = defineEmits<{
        (e: 'data', data: any): void
    }>()

    const form = reactive({
        firstName: "",
        secondName: "",
        firstSurname: "",
        secondSurname: "",
        id: "",
        city: "",
        province: "",
        address: "",
        email: "",
        phoneNumber: "",
        work: "",
        workAddress: "",
        workCity: ""
    })

    type RequiredFile = {
        name: string
        description: string
        file: File | undefined
        valid: boolean
    }

    const idFrontImage: RequiredFile = {
        name: "idFront",
        description: "Cédula (lado frontal)",
        file: undefined,
        valid: false
    };

    const idRearImage: RequiredFile =  {
        name: "idRear",
        description: "Cédula (lado reverso)",
        file: undefined,
        valid: false
    };

    const requiredFiles: RequiredFile[] = [
        {name: "rol", description: "", file: undefined, valid: false},
        {name: "bill", description: "", file: undefined, valid: false}
    ];


    onMounted(() => {
        populateFields()
    })

    const populateFields = () => {
        if(!props.checkIdData) return;
        let firstSurname, secondSurname, firstName, secondName;
        if(!props.checkIdData.nombres || !props.checkIdData.apellidos){
            [firstSurname, secondSurname, firstName, secondName] = props.checkIdData.nombreCompleto.split(' ');
        } else if(props.checkIdData.nombres && props.checkIdData.apellidos){
            [firstName, secondName] = props.checkIdData.nombres.split(' ');
            [firstSurname, secondSurname] = props.checkIdData.apellidos.split(' ');
        }
        form.firstSurname = firstSurname;
        form.secondSurname = secondSurname;
        form.firstName = firstName;
        form.secondName = secondName;
        form.id = props.checkIdData.identificacion;
    }

    const validateFileInputs = (): boolean => {
        return (
            idFrontImage.valid == true &&
            idRearImage.valid == true &&
            Object.values(requiredFiles).every((file: any) => file.valid == true)
        )
    }

    const valid = computed(() => {
        return validateFileInputs();
    })


    const onSubmit = () => {
        if(!validateFileInputs()) console.error('faltan archivos');
        else emit('data', {
            form: form,
            idFront: idFrontImage.file,
            idRear: idRearImage.file,
            files: requiredFiles
        })
    }

</script>