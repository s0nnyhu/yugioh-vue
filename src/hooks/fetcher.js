import { api } from "../helpers/api";
import { ref } from 'vue'

export function useFetch(url) {
    const loading = ref(false)
    const STATIC_DATA = ref([])
    const data = ref([])
    const error = ref(false)
    const fetchData = async function () {
        loading.value = true;
        try {
            data.value = await api(url)
            STATIC_DATA.value = data.value
        } catch (e) {
            error.value = 'Aie Aie Aie :/'
        }
        loading.value = false;
    }
    return {
        loading,
        STATIC_DATA,
        data,
        error,
        fetchData
    }
}